import { createSlice } from '@reduxjs/toolkit';
import { fetchOneCharacter } from './asyncActions/asyncOneCharacterRequest';

const oneCharacterReducer = createSlice({
    name: 'oneCharacter',
    initialState: {
        character: {},
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneCharacter.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchOneCharacter.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.character = action.payload;
        });
    },
});

export default oneCharacterReducer.reducer;

export const oneCharacter = (state) => state.character.character;
export const status = (state) => state.character.status;
