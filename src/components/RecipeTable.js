import React, {useEffect, useState} from 'react';
import {Table} from 'flowbite-react';
import DeleteBtnModel from "./DeleteBtnModel";
import axios from "axios";
import AdminEditBtnModel from "./AdminEditBtnModel";

function RecipeTable(props) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/kitchenMaster/recipeform/');
            const recipes = response.data;

            const recipesWithUserData = await Promise.all(
                recipes.map(async (recipe) => {
                    const userResponse = await axios.get(`http://127.0.0.1:8000/kitchenMaster/userform/${recipe.fk}/`);
                    const userData = userResponse.data;

                    return { ...recipe, user: userData };
                })
            );

            setData(recipesWithUserData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <div className="overflow-x-auto" id="recipe-table">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Updated By</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {data.map((recipe, index) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                <Table.Cell
                                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{recipe.title}</Table.Cell>
                                <Table.Cell>{recipe.category}</Table.Cell>
                                <Table.Cell>
                                    <img src={recipe.recipe_image} alt="" id="recipe-img"/>
                                </Table.Cell>
                                <Table.Cell>
                                    {`${recipe.user?.firstname || 'Unknown'} ${recipe.user?.lastname || 'Unknown'}`}
                                </Table.Cell>
                                <Table.Cell>
                                    {/*<a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">*/}
                                    {/*    Edit*/}
                                    {/*</a>*/}
                                    <AdminEditBtnModel item={recipe} onEditSuccess={fetchData} endpoint="recipeform"/>
                                </Table.Cell>
                                <Table.Cell>
                                    <DeleteBtnModel item={recipe} onDeleteSuccess={fetchData} endpoint="recipeform" />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default RecipeTable;
