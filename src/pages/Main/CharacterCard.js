import {
    Card,
    CardBody,
    Stack,
    Heading,
    Image,
    Text,
    Button,
    Box,
    IconButton,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
    addCharacter,
    liked,
    removeCharacter,
} from '../../store/likedCharactersReducer';

export const CharacterCard = ({ character }) => {
    const id = `/character/${character.id}`;
    const [like, setLike] = useState(false);

    const likedCharacters = useSelector(liked);
    const dispatch = useDispatch();

    useEffect(() => {
        setLike(likedCharacters.includes(character.id));
    }, [character.id, character.name, likedCharacters]);

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedCharacters));
        // localStorage.setItem('chakra-ui-color-mode', 'dark');
    }, [likedCharacters]);

    const isAlive = (character) => {
        let st;
        if (character.status === 'Alive') {
            st = '#44c123';
            return st;
        } else if (character.status === 'Dead') {
            st = '#f71414';
            return st;
        } else if (character.status === 'unknown') {
            st = 'gray';
            return st;
        }
    };

    const likeCard = useCallback(
        (e) => {
            setLike(true);
            dispatch(addCharacter(character.id));
        },

        [character, dispatch],
    );
    const dislikeCard = useCallback(
        (e) => {
            setLike(false);
            dispatch(removeCharacter(character.id));
        },

        [character, dispatch],
    );

    return (
        <Card
            maxW={300}
            _hover={{
                background: [
                    `linear-gradient(290deg, ${isAlive(character)}, ${[
                        isAlive(character),
                    ]}, #000)`,
                    `radial-gradient(ellipse farthest-corner, ${isAlive(
                        character,
                    )} 40%, #000 90%)`,
                ],
                shadow: `5px 2px 30px ${isAlive(character)}`,
                color: 'white',
            }}
            variant={'elevated'}
            p={3}
            color={'white'}
            fontSize={'1.25rem'}
            borderRadius={25}
            bgGradient={[
                'linear-gradient(290deg, #474A51, #474A51, #000)',
                'radial-gradient(ellipse farthest-corner, #474A51 40%, #000 90%)',
            ]}
            width="auto"
            h="auto"
        >
            <CardBody>
                <Image src={character.image} borderRadius={25} />
                <Stack mt={3} spacing={3}>
                    <Heading
                        noOfLines={1}
                        textShadow="5px 4px black"
                        fontSize={'larger'}
                    >
                        <Text>{character.name}</Text>
                    </Heading>
                    <Text>Gender: {character.gender}</Text>
                    <Text>Species: {character.species}</Text>
                    <Text>Status: {character.status}</Text>
                    <Box>
                        <Link to={id}>
                            <Button>Подробнее...</Button>
                        </Link>
                        {like ? (
                            <IconButton
                                onClick={dislikeCard}
                                ml={5}
                                isRound={true}
                                variant="solid"
                                colorScheme="gray"
                                aria-label="Done"
                                fontSize="20px"
                                icon={<FaStar color="yellow" />}
                            />
                        ) : (
                            <IconButton
                                onClick={likeCard}
                                ml={5}
                                isRound={true}
                                variant="solid"
                                colorScheme="gray"
                                aria-label="Done"
                                fontSize="20px"
                                icon={<FaStar color="gray" />}
                            />
                        )}
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};
