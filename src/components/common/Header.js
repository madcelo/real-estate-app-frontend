import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            RealEstate
          </NavLink>
        </div>
        {token ? (
          <div className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">{currentDate}</span>
              <span className="navbar-item">{currentTime}</span>
              <button onClick={handleLogout} className="navbar-item">
                Logout
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Header;