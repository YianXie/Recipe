import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.h1`
    text-decoration: bold;
    text-align: center;
    font-size: 2rem;
    font-family: Arial, sans-serif;
`

const Heading = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    font-family: monospace;
`

const Ol = styled.ol`
    text-align: center;
`

const P = styled.p`
    text-align: center
`

const Random = () => {
    const recipes = useSelector((state) => state.recipe);
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return (
        <div>
            <Title>{randomRecipe.name}</Title>
            <Heading>Ingredients</Heading>
            <Ol>
                {
                    randomRecipe.ingredients.map((ingredients, index) => (
                        <li key={index}>{ingredients}</li>
                    ))
                }
            </Ol>
            <Heading>Instructions</Heading>
            <P>{randomRecipe.instructions}</P>
        </div>
    );
}

export default Random;