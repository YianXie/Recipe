import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe";

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});