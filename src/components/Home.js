import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const H1 = styled.h1`
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
`;

const Table = styled.table`
    margin: 0 auto;
    border-collapse: collapse;
    width: 80%;
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
`;

const AddRecipe = styled.a`
    display: block;
    text-align: center;
    margin-top: 20px;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
`

const Home = () => {
    const recipes = useSelector((state) => state.recipe);

    return (
        <div>
            <H1>Your recipes</H1>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                    {
                        recipes.map((recipe, index) => (
                            <tr key={index}>
                                <td>{recipe.name}</td>
                                <td>{recipe.ingredients.join(", ")}</td>
                                <td>{recipe.instructions}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddRecipe href="/addRecipe">Add more reipes</AddRecipe>
        </div>
    );
}

export default Home;