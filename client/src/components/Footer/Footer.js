import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="main">
          <div className="container_12">
            <div className="wrapper">
              <div className="grid_8">
                <div className="footer-text">
                  <b>
                   &copy; 2022 <span >All Rights Reserved - </span> Health&Relax International
                  </b>{" "}
                  {/* Design by{" "}
                  <a  href="http://www.templatemonster.com/">
                    TemplateMonster.com
                  </a> */}
                </div>
                {/* <ul className="list-services">
                  <li>
                    <a className="item-1" href="/">'</a>
                  </li>
                  <li>
                    <a className="item-2" href="/">'</a>
                  </li>
                  <li>
                    <a className="item-3" href="/">'</a>
                  </li>
                  <li>
                    <a className="item-4" href="/">'</a>
                  </li>
                </ul> */}
              </div>
              {/* <div className="grid_4">
                <div className="support-phone">
                  {" "}
                  <strong>Call:</strong> <b>+(359)</b>88-219-6877{" "}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer