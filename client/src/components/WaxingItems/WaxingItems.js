import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from '@material-ui/core';
import useStyles from '../Articles/stylesWaxing';
import { ThumbUpAlt } from '@material-ui/icons';
import AuthContext from '../../contexts/AuthCxt';

import * as services from '../Services/data';


const WaxingItems = ({ waxTherapy }) => {

    const history = useHistory();

    const { name, img, type, time, price, description, likes } = waxTherapy;
    const value = useContext(AuthContext);

    const user = value.user.user;
    
    const classes = useStyles();

    const [counter, setCounter] = useState(likes);
    const [count, setCount] = useState(0);

    const onClick = () => {

        if(user){

            if(count < 1){

                const currentLikes = counter;
                setCounter(() => currentLikes + 1);
                setCount(() => count + 1);

                let newCounter = counter + 1;

                const data = {name, img, type, time, price, description, likes: newCounter}
                services.editWaxing(waxTherapy._id, data)
                .then(() => history.push('/waxing'))
                .catch(error => alert(error.message));
            };

        };
      
       
    };



    return (

        <Card className={classes.root}>
            <CardMedia className={classes.media} image={img} title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time} min {" "} -  {price} BGN
                    </Typography>
                </div>
                {/* <Typography dangerouslySetInnerHTML={{ __html: waxTherapy.description }} variant='body2' color='textSecondary' /> */}
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions} >
                <div className={classes.cardContent}>
                    <Typography variant='h6'>
                        Likes: {counter}
                    </Typography>
                </div>

                <IconButton style={{ "padding-left": "10px",'marginLeft':'110px' }}  onClick={onClick}>
                    {user
                    ?
                    <ThumbUpAlt />
                : null}

                </IconButton>
            </CardActions>

        </Card>

    )
}

export default WaxingItems