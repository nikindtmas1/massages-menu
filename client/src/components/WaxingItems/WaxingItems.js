import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from '@material-ui/core'; 
import useStyles from '../Articles/stylesWaxing';
// import {AddShoppingCart} from '@material-ui/icons';

//import {ThumbUpAltIcon} from '@material-ui/icons';

const WaxingItems = ({waxTherapy}) => {

    const classes = useStyles();

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
            <IconButton aria-label='Add to Cart'>
                {/* <DeleteIcon  /> */}
            </IconButton>
        </CardActions>
        <br />
        <br />
        </Card>

  )
}

export default WaxingItems