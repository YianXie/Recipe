import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        name: "Pasta",
        ingredients: ["pasta", "tomato sauce", "cheese"],
        instructions: "Cook pasta, add tomato sauce, add cheese",
    },
    {
        name: "Salad",
        ingredients: ["lettuce", "tomato", "cucumber"],
        instructions: "Cut lettuce, tomato, cucumber, mix together",
    },
    {
        name: "Soup",
        ingredients: ["water", "vegetables", "salt"],
        instructions: "Boil water, add vegetables, add salt",
    }
]

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe(state, action) {
            state.push(action.payload);
        },
        // removeRecipe(state, action) {
        //     return state.filter((recipe) => recipe.name !== action.payload);
        // }
    },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;