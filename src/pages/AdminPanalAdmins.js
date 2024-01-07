import React from 'react';
import "../css/AdminPanelcss.css";
import SideNavbarAdminContent from "../components/SideNavbarAdminContent";
import SideNavbar from "../components/SideNavbar";

function AdminPanalAdmins(props) {
    return (
        <div id="admin-body" className="flex">
            <SideNavbar/>
            <SideNavbarAdminContent/>
        </div>
    );
}

export default AdminPanalAdmins;