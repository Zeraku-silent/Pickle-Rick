import { createSlice } from '@reduxjs/toolkit';
import { fetchOneEpisode } from './asyncActions/asyncOneEpisodeRequest';

const oneEpisodeReducer = createSlice({
    name: 'oneEpisode',
    initialState: {
        episode: {},
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneEpisode.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchOneEpisode.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.episode[action.payload.url] = action.payload;
        });
    },
});

export default oneEpisodeReducer.reducer;

export const oneEpisode = (state, url) => state.episode.episode[url];
export const status = (state) => state.episode.status;
