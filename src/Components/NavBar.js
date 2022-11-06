import React, { useContext } from "react";
import {
  FaCuttlefish,
  FaEdgeLegacy,
  FaHome,
  FaInfo,
  FaInfoCircle,
  FaMoon,
  FaRegRegistered,
  FaSun,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { ThemeContext } from "../App";

const NavBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  function getActive({ isActive }) {
    return { border: isActive ? "2px solid coral" : "none" };
  }
  return (
    <nav className="top">
      <div className="left">
        <Link to="/">
          <span className="logo">
            <FaEdgeLegacy /> <FaRegRegistered /> <FaInfo /> <FaCuttlefish />
          </span>
        </Link>
      </div>
      <div className="right">
        <NavLink style={getActive} end to="/" title="Home">
          {" "}
          <FaHome />
        </NavLink>
        <NavLink
          style={getActive}
          to="counterTwo"
          title="counter with useReducer"
        >
          {" "}
          <FaInfoCircle />{" "}
        </NavLink>
        <button className="theme" title="Theme" onClick={toggleTheme}>
          {" "}
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
