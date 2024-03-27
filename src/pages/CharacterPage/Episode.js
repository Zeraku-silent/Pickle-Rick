import { Box, Button, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oneEpisode } from '../../store/oneEpisodeReducer';
import { fetchOneEpisode } from '../../store/asyncActions/asyncOneEpisodeRequest';
import { Link } from 'react-router-dom';
import { liked, loadStorage } from '../../store/likedCharactersReducer';

export const Episode = ({ url }) => {
    const episode = useSelector((state) => oneEpisode(state, url));
    const dispatch = useDispatch();
    const likedCharacters = useSelector(liked);

    useEffect(() => {
        dispatch(fetchOneEpisode(url));
    }, [dispatch, url]);

    useEffect(() => {
        const likedStore = localStorage.getItem('liked') || '[]';
        dispatch(loadStorage(JSON.parse(likedStore)));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedCharacters));
        // localStorage.setItem('chakra-ui-color-mode', 'dark');
    }, [likedCharacters]);

    return (
        <Box m={1}>
            {episode ? (
                <Link to={`/episode/${episode.id}`} state={episode}>
                    <Button>{episode.name}</Button>
                </Link>
            ) : (
                <Spinner
                    thickness="6px"
                    speed="1.2s"
                    emptyColor="gray.200"
                    color="green.500"
                    size="xl"
                />
            )}
        </Box>
    );
};
