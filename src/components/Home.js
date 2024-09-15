import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const recipes = useSelector((state) => state.recipe);
    console.log(recipes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {
                    recipes.map((recipe) => {
                        <li>
                            <h2>{recipe.name}</h2>
                            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                            <p>Instructions: {recipe.instructions}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Home;