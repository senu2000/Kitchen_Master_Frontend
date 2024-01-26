import React from 'react';
import "../css/AdminPanelcss.css";
import SideNavbarAdminContent from "../components/SideNavbarAdminContent";
import SideNavbar from "../components/SideNavbar";

function AdminPanalAdmins(props) {
    return (

        <div id="admin-body" className="flex ">
            <div className="basis-[10%]">
                <SideNavbar/>
            </div>
            <div className="basis-[90%]">
                <SideNavbarAdminContent/>
            </div>
        </div>
    );
}

export default AdminPanalAdmins;