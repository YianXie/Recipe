import {createSlice} from '@reduxjs/toolkit';

// fetch data from the API
const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cb195995efmsh99338ceba3916b5p1bc3cdjsn78881f8bdb62',
		'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

let result;
try {
	const response = await fetch(url, options);
	result = await response.json();
} catch (error) {
	console.error(error);
}

const initialState = result

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