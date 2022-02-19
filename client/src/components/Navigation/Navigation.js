import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="wrapper">
      <ul className="menu">
        <li>
          <Link  to="/">About us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        {/* <li>
          <Link to="/therapies">Therapies</Link>
        </li>
        <li>
          <Link to="/staff">Our Staff</Link>
        </li> */}
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li >
          <Link to="/register">Register</Link>
        </li>
        <li className="last-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
