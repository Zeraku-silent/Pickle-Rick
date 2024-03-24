import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOneCharacter = createAsyncThunk(
    'oneCharacter/fetchOneCharacter',
    async (payload) => {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/${payload}`,
        );
        const character = await response.data;
        return character;
    },
);
