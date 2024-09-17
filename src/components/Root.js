import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background: lightblue;
`;

const LINK = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  color: #4d5057;
  &.active {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const Root = () => {
  return (
    <div>
        <Nav>
            <LINK to={`/home`}>Home</LINK>
            <LINK to={`/addRecipe`}>Add Recipe</LINK>
            <LINK to={`/random`}>Random</LINK>
        </Nav>
        <Outlet />
    </div>
  )
}

export default Root