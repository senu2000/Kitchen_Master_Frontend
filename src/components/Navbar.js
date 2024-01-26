// import React from 'react';
// import { Button, Navbar } from 'flowbite-react';
// import { Link } from "react-router-dom";
// import "../css/Navbarcss.css";
// import MainBtn from "./MainBtn";
// import { useState } from 'react';
//
// function Navbardrk() {
//
//     const [isClicked, setIsClicked] = useState(false);
//
//     const buttonStyle = {
//         "color": isClicked ? '#DA0037' : '#EDEDED',
//         "transition": isClicked ? '0.3s ease-in-out' : '',
//     };
//
//     return (
//         <Navbar fluid rounded className="all">
//             <Navbar.Brand href="/">
//                 <img src="/img/logo-no-background.svg" className="nav-img" alt="" />
//             </Navbar.Brand>
//             <div className="flex md:order-2">
//                 {/*<Button id="logout-btn">Logout</Button>*/}
//                 <MainBtn>Logout</MainBtn>
//                 <Navbar.Toggle />
//             </div>
//             <Navbar.Collapse id="nav-links">
//                 <Link to="/" id="nav-link" className="active" onClick={() => setIsClicked(true)}>Home</Link>
//                 <Link to="/all-recipes" id="nav-link" onClick={() => setIsClicked(true)}>All Recipes</Link>
//                 <Link to="/add-recipe" id="nav-link" onClick={() => setIsClicked(true)}>Add Recipe</Link>
//                 <Link to="/your-recipes" id="nav-link" onClick={() => setIsClicked(true)}>Your Recipes</Link>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }
//
// export default Navbardrk;


import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import '../css/Navbarcss.css';
import MainBtn from './MainBtn';


function Navbardrk() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <Navbar fluid rounded className="all">
            <Navbar.Brand href="/">
                <img src="/img/logo-no-background.svg" className="nav-img" alt="" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/*<Button id="logout-btn">Logout</Button>*/}
                <MainBtn to="/Login">Login</MainBtn>
                
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse id="nav-links">
                <Link
                    to="/"
                    id="nav-link"
                    className={activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                >
                    Home
                </Link>
                <Link
                    to="/all-recipes"
                    id="nav-link"
                    className={activeLink === '/all-recipes' ? 'active' : ''}
                    onClick={() => handleLinkClick('/all-recipes')}
                >
                    All Recipes
                </Link>
                <Link
                    to="/add-recipe"
                    id="nav-link"
                    className={activeLink === '/add-recipe' ? 'active' : ''}
                    onClick={() => handleLinkClick('/add-recipe')}
                >
                    Add Recipe
                </Link>
                <Link
                    to="/your-recipes"
                    id="nav-link"
                    className={activeLink === '/your-recipes' ? 'active' : ''}
                    onClick={() => handleLinkClick('/your-recipes')}
                >
                    Your Recipes
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbardrk;
