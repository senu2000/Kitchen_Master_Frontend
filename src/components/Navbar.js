import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import "../css/Navbarcss.css";
import MainBtn from "./MainBtn";


function Navbardrk() {
    return (
        <Navbar fluid rounded className="all">
            <Navbar.Brand href="/">
                <img src="/img/logo-no-background.svg" className="nav-img" alt="" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/*<Button id="logout-btn">Logout</Button>*/}
                <MainBtn>Logout</MainBtn>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse id="nav-links">
                <Link to="/" id="nav-link" className="active">Home</Link>
                <Link to="/all-recipes" id="nav-link">All Recipes</Link>
                <Link to="/add-recipe" id="nav-link">Add Recipe</Link>
                <Link to="/your-recipes" id="nav-link">Your Recipes</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbardrk;