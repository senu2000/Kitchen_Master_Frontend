import React, { useEffect, useState } from 'react';
import AllRcard from "../components/AllRecipeCard";
import Footerdark from "../components/Footer";
import Navbardrk from "../components/Navbar";
import { useParams } from 'react-router-dom';

function SearchResult(props) {
    // const { title } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    console.log("title:", title);

    useEffect(() => {
        // Fetch data from your API endpoint using the title
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/kitchenMaster/recipeform/search/${title}/`);
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [title]); // Trigger the effect whenever the title parameter changes

    return (
        <div>
            <Navbardrk />
            <hr id="hr1" />
            <div id="top-recipes">
                <h2>Search Results for "{title}"</h2>
                <hr id="hr1" />
                <div id="r-card-area" className="flex">
                    {searchResults.map((recipe, index) => (
                        <div key={index} id="r-card">
                            <AllRcard recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
            <Footerdark />
        </div>
    );
}

export default SearchResult;
