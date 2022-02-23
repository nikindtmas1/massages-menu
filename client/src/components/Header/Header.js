import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header>
          <div className="menu-row">
            <div className="main">
              <div className="container_12">
                <div className="wrapper">
                  <div className="grid_12">
                   <Navigation />
                    <h1>
                      <Link to="/">Health&Relax</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header