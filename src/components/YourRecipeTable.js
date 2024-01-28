import React, { useEffect, useState } from "react";
import { Table } from 'flowbite-react';
import "../css/RecipeTablecss.css";
import axios from "axios";

function YourRecipeTable(props) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Get user ID from localStorage
        const userId = localStorage.getItem('id');

        // Fetch recipes for the specific user
        const fetchUserRecipes = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/kitchenMaster/recipeform/fk/${userId}/`);
                const userRecipes = response.data;
                setRecipes(userRecipes);
                console.log(userRecipes)
            } catch (error) {
                console.error(error);
            }
        };

        // Fetch recipes when the component mounts
        fetchUserRecipes();
    }, []);

    return (
        <div>
            <div className="overflow-x-auto" id="recipe-table">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {recipes.map((recipe) => (
                            <Table.Row key={recipe.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {recipe.title}
                                </Table.Cell>
                                <Table.Cell>{recipe.category}</Table.Cell>
                                <Table.Cell>
                                    <img src={`http://127.0.0.1:8000/${recipe.recipe_image}`} alt="" id="recipe-img" />
                                </Table.Cell>
                                <Table.Cell>
                                    <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a href="#" id="delete-btn" className="">
                                        Delete
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default YourRecipeTable;
