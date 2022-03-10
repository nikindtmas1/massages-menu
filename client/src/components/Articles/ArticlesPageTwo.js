import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesPageTwo = () => {
  return (
    <>
          <article className="grid_9">
            <h3 className="p2">Operations Consulting</h3>
            <div className="wrapper indent-bot">
              <figure className="img-indent border"><img src="images/page2-img1.jpg" alt="" /></figure>
              <div className="extra-wrap">
                <h4>The “I-SPA” Center in Golden Sands </h4>
                Walk into a dream oasis of over 100 specially curated spa treatments and exotic beauty products, designed to revive and unwind your mind, body and soul. You deserve it.
                The “I-SPA” Center in Golden Sands /Varna, Bulgaria/ offers additional facilities including, indoor pool, steam bath, Turkish bath, infrared sauna, Finnish sauna, hydro-massage room, fitness room and a beauty salon.
                Due to the COVID-19 situation, some of the SPA procedures might be temporary not available. . </div>
            </div>
            To complete your wellness package, we invite you to enjoy our indoor swimming pool or top up your relaxation experience in the Hydro-massage bathtub.
            </article>
            <article className="grid_3">
            <h3 className="p2">Services List</h3>
            <ul className="list-1">
              {/* <li><Link to="/nailCare">Nailcare</Link></li>
              <li><Link to="/hairCare">Haircare</Link></li> */}
              <li><Link to="/faceCare">Face Treatments</Link></li>
              <li><Link to="/bodyMassages">Spa Massages</Link></li>
              {/* <li><Link to="/">Skin Treatments</Link></li> */}
              <li><Link to="/bodyTreatments">Body Treatments</Link></li>
              <li><Link to="/waxing">Waxing</Link></li>
              {/* <li><Link to="/">Makeup</Link></li> */}
              {/* <li><Link to="/">Massage Therapy</Link></li> */}
            </ul>
          </article>
    </>
  )
}

export default ArticlesPageTwo