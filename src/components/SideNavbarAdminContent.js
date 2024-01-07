import React from 'react';
import Rcard from "./Card";

function SideNavbarAdminContent(props) {
    return (
        <div>
            <div
                className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Admins</h3>
                <Rcard/>
                <Rcard/>
                <Rcard/>
            </div>
        </div>
    );
}

export default SideNavbarAdminContent;