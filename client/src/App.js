import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthCxt from './contexts/AuthCxt';

import * as userServices from './components/Services/authService';

import PageOne from "./components/PageOne/PageOne";
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import PageFour from './components/PageFour/PageFour';
import PageFive from './components/PageFive/PageFive';
import Register from './components/Register/Register';
import LoginPage from './components/Login/LoginPage';
import BodyMassages from './components/BodyMassages/BodyMassages';
import FaceCare from './components/FaceCare/FaceCare';
import Logout from './components/Logout/Logout';
import Waxing from './components/Waxing/Waxing';

function App() {

  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '', userId: '' });
  
  useEffect(() => {
    let userData = userServices.getUser();
    let user = userData.username;
    let id = userData.userId;


    setUserInfo({
      isAuthenticated: Boolean(user),
      user: user,
      userId: id,
    })
  }, []);


  const onLogin = (userData) => {

    let user = userData.username;
    let id = userData._id;
    setUserInfo({
      user: user,
      isAuthenticated: true,
      userId: id,
    })
  };

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
      userId: null
    })

  };

  return (
    <AuthCxt.Provider value={{ user: userInfo, onLogin, onLogout }}>
    <Switch>
      <Route path='/' exact component={PageOne} />
      <Route path='/services' component={PageTwo} />
      <Route path='/therapies' component={PageThree} />
      <Route path='/staff' component={PageFour} />
      <Route path='/contacts' component={PageFive} />
      <Route path='/bodyMassages' component={BodyMassages} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LoginPage} />
      <Route path='/faceCare' component={FaceCare} />
      <Route path='/logout' component={Logout} />
      <Route path='/waxing' component={Waxing} />
    </Switch>
    </AuthCxt.Provider>
  );
}

export default App;
