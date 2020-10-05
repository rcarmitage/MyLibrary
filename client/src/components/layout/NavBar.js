import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div id="navbar">
    <div id="title">
      <h1>My Library</h1>
    </div>
    <div className="nav-links">
      <ul>
        <li>
          <Link className="a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="a" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
