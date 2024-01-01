import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AllRecipePage from "./pages/AllRecipePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "all-recipes",
        element: <AllRecipePage/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

