import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import "../css/MainBtncss.css";
import { colors } from "@mui/material";

function MainBtn({ children }) {
  return (
    <Link to="/login" id="main-btn">
      <Button
        type="submit"
        id="main-btn"
        style={{backgroundColor :"#DA0037"}}

        // onClick={handleLogin}
      >
        {children}{" "}
      </Button>
    </Link>
  );
}

export default MainBtn;
