import React from 'react';
import "../css/SideNavbar.css";
import {Link} from "react-router-dom";

function SideNavbar(props) {
    return (
        <div>
            <div className="md:flex side-navbar-body">
                <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    {/*<hr/>*/}
                    <Link to="/admin-recipe" id="nav-link">
                        <li id="side-bar-btn">
                            Recipes
                        </li>
                    </Link>
                    <hr/>
                    <Link to="/admin-users" id="nav-link">
                        <li id="side-bar-btn">
                            Users
                        </li>
                    </Link>
                    <hr/>
                    <Link to="/admin-admins" id="nav-link">
                        <li id="side-bar-btn">
                            Admins
                        </li>
                    </Link>
                    <hr/>
                    <Link to="#" id="nav-link">
                        <li id="side-bar-btn">
                            Logout
                        </li>
                    </Link>
                    {/*<hr/>*/}
                </ul>
                {/*<div*/}
                {/*    className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">*/}
                {/*    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>*/}
                {/*    <Rcard/>*/}
                {/*    <Rcard/>*/}
                {/*    <Rcard/>*/}
                {/*</div>*/}
            </div>

        </div>
    );
}

export default SideNavbar;