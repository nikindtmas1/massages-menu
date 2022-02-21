import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import * as services from '../Services/data';

import MassageItems from '../MassageItems/MassageItems';
const ArticlesPageMassages = () => {

const [massages, setMassages] = useState([]);

useEffect(() => {
  services.getAll()
  .then((result) => setMassages(result))
},[]);

  return (
    <article className="grid_12">
    <h3 className="p2">Body Massages</h3>
    <div className="wrapper p4">
      <div className="grid_4 alpha">
        <div className="wrapper p2">
          <figure className="border fleft"><img src="images/page3-img1.jpg" alt="" /></figure>
        </div>
        <h6 className="prev-indent-bot"><Link className="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
        <p className="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <Link className="button" to="#">Details</Link> </div>
      <div className="grid_4">
        <div className="indent-left3">
          <div className="wrapper p2">
            <figure className="border fleft"><img src="images/page3-img2.jpg" alt="" /></figure>
          </div>
          <h6 className="prev-indent-bot"><Link className="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p className="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link className="button" to="#">Details</Link> </div>
      </div>
      <div className="grid_4 omega">
        <div className="indent-left2">
          <div className="wrapper p2">
            <figure className="border fleft"><img src="images/page3-img3.jpg" alt="" /></figure>
          </div>
          <h6 className="prev-indent-bot"><Link className="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p className="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link className="button" to="#">Details</Link> </div>
      </div>
    </div>
    <MassageItems massages={massages}/>
  </article>
  )
}

export default ArticlesPageMassages