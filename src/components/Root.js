import React from 'react';
import { Link } from 'react-router-dom';
import './Root.css';

const Root = () => {
  return (
    <div>
        <nav>
            <Link to={`/home`}>Home</Link>
            <Link to={`/addRecipe`}>Add Recipe</Link>
            <Link to={`/random`}>Random</Link>
        </nav>
    </div>
  )
}

export default Root