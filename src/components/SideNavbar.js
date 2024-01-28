import React from 'react';
import "../css/SideNavbar.css";
import {Link, useNavigate} from "react-router-dom";

function SideNavbar(props) {
    let navigate = useNavigate();

    const logout = () => {
        document.cookie = 'mytoken=null; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        localStorage.clear();
        navigate('/');
    }
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
                    <Link to="#" onClick={logout} id="nav-link">
                        <li id="side-bar-btn">
                            Logout
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    );
}

export default SideNavbar;