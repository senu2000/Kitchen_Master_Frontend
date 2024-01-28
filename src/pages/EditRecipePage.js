import React, { useEffect, useState } from "react";
import "../css/EditRecipe.css";
import Navbardrk from "../components/Navbar";
import Footerdark from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EditRecipePage = () => {
  let navigate = useNavigate()
  const [recipe, setRecipe] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipeId");
  console.log("recipe id:", recipeId);

  useEffect(() => {
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
  }, [recipeId]);

  const handleRecipeUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    formData.append("id", recipeId)
    axios.put("http://127.0.0.1:8000/kitchenMaster/recipeform/update/", formData).then(response => {
      console.log(response.data)
      console.log(formData)
      window.alert("Recipe Updated successfully");
      navigate('/your-recipes')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
      <div className="form">
        <Navbardrk />
        <h2 className="edit-recipe">Edit Recipe</h2>
        <hr id="hr1" />
          {recipe ? (
              <section>
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <form onSubmit={handleRecipeUpdate} className="space-y-8">
                    <div>
                      <label
                          for="recipe_name"
                          class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Recipe Name
                      </label>
                      <input
                          type="text"
                          id="recipe_name"
                          name="title"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          required
                          defaultValue={recipe.title}
                      />
                    </div>
                    <div>
                      <label
                          htmlFor="recipe_description"
                          className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Description
                      </label>
                      <input
                          type="text"
                          id="recipe_description"
                          name="description"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          required
                          defaultValue={recipe.description}
                      />
                    </div>
                    <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={recipe.category}
                    >
                      <option selected>Choose a Category</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Quick-meals">Quick-meals</option>
                      <option value="Veg">Veg</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                    <div>
                      <label
                          for="servingSize"
                          class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Serving Size
                      </label>
                      <input
                          type="text"
                          id="servingSize"
                          name="serving_size"
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          required
                          defaultValue={recipe.serving_size}
                      />
                    </div>
                    <div>
                      <label
                          for="preparationTime"
                          class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        preparation Time
                      </label>
                      <input
                          type="text"
                          id="preparationTime"
                          name="prep_time"
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          required
                          defaultValue={recipe.prep_time}
                      />
                    </div>

                    <div class="sm:col-span-2">
                      <label
                          for="ingredients"
                          class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Ingredients
                      </label>
                      <textarea
                          id="ingredients"
                          name="ingredients"
                          rows="6"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          defaultValue={recipe.ingredients}
                      ></textarea>
                    </div>
                    <div class="sm:col-span-2">
                      <label
                          for="instructions"
                          class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Instructions
                      </label>
                      <textarea
                          id="instructions"
                          name="instruction"
                          rows="6"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder=""
                          defaultValue={recipe.instruction}
                      ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </section>
          ) : (
              // Loading state or other content while waiting for 'recipe' data
              <p>Loading...</p>
          )}
        <Footerdark />
      </div>
  );
};

export default EditRecipePage;
