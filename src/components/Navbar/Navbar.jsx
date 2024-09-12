import React from "react";
import "./Navbar.css";
import logo from "../../assets/child.3 logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
