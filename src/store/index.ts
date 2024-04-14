import { combineReducers, configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersReducer';
import oneCharacterReducer from './oneCharacterReducer';
import oneEpisodeReducer from './oneEpisodeReducer';
import likedCharactersReducer from './likedCharactersReducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    character: oneCharacterReducer,
    episode: oneEpisodeReducer,
    liked: likedCharactersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch