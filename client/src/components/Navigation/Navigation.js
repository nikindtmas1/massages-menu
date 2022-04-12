import { styled } from '@mui/material/styles';
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import * as service from '../Services/data';

import AuthCxt from '../../contexts/AuthCxt';
import SearchIcon from '@mui/icons-material/Search';
//import InputBase from '@mui/material/InputBase';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

const Navigation = () => {

  const history = useHistory();

  const [isActive, setActive] = useState(false);
  const [isGuestService, setGuestService] = useState(false);
  const [isTherapies, setIsTherapies] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [isContacts, setIsContacts] = useState(false);

  
  const toggleClass = () => {
    setGuestService(false)
    setActive(!isActive);
    setIsTherapies(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsContacts(false);
    setIsStaff(false);
  };

  

  const toggGuestService = () => {
    setActive(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsContacts(false);
    setIsStaff(false);
    setGuestService(!isGuestService);
    setIsTherapies(false);
  };

  const toggTherapies = () => {
    setActive(false);
    setGuestService(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsContacts(false);
    setIsStaff(false);
    setIsTherapies(!isTherapies);
  };

  const toggLogin = () => {
    setActive(false);
    setGuestService(false);
    setIsTherapies(false);
    setIsRegister(false);
    setIsContacts(false);
    setIsStaff(false);
    setIsLogin(!isLogin);
  };

  const toggRegister = () => {
    setActive(false);
    setGuestService(false);
    setIsTherapies(false);
    setIsLogin(false);
    setIsContacts(false);
    setIsStaff(false);
    setIsRegister(!isRegister);
  };

  const toggStaff = () => {
    setActive(false);
    setGuestService(false);
    setIsTherapies(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsContacts(false);
    setIsStaff(!isStaff);
  };

  const toggContacts = () => {
    setActive(false);
    setGuestService(false);
    setIsTherapies(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsStaff(false);
    setIsContacts(!isContacts);
  };

  const onSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let dataMassages = formData.get('massages');

    if (dataMassages === '') {
        return alert('All fields are required!');
    }

    if(dataMassages.toLowerCase() === 'body'){
      
    service.getAll()
        // .then(result => result.filter(x => x.name.toUpperCase() === destination.toUpperCase()))
        .then(() => history.push(`/bodyMassages`))
        .catch(err => alert(err.message))

       
      };

      if(dataMassages.toLowerCase() === 'face'){

        service.getAllFaces()
        .then(() => history.push('/faceCare'))
        .catch(err => alert(err.message))
      }

};

  let value = useContext(AuthCxt);
  let user = value.user.user;
  let isAuth = value.user.isAuthenticated;

  let guestNav = (
   <>
    <ul className="menu">
      <li style={{'paddingTop':'30px', 'paddingRight': '20px'}}>
           <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
      </li>
            
    <li style={{'paddingTop':'30px', 'paddingLeft': '20px', 'paddingRight': '8px'}}>
      <form onSubmit={onSubmit} method='get' action=''>
        <div>
        <input name="massages" type="text" className="" id="input" placeholder="Find by type"></input>
        </div>
        <div style={{'padding': '10px', 'marginLeft': '40px'}}>
        <input type='submit'></input>
        </div>
      </form>

      </li>
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
    <li >
      <Link className={isRegister ? 'active': ''} 
      onClick={toggRegister} to="/register">Register</Link>
    </li>
    <li >
      <Link className={isLogin ? 'active': ''} 
      onClick={toggLogin} to="/login">Login</Link>
    </li>
          </ul>
  </>
  );

  let userNav = (
    <>
    <ul className="menu">

    <li style={{'paddingTop':'30px', 'paddingRight': '20px'}}>
           <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
      </li>
            
    <li style={{'paddingTop':'30px', 'paddingLeft': '20px', 'paddingRight': '8px'}}>
      <form onSubmit={onSubmit} method='get' action=''>
        <div>
        <input name="massages" type="text" className="" id="input" placeholder="Find by type"></input>
        </div>
        <div style={{'padding': '10px', 'marginLeft': '40px'}}>
        <input type='submit'></input>
        </div>
      </form>

      </li>
    {/* <li style={{'padding':'30px'}}>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find by type"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </li> */}
    <li  >
      <Link id="one"  className={isActive ? 'active' : ''}
      onClick={toggleClass}  to="/" >About us</Link>
    </li>
    <li>
      <Link id="two" className={isGuestService ? 'active': ''} 
      onClick={toggGuestService}  to="/services">Services</Link>
    </li>
    <li>
      <Link className={isTherapies ? 'active': ''} 
      onClick={toggTherapies}  to="/bodyTreatments">Therapies</Link>
    </li>
    <li>
      <Link className={isStaff ? 'active': ''} 
      onClick={toggStaff}  to="/staff">Our Staff</Link>
    </li>
    <li>
      <Link className={isContacts ? 'active': ''} 
      onClick={toggContacts}  to="/contacts">Contacts</Link>
    </li>
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
