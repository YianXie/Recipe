import './App.css';
import React from 'react';
import Root from './components/Root';
import AddRecipe from './components/AddRecipe';
import Random from './components/Random';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/addRecipe",
              element: <AddRecipe />,
          },
          {
              path: "/random",
              element: <Random />,
          },
          {
              path: "/home",
              element: <Home />,
          }
      ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
