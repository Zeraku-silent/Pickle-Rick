import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CharacterCard } from '../Main/CharacterCard';
import { charactersInEpisode, clearStore } from '../../store/oneEpisodeReducer';
import { fetchCharatersInEpisode } from '../../store/asyncActions/asyncCharactersInEpisodeRequest';

export const EpisodePage = () => {
    const { state } = useLocation();
    const heroes = useSelector(charactersInEpisode);
    const dispatch = useDispatch();

    useEffect(() => {
        state.characters.forEach((url) => {
            dispatch(fetchCharatersInEpisode(url));
        });
        return () => {
            dispatch(clearStore());
        };
    }, [dispatch, state.characters]);

    return (
        <Box
            mr={'auto'}
            ml={'auto'}
            w={'70%'}
            borderRadius={25}
            p={5}
            mt={150}
            bg={'gray.800'}
            bgGradient={[
                'linear-gradient(290deg, gray.500, gray.500, #000)',
                'radial-gradient(ellipse farthest-corner, gray.500 40%, #000 90%)',
            ]}
            h={'auto'}
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
            <Box bg={'gray.700'} borderRadius={25} p={5} pr={2} pl={2} m={2}>
                <Heading> В эпизоде присутсвуют:</Heading>
                <Flex
                    mt={10}
                    gap={5}
                    wrap={'wrap'}
                    mr={'auto'}
                    ml={'auto'}
                    justifyContent={'space-evenly'}
                >
                    {heroes ? (
                        heroes.map((card) => (
                            <CharacterCard
                                key={card.id}
                                character={card}
                            ></CharacterCard>
                        ))
                    ) : (
                        <Spinner />
                    )}
                </Flex>
            </Box>
        </Box>
    );
};
