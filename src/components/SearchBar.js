// import React from 'react';
// import { CiSearch } from "react-icons/ci";
// import {useState} from "react";
// import { useNavigate } from 'react-router-dom';
//
// function SearchBar() {
//     let navigate = useNavigate()
//     const [isHovered, setIsHovered] = useState(false);
//
//     const handleSearchSubmit = async (e) => {
//         e.preventDefault()
//         const formData = new FormData(e.target);
//         console.log(formData)
//     }
//
//     const buttonStyle = {
//         "color": isHovered ? '#DA0037' : '#EDEDED',
//         "backgroundColor": isHovered ? '#EDEDED' : '#DA0037',
//         "transition": isHovered ? '0.3s ease-in-out' : '',
//     };
//
//     return (
//         <div id="search-bar">
//             <form className=" relative" onSubmit={handleSearchSubmit}>
//                 <div className="relative">
//                     <input type="search" placeholder="Search your recipe ..." className="w-full p-4
//                 rounded-full bg-black input"/>
//                     <button
//                         style={buttonStyle}
//                         onMouseEnter={() => setIsHovered(true)}
//                         onMouseLeave={() => setIsHovered(false)}
//                         className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-red-800 rounded-full">
//                         <CiSearch id="sicon"/>
//                     </button>
//                 </div>
//             </form>
//         </div>
//
//     );
// }
//
// export default SearchBar;

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState('');

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchValue = formData.get('search');  // assuming 'search' is the name of your input field

        if (searchValue) {
            // Encode the searchValue for URL
            const encodedSearchValue = encodeURIComponent(searchValue);

            // Redirect to the search-recipe URL with the encoded searchValue as a parameter
            navigate(`/search-recipe/?title=${encodedSearchValue}`);
        }
    };

    const buttonStyle = {
        "color": isHovered ? '#DA0037' : '#EDEDED',
        "backgroundColor": isHovered ? '#EDEDED' : '#DA0037',
        "transition": isHovered ? '0.3s ease-in-out' : '',
    };

    return (
        <div id="search-bar">
            <form className="relative" onSubmit={handleSearchSubmit}>
                <div className="relative">
                    <input
                        type="search"
                        name="search"  // Add a name attribute to your input field
                        placeholder="Search your recipe ..."
                        className="w-full p-4 rounded-full bg-black input"
                    />
                    <button
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-red-800 rounded-full"
                        type="submit"  // Add type="submit" to your button
                    >
                        <CiSearch id="sicon" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;

