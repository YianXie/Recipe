import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/recipe";
import styled from "styled-components";

const H1 = styled.h1`
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
`

const Form = styled.form`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    width: 50%;
    border-radius: 5px;
    padding: 20px;
`

const TextArea = styled.textarea`
    width: 60%;
    min-height: 30px;
    margin: 10px 0;
    resize: vertical;
    overflow: auto;
`

const ShortAnswer = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
`

const Label = styled.label`
    font-family: Arial, sans-serif;
    margin: 10px 0;
`

const Button = styled.button`
    padding: 10px;
    background-color: lightblue;
    border: #ccc;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background-color: #4d5057;
        color: white;
    }
`

const AddRecipe = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        ingredients: "",
        instructions: "",
    });

    const splitIngredients = (ingrediants) => {
        ingrediants = ingrediants.trim();
        const ingredientsList = ingrediants.split(",");
        return ingredientsList;
    }
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        state.ingredients = splitIngredients(state.ingredients);
        dispatch(addRecipe(state));
    }

    return (
        <div>
            <H1>Add Recipe</H1>
            <Form onSubmit={handleOnSubmit}>
                <Label>Name</Label>
                <ShortAnswer name="name" placeholder="Enter name here" onChange={handleOnChange} required /> 
                <Label>Ingredients</Label>
                <TextArea name="ingredients" placeholder="Ingredients 1, ingredients 2, ingredients 3..." onChange={handleOnChange} required />
                <Label>Instructions</Label>
                <TextArea name="instructions" placeholder="Enter instructions here" onChange={handleOnChange} />
                <Button type="submit">Add Recipe</Button>
            </Form>
        </div>
    );
}

export default AddRecipe;