import React from "react";
//import DeleteIcon from "@mui/icons-material/Delete";
import "../index.css";
import Logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Search from "./Search";
import Login from "./Login";

function Topbar() {
  return (
    <div className="nav">
      <div className="leftlinks">
        <MenuIcon fontSize="large" className="menuIcon"></MenuIcon>
        <div className="brand">
          <img className="logo" src={Logo} alt="logo"></img>
        </div>
      </div>
      <Search></Search>
      <div className="rightLinks">
        <ul className="menuLinks">
          <li>
            <Logout fontSize="large"></Logout>
          </li>
          <li>
            <Login />
          </li>
          <li>
            <AccountCircle fontSize="large"></AccountCircle>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
