import React from "react";
import { NavLink } from "react-router-dom"; // Importing Link from react-router-dom
import "../styles/navigation-route.css"; // Importing the CSS file
import { useContext } from "react";
import { AuthContext } from "../context";

const NavigationRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>{" "}
        {/* Correct usage of Link */}
        {isAuthenticated && (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/user-form"
            >
              User Form
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/password-generator"
          >
            Password Generator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/weather"
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/shopping"
          >
            Shopping
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/zustand-counter"
          >
            Zustand Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/redux-counter"
          >
            Redux Counter
          </NavLink>
        </li> */}
        {isAuthenticated && (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/cont/contact"
          >
            Contact Us
          </NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink-right" : "navlink-right"
              }
              to="/auth/log-in"
            >
              Log-in
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink-right" : "navlink-right"
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationRoute;
