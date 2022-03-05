import React from 'react';
import {Link} from 'react-router-dom';

const FaceItems = ({faceCare}) => {
  return (
    
 
          <div className='grid_4 alpha'>
         <div className="listing">
         <div className="the-images">
             <img src={faceCare.img} />
         </div>
         <Link to='/'><h5>{faceCare.name}</h5></Link>
         <div className="info">
             <div className="data-info" >
                 <h5 >{faceCare.time} min</h5>
                 <h6>{faceCare.price} BGN</h6>
             </div>
         </div>
         </div>
         <br />
         <br />
         </div>
         
  
       
 
  )
}

export default FaceItems