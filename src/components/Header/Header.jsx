import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png"

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={ logo
        // require("../../img/logo.png")
        } alt="logo"></img>
      <div className={classes.login}>
        {props.isAuth ?
        <div>{props.login} &nbsp; <button onClick={props.logout}>Log out</button> </div>  : <NavLink to={"/login"}>Log in</NavLink>}
      </div>
    </header>
  );
};

export default Header;
