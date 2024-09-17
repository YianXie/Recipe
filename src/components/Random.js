import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Random = () => {
    const recipes = useSelector((state) => state.recipe);
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    console.log("Random recipe:", randomRecipe);
    return (
        <div>
            
        </div>
    );
}

export default Random;