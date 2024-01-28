import React from "react";
import Navbardrk from "../components/Navbar";
import AllRcard from "../components/AllRecipeCard";
import Footerdark from "../components/Footer";
import "../css/AllRecipecss.css";
import {useEffect, useState} from "react";
import axios from "axios";

function AllRecipePage(props) {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [quickmeals, setQuickmeals] = useState([]);
  const [veg, setVeg] = useState([]);
  const [drink, setDrink] = useState([]);
  const [dessert, setDessert] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/kitchenMaster/recipeform/");

      // Categorize recipes based on category
      const categorizedRecipes = response.data.reduce((accumulator, recipe) => {
        const { category } = recipe;
        switch (category) {
          case "Breakfast":
            accumulator.breakfast.push(recipe);
            break;
          case "Lunch":
            accumulator.lunch.push(recipe);
            break;
          case "Dinner":
            accumulator.dinner.push(recipe);
            break;
          case "Quick-meals":
            accumulator.quickmeals.push(recipe);
            break;
          case "Veg":
            accumulator.veg.push(recipe);
            break;
          case "Drink":
            accumulator.drink.push(recipe);
            break;
          case "Dessert":
            accumulator.dessert.push(recipe);
            break;
          default:
            break;
        }
        return accumulator;
      }, {
        breakfast: [],
        lunch: [],
        dinner: [],
        quickmeals: [],
        veg: [],
        drink: [],
        dessert: [],
      });

      // Update state variables with categorized recipes
      setBreakfast(categorizedRecipes.breakfast);
      setLunch(categorizedRecipes.lunch);
      setDinner(categorizedRecipes.dinner);
      setQuickmeals(categorizedRecipes.quickmeals);
      setVeg(categorizedRecipes.veg);
      setDrink(categorizedRecipes.drink);
      setDessert(categorizedRecipes.dessert);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-recipe-page">
      <Navbardrk />
      <div id="meals">
        <h2>Breakfast Meals</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {breakfast.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Lunch Meals</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {lunch.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Dinner Meals</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {dinner.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Quick Meals</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {quickmeals.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Vege Meals</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {veg.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Drinks</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {drink.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>

      <div id="meals">
        <h2>Deserts</h2>
        <hr id="hr1" />
        <div id="r-card-area" className="flex">
          {dessert.map((recipe) => (
              <div key={recipe.id} id="r-card">
                <AllRcard recipe={recipe} />
              </div>
          ))}
        </div>
      </div>
      <Footerdark />
    </div>
  );
}

export default AllRecipePage;
