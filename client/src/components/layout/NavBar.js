import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div id="navbar">
    <div className="nav-links">
      <button className="nav-button">
        <Link to="/">Home</Link>
      </button>
      <button className="nav-button">
        <Link to="/about">About</Link>
      </button>{" "}
    </div>
    <div id="title">
      <h1>My Library</h1>
    </div>
  </div>
);

export default NavBar;
