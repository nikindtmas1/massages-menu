import React from 'react';
import {Link} from 'react-router-dom';

const MassageItems = ({massages}) => {

    console.log(massages);
  return (
    <div className="wrapper">
     
     {massages.map(x => 
        <div className="grid_4">
        <div className="indent-left3">
          <div className="wrapper p2">
            <figure className="border fleft"><img src="images/page3-img5.jpg" alt="" /></figure>
          </div>
          <h6 className="prev-indent-bot"><Link className="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p className="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link className="button" to="#">Details</Link> </div>
      </div>
        )}
      
     
    </div>
  )
}

export default MassageItems