import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AllRecipePage from "./pages/AllRecipePage";
import AdminPanal from "./pages/AdminPanal";
import AddRecipePage from "./pages/AddRecipePage";
import YourRecipePage from "./pages/YourRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewRecipePage from "./pages/ViewRecipePage";
import AdminPanalUsers from "./pages/AdminPanalUsers";
import AdminPanalAdmins from "./pages/AdminPanalAdmins";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "all-recipes",
        element: <AllRecipePage/>,
    },
    {
        path: "admin-recipe",
        element: <AdminPanal/>,
    },
    {
        path: "admin-users",
        element: <AdminPanalUsers/>,
    },
    {
        path: "admin-admins",
        element: <AdminPanalAdmins/>,
    },
    {
        path: "add-recipe",
        element: <AddRecipePage/>,
    },
    {
        path: "your-recipes",
        element: <YourRecipePage/>,
    },
    {
        path: "edit-recipes",
        element: <EditRecipePage/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "signup",
        element: <Signup/>,
    },
    {
        path: "view-recipe",
        element: <ViewRecipePage/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

