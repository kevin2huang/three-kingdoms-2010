import React from "react";
import { Link } from "react-router-dom";

const Factions = [
  {
    name: "Shu-Han",
    routerPath: "/heroes/shu-han",
  },
  {
    name: "Wei",
    routerPath: "/heroes/wei",
  },
  {
    name: "Wu",
    routerPath: "/heroes/wu",
  },
  {
    name: "Other",
    routerPath: "/heroes/other",
  }
];

const HeaderMenuItems = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/heroes" data-toggle="dropdown">
        <Link to="/heroes">
          Heroes
        </Link>
        </a>
        <ul className="dropdown-menu">
          {Factions.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="/#">
          <Link to="/map">
            Map
          </Link>
        </a>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="/#">
        <Link to="/transcripts">
          Transcripts
        </Link>
        </a>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="/#">
        <Link to="/transcripts">
          Quotes
        </Link>
        </a>
      </li>
      <li className="nav-item position-static">
        <a className="nav-link" href="/#">
          <Link to="/about">
            About
          </Link>
        </a>
      </li>
    </ul>
  );
};

export default HeaderMenuItems;
