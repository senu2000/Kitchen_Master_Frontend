import React from 'react';
import "../css/AdminPanelUserscss.css";
import SideNavbar from "../components/SideNavbar";
import SideNavbarUserContent from "../components/SideNavbarUserContent";


function AdminPanalUsers(props) {
    return (
        <div id="user-body" className="flex">
            <div className="basis-[10%]">
                <SideNavbar/>
            </div>
            <div className="basis-[90%]">
                <SideNavbarUserContent/>
            </div>
        </div>
    );
}

export default AdminPanalUsers;