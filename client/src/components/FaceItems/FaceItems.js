import React from 'react';
import {Link} from 'react-router-dom';

const FaceItems = ({faceCare}) => {
  return (
    <div className='wrapper'>
    {/* map */}
    <div className="listing">
    <div className="preview">
        <img src='images/page3-img5.jpg' />
    </div>
    <Link to='/'><h5>name: Lifting</h5></Link>
    <div className="info">
        <div className="data-info" >
            <h5 >Time: 50 minute</h5>
            <h6>Price: 180 BGN</h6>
        </div>
       
    </div>
    </div>
    </div>
  )
}

export default FaceItems