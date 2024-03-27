import { createSlice } from '@reduxjs/toolkit';

const likedCharacterReducer = createSlice({
    name: 'likedCharacters',
    initialState: {
        characters: [],
    },
    reducers: {
        addCharacter(state, action) {
            // const like = { id: action.payload.id, name: action.payload.name };
            state.characters = [...state.characters, action.payload];
        },
        removeCharacter(state, action) {
            state.characters = state.characters.filter(
                (character) => character !== action.payload,
            );
        },
        loadStorage(state, action) {
            state.characters = action.payload;
        },
    },
});

export default likedCharacterReducer.reducer;
export const { addCharacter, removeCharacter, loadStorage } =
    likedCharacterReducer.actions;
export const liked = (state) => state.liked.characters;
