import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharatersInEpisode = createAsyncThunk(
    'oneEpisode/fetchCharatersInEpisode',
    async (payload) => {
        const response = await axios.get(payload);
        const character = await response.data;
        return character;
    },
);

// const response = await payload.map(async (url) => {
//     const response = await axios.get(url);
//     const result = await response.data;

//     return result;
// });

// const characters = await response;
// return characters;
