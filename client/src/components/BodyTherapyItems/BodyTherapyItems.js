import React, {useContext, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthCxt from '../../contexts/AuthCxt';

import { Typography, IconButton } from '@material-ui/core';
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
        <div className="the-images">
            <img src={img} />
        </div>
        <Link to='/'><h5>{name}</h5></Link>
        <div className="info">
            <div className="data-info" >
                <span >{time} min</span>
                <span style={{ 'padding-left': '140px', 'color': "black" }}>{price} BGN</span>

            </div>
            <span>
                <Typography style={{'padding-left': '10px'}}>
                    Likes: {counter}
                    <IconButton style={{ "padding-left": "160px" }}>
                        <ThumbUpAlt onClick={onClick} />
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