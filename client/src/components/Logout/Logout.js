import {useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import * as authService from '../Services/data';
import AuthCxt from '../../contexts/AuthCxt';

const Logout = () => {
    let {onLogout} = useContext(AuthCxt);

    let history = useHistory();

    useEffect(() => {
      authService.logout()
        .then(() => {
          onLogout()
          history.push('/')
        })
    }, []);
  
    return null;

}

export default Logout