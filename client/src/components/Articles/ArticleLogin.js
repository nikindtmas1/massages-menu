import React from 'react';
import {useHistory} from 'react-router-dom';
import * as userService from '../Services/data';

//import {Link} from 'react-router-dom';

const ArticleLogin = () => {

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let username = formData.get("username").trim();
        let password = formData.get("password").trim();
    
        if (username === "" || password === "") {
          return alert("All fields are required!");
        }
    
        if (username.length < 3) {
          return alert("Username input is invalid!");
        }
    
        userService.login(username, password)
            // .then(logData => {
            //     onLogin(logData);
            // })
            .catch(error => console.log(error))
            history.push('/');
      };
    return (
        <>
        <article className="grid_8">
          <h3 className="p2">Login Form</h3>
        </article>
        <form onSubmit={onSubmit}>
          <input name="username" type="text" placeholder="Username" />
          <br />
          <input name="password" type="text" placeholder="Password" />
          <br />
          <input type="submit"></input>
        </form>
      </>
    )
}

export default ArticleLogin