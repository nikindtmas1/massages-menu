import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesPageFour = () => {
  return (
    <article class="grid_12">
    <h3 className="p2">Our Staff</h3>
    <div className="wrapper p4">
      <figure className="img-indent border"><img src="images/page4-img1.jpg" alt="" /></figure>
      <div className="extra-wrap">
        <div className="wrapper">
          <h4 className="fleft">Nikkie Watson</h4>
          <ul className="list-services fright indent-top">
            <li><Link to="#"></Link></li>
            <li><Link className="item-2" to="#"></Link></li>
          </ul>
        </div>
        <strong className="text-1 color-3 prev-indent-bot2">Stylist</strong>
        <p>Consectetur adipcing eld eiusmod tempor incidint utbore dolore magna aliquat enim minim veniam quis nostrud exercitation ullamco laborum et dolorum.</p>
        <Link className="button" to="#">Details</Link> </div>
    </div>
    <div className="wrapper p4">
      <figure className="img-indent border"><img src="images/page4-img2.jpg" alt="" /></figure>
      <div className="extra-wrap">
        <div className="wrapper">
          <h4 className="fleft">William Morgan</h4>
          <ul className="list-services fright indent-top">
            <li><Link to="#"></Link></li>
            <li><Link className="item-2" to="#"></Link></li>
          </ul>
        </div>
        <strong className="text-1 color-3 prev-indent-bot2">Esthetican</strong>
        <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur vero eos et accusamus.</p>
        <Link className="button" to="#">Details</Link> </div>
    </div>
    <div className="wrapper">
      <figure className="img-indent border"><img src="images/page4-img3.jpg" alt="" /></figure>
      <div className="extra-wrap">
        <div className="wrapper">
          <h4 className="fleft">Jessica Anderson</h4>
          <ul className="list-services fright indent-top">
            <li><Link to="#"></Link></li>
            <li><Link className="item-2" to="#"></Link></li>
          </ul>
        </div>
        <strong className="text-1 color-3 prev-indent-bot2">Guest Services</strong>
        <p>Consectetur adipcing eld eiusmod tempor incidint utbore dolore magna aliquat enim minim veniam quis nostrud exercitation ullamco laborum et dolorum.</p>
        <Link className="button" to="#">Details</Link> </div>
    </div>
  </article>
  )
}

export default ArticlesPageFour