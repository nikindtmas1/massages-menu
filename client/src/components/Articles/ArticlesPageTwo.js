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
                <h4>Sed ut perspiciatis unde omnis </h4>
                Consectetur adipcing elsed eiusmod tempor incidint utbore dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laborum et dolorum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
            </div>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta. </article>
          <article className="grid_3">
            <h3 className="p2">Services List</h3>
            <ul className="list-1">
              <li><Link to="/">Nailcare</Link></li>
              <li><Link to="/">Haircare</Link></li>
              <li><Link to="/">Face Treatments</Link></li>
              {/* <li><Link to="/">Spa Massage</Link></li> */}
              {/* <li><Link to="/">Skin Treatments</Link></li> */}
              <li><Link to="/bodyMassages">Body Treatments</Link></li>
              <li><Link to="/">Waxing</Link></li>
              {/* <li><Link to="/">Makeup</Link></li> */}
              {/* <li><Link to="/">Massage Therapy</Link></li> */}
            </ul>
          </article>
    </>
  )
}

export default ArticlesPageTwo