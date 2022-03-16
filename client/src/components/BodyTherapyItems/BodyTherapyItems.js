import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import AuthCxt from '../../contexts/AuthCxt';

import { Typography, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ThumbUpAlt } from '@material-ui/icons';


import * as services from '../Services/data';

const BodyTherapyItems = ({ bodyTherapy }) => {

    const history = useHistory();

    const value = useContext(AuthCxt);
    const user = value.user.user;

    const { name, img, type, time, price, description, likes} = bodyTherapy;

    const [counter, setCounter] = useState(likes);
    const [count, setCount] = useState(0);

    const onClick = () => {

        if(user){

            if(count < 1){

                let currentLikes = counter;
                setCounter(() => currentLikes + 1);
                setCount(() => count + 1);

                let newCounter = counter + 1;

                const data = { name, img, type, time, price, description, likes: newCounter };

                services.editBodyTherapy(bodyTherapy._id, data)
                .then(() => history.push('/bodyTreatments'))
            }

        }
    };

  return (
    <div className='grid_4 alpha'>
    <div className="listing">
    <Accordion style={{'width':'282px'}}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
        <div className="the-images">
            <img src={img} />
        </div>

   
      
        {/* <h5>{name}</h5> */}
        <div className="info">
            <div className="data-info" >
                <span >{time} min</span>
                <span style={{ 'padding-left': '140px', 'color': "black" }}>{price} BGN</span>

            </div>
            <span>
                <Typography style={{'padding-left': '10px'}}>
                    Likes: {counter}
                    <IconButton style={{ "padding-left": "10px", 'marginLeft':'130px' }}>
                        {user
                        ?
                        <ThumbUpAlt onClick={onClick} />
                        : null}
                    </IconButton>
                </Typography>
            </span>
        </div>

     
    </div>
    <br />
    <br />
</div>
  )
}

export default BodyTherapyItems