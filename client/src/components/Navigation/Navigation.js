//import { Tab } from "@mui/material";
//import { Search } from "@material-ui/icons";
import { styled, alpha } from '@mui/material/styles';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import ToggleButton from '@mui/material/ToggleButton';
import AuthCxt from '../../contexts/AuthCxt';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


//import styles from './Navigation.module.css';
//import ColorToggleButton from "./NavTab";
//import TabsWrappedLabel from "./NavTabSec";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navigation = () => {

 

  const [isActive, setActive] = useState(false);
  const [isGuestService, setGuestService] = useState(false);
  const [isTherapies, setIsTherapies] = useState(false);

  
  const toggleClass = () => {
  // e.preventDefault();
  
  setGuestService(false)
  //  let currentActive = e.currentTarget.className
  //  let target = e.currentTarget
  //  let toggleItem = {...target, className: "active"}
   setActive(
     !isActive
    //  toggleItem.className
    );

    setIsTherapies(false);
   //console.log(toggleItem);
   //console.log(target);
   //console.log(currentActive);
  //  if(currentActive == 'noactive'){
  //    currentActive = 'active';
  //    let newState = true;
  //    setActive(newState); 
     
  //  }else{
  //    currentActive = 'noactive';
  //    let nextState = false;
  //    setActive(nextState);
     
  //  }
   
    //console.log(isActive);
  };

  

  const toggGuestService = () => {
    setActive(false);
    setGuestService(!isGuestService);
    setIsTherapies(false);
  };

  const toggTherapies = () => {
    setActive(false);
    setGuestService(false);
    setIsTherapies(!isTherapies);
  }

  let value = useContext(AuthCxt);
  let user = value.user.user;
  let isAuth = value.user.isAuthenticated;

  let guestNav = (
   <>
    <ul className="menu">
    <li >
      <Link className={isActive ? 'active' : ''}
      onClick={toggleClass}  to="/">About us</Link>
    </li>
    <li>
      <Link className={isGuestService ? 'active': ''} 
      onClick={toggGuestService} to="/services">Services</Link>
    </li>
    <li>
      <Link className={isTherapies ? 'active': ''} 
      onClick={toggTherapies} to="/bodyTreatments">Therapies</Link>
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
      <li style={{'padding':'30px'}}>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </li>
       
          </ul>
  </>
  );

  let userNav = (
    <>
    <ul className="menu">
    <li  >
      <Link id="one"  className={isActive ? 'active' : ''}
      onClick={toggleClass}  to="/" >About us</Link>
    </li>
    <li>
      <Link id="two" className={isGuestService ? 'active': ''} 
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
    {/* <li style={{'padding':'30px'}}>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </li> */}
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
