import { createSlice } from '@reduxjs/toolkit';
import { fetchOneEpisode } from './asyncActions/asyncOneEpisodeRequest';
import { fetchCharatersInEpisode } from './asyncActions/asyncCharactersInEpisodeRequest';

const oneEpisodeReducer = createSlice({
    name: 'oneEpisode',
    initialState: {
        episode: {},
        characters: [],
        status: null,
    },
    reducers: {
        clearStore(state) {
            state.characters = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOneEpisode.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchOneEpisode.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.episode[action.payload.url] = action.payload;
        });
        builder.addCase(fetchCharatersInEpisode.fulfilled, (state, action) => {
            state.characters = [...state.characters, action.payload];
        });
    },
});

export default oneEpisodeReducer.reducer;

export const oneEpisode = (state, url) => state.episode.episode[url];
export const status = (state) => state.episode.status;
export const charactersInEpisode = (state) => state.episode.characters;
export const { clearStore } = oneEpisodeReducer.actions;
