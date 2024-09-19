import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
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
    padding: 5px;
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
    const recipes = useSelector((state) => state.recipe)

    const [state, setState] = useState({
        title: "",
        servings: 0,
        ingredients: "",
        instructions: "",
    });
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    } 

    const checkDuplicateItem = (item) => {
        let itemValid = true;
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].title == item) {
                itemValid = false;
                break;
            }
        }

        if (!itemValid) {
            return false;
        }
        return true;
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (checkDuplicateItem(state.title)) {
            dispatch(addRecipe(state));
            alert("Recipe added successfully");
        } else {
            alert("Item already exists!\r\nTry again!");
        }
    }

    return (
        <div>
            <H1>Add Recipe</H1>
            <Form onSubmit={handleOnSubmit}>
                <Label>Name</Label>
                <ShortAnswer name="title" placeholder="Enter name here" onChange={handleOnChange} required /> 
                <Label>Servings</Label>
                <ShortAnswer name="servings" type="number" placeholder="Servings number" onChange={handleOnChange} required />
                <Label>Ingredients</Label>
                <TextArea name="ingredients" placeholder="Enter ingredients here" onChange={handleOnChange} required />
                <Label>Instructions</Label>
                <TextArea name="instructions" placeholder="Enter instructions here" onChange={handleOnChange} />
                <Button type="submit">Add Recipe</Button>
            </Form>
        </div>
    );
}

export default AddRecipe;