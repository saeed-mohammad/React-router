import React from "react";
import "./style/Nav.scss";
import { FaRegTimesCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [Menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!Menu);
  };
  return (
    <header>
      <h1 className="logo">
        <Link to="/">REACT</Link>
      </h1>
      <nav className={Menu ? "active" : ""}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/training">Training</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="icons" onClick={handleClick}>
        {Menu ? (
          <FaRegTimesCircle className="icon" />
        ) : (
          <HiOutlineMenuAlt1 className="icon" />
        )}
      </div>
    </header>
  );
};

export default Nav;
