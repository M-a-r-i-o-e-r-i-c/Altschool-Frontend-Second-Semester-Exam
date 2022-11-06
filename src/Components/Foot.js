import React from "react";
import { FaCopyright, FaHome, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Foot.css";

const Foot = () => {
  return (
    <div className="bottom">
      <div className="left-bottom">
        <Link to="/">
          <span>
            <FaCopyright />
            AltSchool
          </span>
        </Link>
      </div>
      <div className="right-bottom">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/counterTwo">
          <FaInfoCircle />
        </Link>
      </div>
    </div>
  );
};

export default Foot;
