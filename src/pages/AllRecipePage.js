import React from 'react';
import Navbardrk from "../components/Navbar";
import AllRcard from "../components/AllRecipeCard";
import Footerdark from "../components/Footer";

function AllRecipePage(props) {
    return (
        <div>
            <Navbardrk/>
            <div id="meals">
            <h2>Breakfast Meals</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Lunch Meals</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Dinner Meals</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Quick Meals</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Vege Meals</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Drinks</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>

        <div id="meals">
            <h2>Deserts</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>
        <Footerdark/>
        
        </div>
        


    );
}

export default AllRecipePage;