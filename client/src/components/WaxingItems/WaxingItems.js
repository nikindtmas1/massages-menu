import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from '@material-ui/core';
import useStyles from '../Articles/stylesWaxing';
import { ThumbUpAlt } from '@material-ui/icons';




const WaxingItems = ({ waxTherapy }) => {

    
    const classes = useStyles();

    const [counter, setCounter] = useState(waxTherapy.likes);

    const onClick = () => {
        const currentLikes = counter;
        setCounter(() => currentLikes + 1);
    }



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

                <IconButton aria-label='Add to Cart' onClick={onClick}>

                    <ThumbUpAlt />

                </IconButton>
            </CardActions>

        </Card>

    )
}

export default WaxingItems