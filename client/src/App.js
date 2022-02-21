import {Route, Switch} from 'react-router-dom';

import PageOne from "./components/PageOne/PageOne";
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import PageFour from './components/PageFour/PageFour';
import PageFive from './components/PageFive/PageFive';
import Register from './components/Register/Register';
import LoginPage from './components/Login/LoginPage';
import BodyMassages from './components/BodyMassages/BodyMassages';

function App() {
  return (

    <Switch>
      <Route path='/' exact component={PageOne} />
      <Route path='/services' component={PageTwo} />
      <Route path='/therapies' component={PageThree} />
      <Route path='/staff' component={PageFour} />
      <Route path='/contacts' component={PageFive} />
      <Route path='/bodyMassages' component={BodyMassages} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LoginPage} />
    </Switch>
    
    
  );
}

export default App;
