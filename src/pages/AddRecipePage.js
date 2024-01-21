import React from "react";
import "../css/addrecipepage.css";
// import cknImage from "../img/ckn.png";
// import {useState} from 'react'
// import Navbardrk from "./components/Navbar";
// import Footerdark from "./components/Footer";

function AddRecipePage() {
  // const [data, setData] =
  //   useState[
  //     {
  //       title: "",
  //       servingsize: "",
  //       preparationtime: "",
  //       ingredients: "",
  //       instructions: "",
  //       instructions:""
  //     }
  //   ];
  //   const handleChange = ()=>{

  //   }
  //   const handleSubmit = () => {};
  return (
    <div style={{ backgroundImage: "url(../img/ckn.png)" }}>
      <div>
        {/* <Navbardrk /> */}
        <form method="post">
          <h1 class="mb-4 text-5xl font-extrabold  text-left md:text-center">
            Add Your <span>Recipe</span>
          </h1>

          <label className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input type="text" name="title" id="title"></input>

          <div>
            <label
              for="default"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select category
            </label>
            <select
              id="default"
              class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a meal category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="quickmeals">Quick Meals</option>
              <option value="vegetarionmeals">Vegetarion Meals</option>
              <option value="drinks">Drinks</option>
              <option value="desserts">Desserts</option>
            </select>
          </div>

          <label className="block text-sm font-medium text-gray-600">
            Serving Size
          </label>
          <input type="text" name="servingsize" id="servingsize"></input>
          <label className="block text-sm font-medium text-gray-600">
            Preparation Time
          </label>
          <input
            type="text"
            name="preparationtime"
            id="preparationtime"
          ></input>
          <label className="block text-sm font-medium text-gray-600">
            Ingredients
          </label>
          <input type="text" name="ingredients" id="ingredients"></input>
          <label className="block text-sm font-medium text-gray-600">
            Instructions
          </label>
          <textarea
            name="instructions"
            id="instructions"
            cols="5"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-#DA0037"
          >
            Add Recipe
          </button>
        </form>
        {/* <Footerdark /> */}
      </div>
    </div>
  );
}
export default AddRecipePage;
