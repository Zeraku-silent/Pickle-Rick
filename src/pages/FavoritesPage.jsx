import { useDispatch, useSelector } from 'react-redux';
import {
    favoriteCharacters,
    liked,
    loadStorage,
    removeFavorites,
} from '../store/likedCharactersReducer';
import { Flex, Heading } from '@chakra-ui/react';
import { CharacterCard } from './Main/CharacterCard';
import { useEffect } from 'react';
import { fetchFavoriteCharacters } from '../store/asyncActions/asyncFavoriteCharactersRequest';

export const FavoritList = () => {
    const likedCharacters = useSelector(liked);
    const favorites = useSelector(favoriteCharacters);
    const dispatch = useDispatch();

    useEffect(() => {
        const likedStore = localStorage.getItem('liked') || '[]';

        dispatch(loadStorage(JSON.parse(likedStore)));
    }, [dispatch]);

    useEffect(() => {
        if (likedCharacters.length < 1) {
            dispatch(removeFavorites());
        }
    }, [dispatch, likedCharacters]);
    useEffect(() => {
        if (likedCharacters.length >= 1) {
            dispatch(fetchFavoriteCharacters(likedCharacters));
        }
    }, [dispatch, likedCharacters]);

    return (
        <Flex
            mt={40}
            mx={'auto'}
            width={'70%'}
            pt={5}
            wrap={'wrap'}
            justify={'flex-start'}
            gap={10}
            alignItems={'center'}
            minH={'50vh'}
            maxH={'100%'}
        >
            {favorites.length > 1 ? (
                favorites.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            ) : favorites.length === 0 ? (
                <Heading mr={'auto'} ml={'auto'}>
                    Пока здесь нет персонажей. Возжно Вам никто не нравится?
                </Heading>
            ) : (
                <CharacterCard key={favorites.id} character={favorites} />
            )}
        </Flex>
    );
};
