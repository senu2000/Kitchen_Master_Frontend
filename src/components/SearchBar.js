import React from 'react';
import { CiSearch } from "react-icons/ci";
import {useState} from "react";

function SearchBar() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        "color": isHovered ? '#DA0037' : '#EDEDED',
        "backgroundColor": isHovered ? '#EDEDED' : '#DA0037',
        "transition": isHovered ? '0.3s ease-in-out' : '',
    };

    return (
        <div id="search-bar">
            <form className=" relative">
                <div className="relative">
                    <input type="search" placeholder="Search your recipe ..." className="w-full p-4
                rounded-full bg-black input"/>
                    <button
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-red-800 rounded-full">
                        <CiSearch id="sicon"/>
                    </button>
                </div>
            </form>
        </div>

    );
}

export default SearchBar;
