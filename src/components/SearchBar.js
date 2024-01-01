import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <div id="search-bar">
            <form className=" relative">
                <div className="relative">
                    <input type="search" placeholder="Search your recipe ..." className="w-full p-4
                rounded-full bg-black input"/>
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4
                bg-red-800 rounded-full">
                        <CiSearch id="sicon"/>
                    </button>
                </div>
            </form>
        </div>

    );
}

export default SearchBar;
