import { combineReducers, configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersReducer';
import oneCharacterReducer from './oneCharacterReducer';
import oneEpisodeReducer from './oneEpisodeReducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    character: oneCharacterReducer,
    episode: oneEpisodeReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
