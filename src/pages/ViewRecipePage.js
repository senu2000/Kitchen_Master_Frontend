import React from "react";
import Navbardrk from "../components/Navbar";
import "../css/ViewRecipe.css";

function ViewRecipePage(props) {
  return (
    <div className="view-recipe-page ">
      <Navbardrk />
      <div align="center" className="mt-5">
        <h2 className="edit-recipe">View Recipe</h2>
        <hr id="hr1" />
        <div class="max-w-xl w-full rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="../img/pizza.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4"></div>
          <table>
            <tablebody>
              <tr>
                <td class="font-bold text-red-700 text-xl mb-2">Recipe Name</td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>
              <tr>
                <td class="font-bold text-red-700 text-xl mb-2 ">Category</td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>
              <tr>
                <td class="font-bold text-red-700 text-xl mb-2">
                  Serving Size
                </td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>

              <tr>
                <td class="font-bold text-red-700 text-xl mb-2">
                  preparation Time
                </td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>
              <tr>
                <td class="font-bold text-red-700 text-xl mb-2">Ingredients</td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>
              <tr>
                <td class="font-bold text-red-700 text-xl mb-2">
                  Instructionss
                </td>
                <td class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
              </tr>
            </tablebody>
          </table>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Food
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tasty
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Drink
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipePage;
