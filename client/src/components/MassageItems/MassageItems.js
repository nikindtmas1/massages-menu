import React from 'react';
import {Link} from 'react-router-dom';

const MassageItems = ({massages}) => {

    console.log(massages);
  return (
    <div className="wrapper">
     {massages.map(x => 
        <div className="grid_4 alpha">
            
        <div className="indent-left3">
          <div className="wrapper p2">
            <figure className="border fleft"><img src={x.img} alt="" /></figure>
          </div>
          <h6 className="prev-indent-bot"><Link className="link" to="#">{x.name}</Link></h6>
          {/* <p className="indent-bot">{x.description}</p> */}
          <p className='indent-bot'>
              <span style={{'padding':"10px","color":"blue"}}>{x.time} min</span>
              <span>       </span>
         
              <span style={{'padding-left':'120px', 'color':"blue"}}>{x.price} BGN</span>
              </p>
          {/* <Link className="button" to="#">Details</Link>  */}
          </div>
          <br />
          <br />
      </div>
        )}
      
     
    </div>
  )
}

export default MassageItems