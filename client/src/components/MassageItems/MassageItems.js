import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, IconButton, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

import { ThumbUpAlt } from '@material-ui/icons';

import AuthCxt from '../../contexts/AuthCxt';
import * as services from '../Services/data';


const MassageItems = ({ massage }) => {

  const history = useHistory();

  const {name, img, type, time, price, description, likes} = massage;

  const value = useContext(AuthCxt);
  const user = value.user.user;

  const [counter, setCounter] = useState(likes);
  const [count, setCount] = useState(0);

  const onClick = () => {

    if (user) {
      if (count < 1) {
        let currentLikes = counter;
        setCounter(() => currentLikes + 1);
        setCount(() => count + 1);

        let newCounter = counter + 1;

        const data = {name, img, type, time, price, description, likes: newCounter};

        services.editMassage(massage._id, data)
        .then(() => history.push('/bodyMassages'))
      }
    }
  }

  return (
    <div className="grid_4 alpha">

      <div className="indent-left3">
      <Accordion style={{'width':'282px'}}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}
          <figure className="the-images"><img src={img} alt="" /></figure>
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
        <div className="wrapper p2">
          {/* <figure className="the-images"><img src={img} alt="" /></figure> */}
        </div>
        {/* <h6 className="prev-indent-bot">{name}</h6> */}
        {/* <p className="indent-bot">{x.description}</p> */}
        <p className='indent-bot'>
          <span style={{ 'padding': "10px", "color": "black" }}>{time} min</span>
      
          <span style={{ 'padding-left': '120px', 'color': "black" }}>{price} BGN</span>
        </p>
        {/* <Link className="button" to="#">Details</Link>  */}
        <p className='indent-bot'>
          <span >
            <Typography style={{'padding-left': '10px'}}>
              Likes: {counter}
              <IconButton style={{ "padding-left": "10px",'marginLeft':'130px' }}>
                {user
                ?
                <ThumbUpAlt onClick={onClick} />
                : null
                }
              </IconButton>
            </Typography>
          </span>
        </p>

        
      </div>
      <br />
      <br />
    </div>
  )
}

export default MassageItems