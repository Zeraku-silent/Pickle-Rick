import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from './asyncActions/asyncCharactersRequest';

const charactersReducer = createSlice({
    name: 'character',
    initialState: {
        characters: [],
        totalCount: 0,
        pageCurrent: 1,
        status: null,
        error: null,
        loading: true,
    },
    reducers: {
        loadCharacters(state, action) {
            state.characters = [...state.characters, ...action.payload.results];
            state.totalCount = action.payload.info.count;
        },
        clearStore(state) {
            state.characters = [];
        },
        fetchToggle(state, action) {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.status = 'resolved';

            state.characters = [...state.characters, ...action.payload.results];
            state.totalCount = action.payload.info.count;

            state.pageCurrent = state.pageCurrent + 1;
        });
        builder.addCase(fetchCharacters.rejected, (state) => {
            console.log(state.characters);
        });
    },
});

export default charactersReducer.reducer;
export const { loadCharacters, clearStore, fetchToggle, setCurrentPage } =
    charactersReducer.actions;
export const pageCurrent = (state) => state.characters.pageCurrent;
export const characters = (state) => state.characters.characters;
export const countAllCharacters = (state) => state.characters.totalCount;
export const stat = (state) => state.characters.status;
export const fetching = (state) => state.characters.loading;
