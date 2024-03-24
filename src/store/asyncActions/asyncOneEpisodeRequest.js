import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOneEpisode = createAsyncThunk(
    'oneEpisode/fetchOneEpisode',
    async (payload) => {
        const response = await axios.get(payload);
        const episode = await response.data;
        return episode;
    },
);
