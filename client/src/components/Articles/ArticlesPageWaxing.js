import React,{useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'; 

import * as services from '../Services/data';

import useStyles from './stylesWaxing';

const ArticlesPageWaxing = () => {
    const classes = useStyles();
    const [waxTherapies, setWaxTherapies] = useState([]);

    useEffect(() => {
        services.getAll()
        .then((result) => setWaxTherapies(result))
    },[]);

  return (
      <>
    {/* <article className="grid_12"> */}
    <h3 className="p2">Waxing Therapies</h3>
    {/* <div className="wrapper p4"> */}
    {waxTherapies.map(x => 
         <Card className={classes.root}>
         <CardMedia className={classes.media} image={x.img} title={x.name} />
         <CardContent>
             <div className={classes.cardContent}>
                 <Typography variant='h5' gutterBottom>
                     {x.name}
                 </Typography>
                 <Typography variant='h6'>
                    {x.time} min    {x.price} BGN
                 </Typography>
             </div>
             {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' /> */}
         </CardContent>
         {/* <CardActions disableSpacing className={classes.cardActions} >
             <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                 <AddShoppingCart  />
             </IconButton>
         </CardActions> */}
         <br />
         <br />
     </Card>
        
        )}
  
    {/* </div> */}

    {/* </article> */}
</>
  )
}

export default ArticlesPageWaxing;

{/* <div className="grid_4 alpha">
<div className="wrapper p2">
  <figure className="border fleft"><img src="images/page3-img1.jpg" alt="" /></figure>
</div>
<h6 className="prev-indent-bot"><Link className="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
<p className="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
<Link className="button" to="#">Details</Link>
</div> */}