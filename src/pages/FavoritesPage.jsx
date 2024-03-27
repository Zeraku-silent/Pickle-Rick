import { useDispatch, useSelector } from 'react-redux';
import {
    favoriteCharacters,
    liked,
    loadStorage,
} from '../store/likedCharactersReducer';
import { Flex, Spinner } from '@chakra-ui/react';
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
        if (likedCharacters.length >= 1) {
            dispatch(fetchFavoriteCharacters(likedCharacters));
        }
    }, [dispatch, likedCharacters]);

    console.log(favorites);
    return (
        <Flex
            mt={40}
            mx={'auto'}
            width={'70%'}
            pt={5}
            wrap={'wrap'}
            justify={'space-around'}
            gap={10}
            alignItems={'center'}
        >
            {favorites ? (
                favorites.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            ) : (
                <Spinner />
            )}
        </Flex>
    );
};
