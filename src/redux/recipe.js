// import {createSlice} from '@reduxjs/toolkit';

// fetch data from the API
// const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cb195995efmsh99338ceba3916b5p1bc3cdjsn78881f8bdb62',
// 		'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// let result;
// try {
// 	const response = await fetch(url, options);
// 	result = await response.json();
// } catch (error) {
// 	console.error(error);
// }

// const initialState = result

// const recipeSlice = createSlice({
//     name: 'recipe',
//     initialState,
//     reducers: {
//         addRecipe(state, action) {
//             state.push(action.payload);
//         },
//         // removeRecipe(state, action) {
//         //     return state.filter((recipe) => recipe.name !== action.payload);
//         // }
//     },
// });

// export const { addRecipe } = recipeSlice.actions;
// export default recipeSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001/api/recipes';

// Fetch recipes from backend
export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', async () => {
    const response = await fetch(apiUrl);
    return response.json();
});

// Add new recipe to backend
export const addRecipeToDB = createAsyncThunk('recipe/addRecipeToBackend', async (newRecipe) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
    });
    return response.json();
});

export const deleteRecipe = createAsyncThunk('recipe/deleteRecipe', async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    console.log(response.json());
    return response.json();
});

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(addRecipeToDB.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(deleteRecipe.fulfilled, (state, action) => {
            console.log("I am deleting");
            console.log(state);
            const index = state.findIndex((recipe) => recipe.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            // return state.filter((recipe) => 
            //     // console.log(action.payload.id);
            //     // console.log(recipe.id);
            //     recipe.id !== action.payload.id
            // );
        });
    },
});


export default recipeSlice.reducer;


