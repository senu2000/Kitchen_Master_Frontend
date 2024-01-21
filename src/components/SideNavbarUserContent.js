import React from 'react';
import UserTable from "./UserTable";
import AdminAddUserBtnModel from "./AdminAddUserBtnModel";

function SideNavbarUserContent(props) {

    return (
        <div>
            <div
                className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="border-l-4 border-red-600 h-6 mr-4"></div>
                        <h3 className="text-lg font-bold text-red-600 dark:text-white mb-2 recipe-text">Users</h3>
                    </div>
                    <AdminAddUserBtnModel parameter1="Add User" parameter2="User" />
                </div>
                <hr className="recipe-hr"/>
                <UserTable/>
            </div>
        </div>
    );
}

export default SideNavbarUserContent;