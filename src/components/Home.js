import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchRecipes, deleteRecipe } from "../redux/recipe";
// import { deleteRecipe } from "../redux/recipe";

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

const DeleteButton = styled.a`
    color: red;
    text-decoration: underline;
    cursor: pointer;
`

const Home = () => {
    const recipes = useSelector((state) => state.recipe);
    console.log(recipes);
    const dispatch = useDispatch();

    // Change here
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    

    const deleteItem = (id) => {
        dispatch(deleteRecipe(id));
    }

    return (
        <div>
            <H1>Your recipes</H1>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Servings</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                    {
                        recipes.map((recipe, index) => (
                            <tr key={index}>
                                <td>{recipe.title}</td>
                                <td>{recipe.servings}</td>
                                <td>{recipe.ingredients}</td>
                                <td>{recipe.instructions}</td>
                                <td><DeleteButton onClick={() => deleteItem(recipe.id)}>Delete</DeleteButton></td>
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