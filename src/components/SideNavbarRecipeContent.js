import React from 'react';
import RecipeTable from "./RecipeTable";
import "../css/RecipeContentcss.css";

function SideNavbarRecipeContent(props) {
    return (
        <div>
            <div
                className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center">
                    <div className="border-l-4 border-red-600 h-6 mr-4"></div>
                    <h3 className="text-lg font-bold text-red-600 dark:text-white mb-2 recipe-text">Recipes</h3>
                </div>
                <hr className="recipe-hr"/>
                <RecipeTable/>
            </div>
        </div>
    );
}

export default SideNavbarRecipeContent;