//import { Tab } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import ToggleButton from '@mui/material/ToggleButton';
import AuthCxt from '../../contexts/AuthCxt';
//import ColorToggleButton from "./NavTab";
//import TabsWrappedLabel from "./NavTabSec";


const Navigation = () => {

 

  const [isActive, setActive] = useState(false);
  const [isGuestService, setGuestService] = useState(true);

  const toggleClass = (e) => {
  // e.preventDefault();
  
  
   let currentActive = e.currentTarget.className
   let target = e.currentTarget
   let toggleItem = {...target, className: "active"}
   setActive(
     !isActive
    //  toggleItem.className
    )
   console.log(toggleItem);
   console.log(target);
   console.log(currentActive);
  //  if(currentActive == 'noactive'){
  //    currentActive = 'active';
  //    let newState = true;
  //    setActive(newState); 
     
  //  }else{
  //    currentActive = 'noactive';
  //    let nextState = false;
  //    setActive(nextState);
     
  //  }
   
    console.log(isActive);
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
    <li  >
      <Link id="one" className={isActive ? 'active' : ''} 
      onClick={toggleClass}  to="/" >About us</Link>
    </li>
    <li>
      <Link id="two" className={isGuestService ? 'noactive': 'active'} 
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
