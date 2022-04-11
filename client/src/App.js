import {useState, useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import AuthCxt from './contexts/AuthCxt';

import * as userServices from './components/Services/authService';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageOne from "./components/PageOne/PageOne";
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import PageFour from './components/PageFour/PageFour';
import PageFive from './components/PageFive/PageFive';
import Register from './components/Register/Register';
import LoginPage from './components/Login/LoginPage';
import BodyMassages from './components/BodyMassages/BodyMassages';
import BodyTherapies from './components/BodyTherapies/BodyTherapies';
import FaceCare from './components/FaceCare/FaceCare';
import Logout from './components/Logout/Logout';
import Waxing from './components/Waxing/Waxing';

import AsidePageOne from './components/Asides/AsidePageOne';
import AsidePageTwo from './components/Asides/AsidePageTwo';
import AsidePageFive from './components/Asides/AsidePageFive';


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

  const [pageInfo, setPageInfo] = useState('');
  
  const location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    if(pathName === '/'){
      setPageInfo('page1')
    }else if(pathName === '/services'){
      setPageInfo('page2')
    }else if(pathName === '/therapies'){
      setPageInfo('page3')
    }else if(pathName === '/staff'){
      setPageInfo('page4')
    }else if(pathName === '/contacts'){
      setPageInfo('page5')
    }else if(pathName === '/login'){
      setPageInfo('page3')
    }else if(pathName === '/bodyMassages'){
      setPageInfo('page3')
    }else if(pathName === '/faceCare'){
      setPageInfo('page3')
    }else if(pathName === '/waxing'){
      setPageInfo('page3')
    }
  },[pathName]);

 

  return (
    <AuthCxt.Provider value={{ user: userInfo, onLogin, onLogout }}>
     <div id={pageInfo}>
        <div className="bg">
       <Header />
    <Switch>
      <Route path='/' exact component={PageOne} />
      <Route path='/services' component={PageTwo} />
      <Route path='/therapies' component={PageThree} />
      <Route path='/staff' component={PageFour} />
      <Route path='/contacts' component={PageFive} />
      <Route path='/bodyMassages' component={BodyMassages} />
      <Route path='/bodyTreatments' component={BodyTherapies} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LoginPage} />
      <Route path='/faceCare' component={FaceCare} />
      <Route path='/logout' component={Logout} />
      <Route path='/waxing' component={Waxing} />
    </Switch>
    </div>
    <Switch>
      <Route path='/' exact ><AsidePageOne /> </Route>
      <Route path='/services'><AsidePageTwo /></Route>
      <Route path='/contacts'><AsidePageFive /></Route>
    </Switch>
    <Footer />
    </div>
    </AuthCxt.Provider>
  );
}

export default App;
