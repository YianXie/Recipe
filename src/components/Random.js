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

const P = styled.p`
    text-align: center;
    ${'' /* width: 80%; */}
    margin-left: 10rem;
    margin-right: 10rem;
`

const Random = () => {
    const recipes = useSelector((state) => state.recipe);
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return (
        <div>
            <Title>{randomRecipe.title}</Title>
            <Heading>{randomRecipe.servings}</Heading>
            <br></br>
            <Heading>Ingredients</Heading>
            <P>{randomRecipe.ingredients}</P>
            <Heading>Instructions</Heading>
            <P>{randomRecipe.instructions}</P>
        </div>
    );
}

export default Random;