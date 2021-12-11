import React from "react";
import { Link } from "react-router-dom";

const HeaderMenuItems = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item position-static">
        <a className="nav-link" href="#">
          <Link to="/map">
            Map
          </Link>
        </a>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="#">
        <Link to="/transcripts">
          Transcripts
        </Link>
        </a>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="#">
          <Link to="/about">
            About
          </Link>
        </a>
      </li>
    </ul>
  );
};

export default HeaderMenuItems;
