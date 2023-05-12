import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            RealEstate
          </NavLink>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/real-estates" className="navbar-item">
              Real Estates
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              Contact
            </NavLink>
            <NavLink to="/login" className="navbar-item">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
