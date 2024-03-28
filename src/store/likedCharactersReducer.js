import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteCharacters } from './asyncActions/asyncFavoriteCharactersRequest';

const likedCharacterReducer = createSlice({
    name: 'likedCharacters',
    initialState: {
        charactersId: [],
        favoriteCharacters: [],
    },
    reducers: {
        addCharacter(state, action) {
            console.log(action.payload);
            state.charactersId = [...state.charactersId, action.payload];
        },
        removeCharacter(state, action) {
            state.charactersId = state.charactersId.filter(
                (character) => character !== action.payload,
            );
        },
        removeFavorites(state) {
            state.favoriteCharacters = [];
        },
        loadStorage(state, action) {
            state.charactersId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteCharacters.fulfilled, (state, action) => {
            state.favoriteCharacters = action.payload;
        });
    },
});

export default likedCharacterReducer.reducer;
export const { addCharacter, removeCharacter, loadStorage, removeFavorites } =
    likedCharacterReducer.actions;
export const liked = (state) => state.liked.charactersId;
export const favoriteCharacters = (state) => state.liked.favoriteCharacters;
