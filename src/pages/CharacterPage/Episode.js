import { Box, Button, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oneEpisode } from '../../store/oneEpisodeReducer';
import { fetchOneEpisode } from '../../store/asyncActions/asyncOneEpisodeRequest';

export const Episode = ({ url }) => {
    const episode = useSelector((state) => oneEpisode(state, url));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneEpisode(url));
    }, [dispatch, url]);
    return (
        <Box m={1}>
            {episode ? (
                <Button>{episode.name}</Button>
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
