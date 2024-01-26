import React, { useState } from "react";
import "../css/EditRecipe.css";
import Navbardrk from "../components/Navbar";
import Footerdark from "../components/Footer";

const EditRecipePage = () => {
  // State variables to store form data
  const [recipe_name, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Sample categories for the selection list
  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Quick",
    "Vege",
    "Drinks",
    "Deserts",
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    console.log({
      recipe_name,
      category,
      servingSize,
      preparationTime,
      ingredients,
      instructions,
    });
  };

  return (
    <div className="form">
        <Navbardrk/>
      <h2 className="edit-recipe">Edit Recipe</h2>
      <hr id="hr1" />
      <form onSubmit={handleSubmit}>
        <section>
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p> */}
            <form action="#" className="space-y-8">
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
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Drumsticks"
                  required
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Category</option>
                <option value="US">Breakfast</option>
                <option value="CA">Lunch</option>
                <option value="FR">Dinner</option>
                <option value="DE">Quick</option>
                <option value="DE">Vege</option>
                <option value="DE">Drinks</option>
                <option value="DE">Deserts</option>
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
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
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
                  type="preparationTime"
                  id="category"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="10 min"
                  required
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
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
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
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-dark rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </form>
      <Footerdark/>
    </div>
  );
};

export default EditRecipePage;
