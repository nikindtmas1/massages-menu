import React from 'react';
import {Link} from 'react-router-dom';

const FaceItems = ({faceCare}) => {
  return (
      <div className='wrapper'>
      {faceCare.map(x => 
          <div className='grid_4 alpha'>
         <div className="listing">
         <div className="the-images">
             <img src={x.img} />
         </div>
         <Link to='/'><h5>{x.name}</h5></Link>
         <div className="info">
             <div className="data-info" >
                 <h5 >{x.time} min</h5>
                 <h6>{x.price} BGN</h6>
             </div>
         </div>
         </div>
         <br />
         <br />
         </div>
         
         )}
         </div>
 
  )
}

export default FaceItems