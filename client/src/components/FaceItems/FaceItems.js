import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthCxt from '../../contexts/AuthCxt';

import { Typography, IconButton } from '@material-ui/core';
import { ThumbUpAlt } from '@material-ui/icons';

const FaceItems = ({ faceCare }) => {
    
    const value = useContext(AuthCxt);
    const user = value.user.user;

    const {name, img, type, time, price, description, likes} = faceCare;

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
                        <Typography>
                            Likes: {0}
                            <IconButton style={{ "padding-left": "160px" }}>
                                <ThumbUpAlt />
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

export default FaceItems