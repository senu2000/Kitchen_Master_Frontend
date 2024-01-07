import React from 'react';
import SideNavbar from "../components/SideNavbar";
import "../css/AdminPanelcss.css";
import SideNavbarRecipeContent from "../components/SideNavbarRecipeContent";

function AdminPanal(props) {
    return (
        <div id="admin-body" className="flex">
            <div className="basis-[10%]">
                <SideNavbar/>
            </div>
            <div className="basis-[90%]">
                <SideNavbarRecipeContent/>
            </div>

        </div>
    );
}

export default AdminPanal;