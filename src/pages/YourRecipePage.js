import React from 'react';
import Navbardrk from "../components/Navbar";

import YourRecipeTable from '../components/YourRecipeTable';


 function YourRecipePage(props) {
    return (
        <div>
            <Navbardrk/>
            <div id="meals">
            <h2>Your Recipes</h2>
            </div>
            <YourRecipeTable/>
        </div>
    );
}

export default YourRecipePage;