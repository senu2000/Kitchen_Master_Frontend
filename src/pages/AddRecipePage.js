import React from "react";
import "../css/addrecipepage.css";
import Navbardrk from "../components/Navbar";
import Footerdark from "../components/Footer";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function AddRecipePage() {
  let navigate = useNavigate()
  const userId = localStorage.getItem('id');
  const [post, setPost] = useState({
    title: '',
    description: '',
    category: '',
    ingredients: '',
    serving_size: '',
    prep_time: '',
    instruction: '',
    recipe_image: '',
    fk_id: userId
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
      formData.append("fk" , userId)

      axios.post('http://127.0.0.1:8000/kitchenMaster/recipeform/add/', formData)
          .then(response => {
      console.log(response.data)
            window.alert("Recipe added successfully");
            navigate('/your-recipes')

    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="bg-gray-800 add-recipe-body">
      <Navbardrk />
      <div>
        <form onSubmit={handleSubmit} id="add-recipepage-form">
          <h1 class="mb-4 text-5xl font-extrabold  text-left md:text-center">
            Add Your <span>Recipe</span>
          </h1>

          <label className="block text-sm font-medium text-gray-100">
            Title
          </label>
          <input type="text" name="title"  id="title"></input>

          <label className="block text-sm font-medium text-gray-100">
            Description
          </label>
          <input type="text" name="description"  id="description"></input>

          <div>
            <label
              for="default"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Select category
            </label>
            <select
              id="default"
              name="category"

              class="bg-gray-50 border border-gray-300 text-gray-800 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a meal category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Quick-meals">Quick Meals</option>
              <option value="Veg">Veg</option>
              <option value="Drink">Drink</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <label className="block text-sm font-medium text-gray-100">
            Serving Size
          </label>
          <input type="text" name="serving_size"  id="serving_size"></input>
          <label className="block text-sm font-medium text-gray-100">
            Preparation Time
          </label>
          <input
            type="text"
            name="prep_time"

            id="prep_time"
          ></input>
          <label className="block text-sm font-medium text-gray-100">
            Ingredients
          </label>
          {/*<textarea*/}
          {/*  name="ingredients"*/}
          {/*  id="ingredients"*/}
          {/*  cols="5"*/}
          {/*  rows="5"*/}
          {/*  style={{ backgroundColor: "white" }}*/}
          {/*></textarea>*/}
          <input type="text" name="ingredients"  />
          <label className="block text-sm font-medium text-gray-100">
            Instructions
          </label>
          <textarea
            name="instruction"

            id="instruction"
            cols="5"
            rows="5"
            style={{ backgroundColor: "white" }}
          ></textarea>
          <label className="block text-sm font-medium text-gray-100">
            Image
          </label>
          <input type="file" name="recipe_image"  style={{color:"white"}} />
          <button
            type="submit"
            className="bg-blue-500 text-black px-3 py-2 rounded-md hover:bg-#DA0037"
            style={{ backgroundColor: "#DA0037", color: "#FFFFFF" }}
          >
            Add Recipe
          </button>
        </form>
        <Footerdark />
      </div>
    </div>
    // </div>
  );
}
export default AddRecipePage;
