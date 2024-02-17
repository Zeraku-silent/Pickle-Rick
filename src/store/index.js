import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
