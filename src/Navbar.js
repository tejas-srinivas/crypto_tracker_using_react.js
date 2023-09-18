import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../src/grc.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__container">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="icon" alt="" />
            <h1>
              Crypto  <span className="purple">Tracker</span>
            </h1>
          </Link>
        </div>
        <div className="navigate-elements">
          <ul>
            <li><Link to='https://react.dev/learn'>React JS</Link></li>
            <li><Link to='https://www.chartjs.org/docs/latest/'>Chart JS</Link></li>
            <li><Link to='https://www.coingecko.com/en/api/documentation'>API</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
