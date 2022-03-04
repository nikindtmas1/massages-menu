import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';
import { ThumbUpAlt } from '@material-ui/icons';


const MassageItems = ({ massage }) => {

  const [counter, setCounter] = useState(0);

  const onClick = () => {

    let currentLikes = counter + 1;
    setCounter(currentLikes);

  }

  return (
   <>
  
      
        <div className="grid_4 alpha">

          <div className="indent-left3">
            <div className="wrapper p2">
              <figure className="the-images"><img src={massage.img} alt="" /></figure>
            </div>
            <h6 className="prev-indent-bot"><Link className="link" to="#">{massage.name}</Link></h6>
            {/* <p className="indent-bot">{x.description}</p> */}
            <p className='indent-bot'>
              <span style={{ 'padding': "10px", "color": "black" }}>{massage.time} min</span>
              <span>       </span>

              <span style={{ 'padding-left': '120px', 'color': "black" }}>{massage.price} BGN</span>
            </p>
            {/* <Link className="button" to="#">Details</Link>  */}
            <p className='indent-bot'>
            <span >
            <Typography>
                Likes: {counter} 
              <IconButton style={{"padding-left": "140px"}}>
                <ThumbUpAlt onClick={onClick} />
              </IconButton>
              </Typography>
            </span>
              {/* <span>       </span> */}

              {/* <span style={{ 'padding-left': '120px', 'color': "black" }}>
          
              </span> */}
            
              
           
            </p>

          </div>
          <br />
          <br />
        </div>
  

</>
  
  )
}

export default MassageItems