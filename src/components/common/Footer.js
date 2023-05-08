import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="sitemap">
            <h4>Site Map</h4>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/real-estates">Real Estates</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Real Estate. All rights
              reserved.
            </p>
            <p>
              Contact: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              Follow us on: <a href="https://www.facebook.com">Facebook</a>,{" "}
              <a href="https://www.twitter.com">Twitter</a>,{" "}
              <a href="https://www.instagram.com">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;