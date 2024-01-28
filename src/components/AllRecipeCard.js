// AllRcard.js
"use client";

import { Card } from "flowbite-react";
import MainBtn from "./MainBtn";

export default function AllRcard({ recipe }) {
  return (
      <Card
          className="max-w-sm mt-3 ml-3"
          imgAlt=""
          imgSrc={`http://127.0.0.1:8000/${recipe.recipe_image}`}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe.title}
        </h5>

        <div className="flex items-center justify-center">
          <a href={`view-recipe?recipeId=${recipe.id}`}>
            <MainBtn>View Recipe</MainBtn>
          </a>
        </div>
      </Card>
  );
}
