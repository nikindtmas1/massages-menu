import React, { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from '@material-ui/core';
import useStyles from '../Articles/stylesWaxing';
import { ThumbUpAlt } from '@material-ui/icons';
import AuthContext from '../../contexts/AuthCxt';




const WaxingItems = ({ waxTherapy }) => {

    const value = useContext(AuthContext);

    const user = value.user.user;
    
    const classes = useStyles();

    const [counter, setCounter] = useState(waxTherapy.likes);
    const [count, setCount] = useState(0);

    const onClick = () => {

        if(user){

            if(count < 1){

                const currentLikes = counter;
                setCounter(() => currentLikes + 1);
                setCount(() => count + 1);
            };

        };
      
       
    };



    return (

        <Card className={classes.root}>
            <CardMedia className={classes.media} image={waxTherapy.img} title={waxTherapy.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {waxTherapy.name}
                    </Typography>
                    <Typography variant='h6'>
                        {waxTherapy.time} min {" "} -  {waxTherapy.price} BGN
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

                <IconButton  onClick={onClick}>

                    <ThumbUpAlt />

                </IconButton>
            </CardActions>

        </Card>

    )
}

export default WaxingItems