import { Box, Flex, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { characters } from '../../store/charactersReducer';
import { useEffect, useState } from 'react';
import { CharacterCard } from '../Main/CharacterCard';
import { charactersInEpisode, clearStore } from '../../store/oneEpisodeReducer';
import { fetchCharatersInEpisode } from '../../store/asyncActions/asyncCharactersInEpisodeRequest';

export const EpisodePage = () => {
    const { state } = useLocation();
    const heroes = useSelector(charactersInEpisode);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const popa = state.characters.map((character) =>
    //         heroes.filter((hero) => hero.url === character),
    //     );
    //     setCard(
    //         state.characters.map((character) =>
    //             heroes.find((hero) => hero.url === character),
    //         ),
    //     );
    // }, [heroes, state.characters]);
    useEffect(() => {
        dispatch(fetchCharatersInEpisode(state.characters));
        // state.characters.map((character) => {
        //     dispatch(fetchCharatersInEpisode(character));
        // });

        // return () => {
        //     dispatch(clearStore());
        // };
    }, [dispatch, state.characters]);

    console.log(heroes);

    return (
        <Box
            borderRadius={25}
            p={5}
            mt={150}
            bg={'gray.800'}
            bgGradient={[
                'linear-gradient(290deg, gray.500, gray.500, #000)',
                'radial-gradient(ellipse farthest-corner, gray.500 40%, #000 90%)',
            ]}
            h={'100vh'}
        >
            <Box bg={'gray.700'} borderRadius={25} p={5} pr={2} pl={2} m={2}>
                <Heading>{state.name}</Heading>
                <Box
                    bg={'gray.600'}
                    p={1}
                    pl={5}
                    borderRadius={25}
                    mr={5}
                    ml={5}
                    mt={2}
                    fontSize={'lg'}
                >
                    Release data: {state.air_date}
                </Box>
                <Box
                    bg={'gray.600'}
                    p={1}
                    pl={5}
                    borderRadius={25}
                    mr={5}
                    ml={5}
                    mt={2}
                    fontSize={'lg'}
                >
                    Created: {state.created}
                </Box>
            </Box>
            <Flex wrap={'wrap'}>
                {heroes ? (
                    heroes.map((card) => (
                        <CharacterCard
                            key={card.id}
                            character={card}
                        ></CharacterCard>
                    ))
                ) : (
                    <Box>asd</Box>
                )}
            </Flex>
        </Box>
    );
};
