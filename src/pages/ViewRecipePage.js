import React, { useEffect, useState } from "react";
import Navbardrk from "../components/Navbar";
import "../css/ViewRecipe.css";
import Footerdark from "../components/Footer";
import axios from "axios";

function ViewRecipePage() {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get("recipeId");
        console.log("recipe id:", recipeId);

        // Fetch the recipe details based on the recipeId
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/kitchenMaster/recipeform/one/${recipeId}/`
                );
                const recipeData = response.data;
                console.log(recipeData);
                setRecipe(recipeData);
            } catch (err) {
                console.error(err);
            }
        };

        if (recipeId) {
            fetchRecipeDetails();
        }
    }, []);

    // Render the recipe details
    return (
        <div className="view-recipe-page">
            <Navbardrk />
            <div align="center" className="mt-5">
                {recipe ? (
                    <div>
                        <h2 className="edit-recipe">{recipe.title}</h2>
                        <hr id="hr1" />
                        <div className="max-w-xl w-full rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={"http://127.0.0.1:8000/" + recipe.recipe_image}
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4"></div>
                            <table>
                                <tbody>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2">
                                        Description
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.description}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2 ">
                                        Category
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.category}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2">
                                        Serving Size
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.serving_size}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2">
                                        Preparation Time
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.prep_time}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2">
                                        Ingredients
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.ingredients}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-red-700 text-xl mb-2">
                                        Instructions
                                    </td>
                                    <td className="text-gray-200 text-base">
                                        {recipe.instruction}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Food
                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Tasty
                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Drink
                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Loading state or other content while waiting for 'recipe' data
                    <p>Loading...</p>
                )}
            </div>
            <Footerdark />
        </div>
    );
}

export default ViewRecipePage;
