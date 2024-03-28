import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavoriteCharacters = createAsyncThunk(
    'likedCharacters/fetchFavoriteCharacters',
    async (payload) => {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/${payload}`,
        );
        const favorites = await response.data;

        return favorites;
    },
);
