import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import ToggleButton from '@mui/material/ToggleButton';
import AuthCxt from '../../contexts/AuthCxt';
//import ColorToggleButton from "./NavTab";



const Navigation = () => {

 

  const [isActive, setActive] = useState(false);
  const [isGuestService, setGuestService] = useState(false);

  const toggleClass = () => {
    
    setActive(!isActive);
  };

  const toggGuestService = () => {
    setGuestService(!isGuestService);
  }

  let value = useContext(AuthCxt);
  let user = value.user.user;
  let isAuth = value.user.isAuthenticated;

  let guestNav = (
   
    <ul className="menu">
    <li >
      <Link className=""  to="/">About us</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/bodyTreatments">Therapies</Link>
    </li>
    {/* <li>
      <Link to="/staff">Our Staff</Link>
    </li>
    <li>
      <Link to="/contacts">Contacts</Link>
    </li> */}
    <li >
      <Link to="/register">Register</Link>
    </li>
    <li >
      <Link to="/login">Login</Link>
    </li>
    {/* <li >
      <Link to="/logout">Logout</Link>
    </li> */}
  </ul>
  );

  let userNav = (
    <>
    <ul className="menu">
    <li >
      <Link className={isActive ? 'active': null} 
      onClick={toggleClass}  to="/" >About us</Link>
    </li>
    <li>
      <Link className={isGuestService ? 'active': null} 
      onClick={toggGuestService}  to="/services">Services</Link>
    </li>
    <li>
      <Link  to="/bodyTreatments">Therapies</Link>
    </li>
    <li>
      <Link  to="/staff">Our Staff</Link>
    </li>
    <li>
      <Link  to="/contacts">Contacts</Link>
    </li>
    {/* <li >
      <Link to="/register">Register</Link>
      </li>
      <li >
      <Link to="/login">Login</Link>
    </li> */}
    <li >
      <Link to="/logout">Logout</Link>
    </li>
  </ul>
    <span style={{"margin": "20px", "padding": "20px", "display": "flex"}}>Welcome: {user}</span>
    </>
  );

  return (
    
    <nav className="wrapper">
      {isAuth
      ? userNav
      : guestNav
      }
    </nav>
    
  );
};

export default Navigation;
