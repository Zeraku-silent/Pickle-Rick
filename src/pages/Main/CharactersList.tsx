import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../hook';
import React from 'react';
import { CharacterCard } from './CharacterCard';
import {
    characters,
    countAllCharacters,
    fetchToggle,
    fetching,
    pageCurrent,
} from '../../store/charactersReducer.';
import { Flex } from '@chakra-ui/react';
import { fetchCharacters } from '../../store/asyncActions/asyncCharactersRequest';
import { liked, loadStorage } from '../../store/likedCharactersReducer.';

export const CharactersList = () => {
    const heroes = useSelector(characters);
    const totalCount = useSelector(countAllCharacters);
    const currentPage = useSelector(pageCurrent);
    const loading = useSelector(fetching);
    const likedCharacters = useSelector(liked);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const likedStore = localStorage.getItem('liked') || '[]';
        dispatch(loadStorage(JSON.parse(likedStore)));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedCharacters));
        // localStorage.setItem('chakra-ui-color-mode', 'dark');
    }, [likedCharacters]);

    const handleScroll = useCallback(
        //@ts-ignore
        (e) => {
            if (
                e.target.documentElement.scrollHeight -
                    (window.innerHeight + e.target.documentElement.scrollTop) <
                    100 &&
                heroes.length < totalCount
            ) {
                dispatch(fetchToggle(true));
            }
        },
        [heroes.length, totalCount, dispatch],
    );

    useEffect(() => {
        if (loading) {
            dispatch(fetchCharacters(currentPage));
        }
    }, [loading, currentPage, dispatch]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

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
            {heroes.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </Flex>
    );
};
