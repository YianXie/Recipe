import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AddRecipe = () => {
    return (
        <div>
            <h1>Add Recipe</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Ingredients</label>
                <input type="text" name="ingredients" />
                <label>Instructions</label>
                <input type="text" name="instructions" />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;