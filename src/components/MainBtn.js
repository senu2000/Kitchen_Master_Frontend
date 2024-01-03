import React from 'react';
import {Button} from "flowbite-react";
import "../css/MainBtncss.css";

function MainBtn({children}) {
    return (
        <Button id="main-btn">{children}</Button>
    );
}

export default MainBtn;