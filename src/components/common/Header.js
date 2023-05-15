import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {isMobileView && (
          <button
            className={`navbar-burger ${isOpen ? "is-active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        {isOpen && isMobileView && (
          <div className={`navbar-menu ${isOpen ? "is-active right" : ""}`}>
            <div className="navbar-end">
              <NavLink
                to="/"
                className="navbar-item"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/real-estates"
                className="navbar-item"
                onClick={() => setIsOpen(false)}
              >
                Real Estates
              </NavLink>
              <NavLink
                to="/contact"
                className="navbar-item"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/login"
                className="navbar-item"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
        {!isMobileView && (
          <div className="navbar-menu">
            <div className="navbar-end">
              {token ? (
                <>
                  <span className="navbar-item">{currentDate}</span>
                  <span className="navbar-item">{currentTime}</span>
                  <button onClick={handleLogout} className="navbar-item">
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
