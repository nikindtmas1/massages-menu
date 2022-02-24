import React,{useState, useEffect} from 'react';
import { Grid } from "@material-ui/core";

//import {Link} from 'react-router-dom';
import WaxingItems from '../WaxingItems/WaxingItems';
import * as services from '../Services/data';
import useStyles from '../Articles/styleArticlesWax';

const ArticlesPageWaxing = () => {
    const classes = useStyles();

    const [waxTherapies, setWaxTherapies] = useState([]);

    useEffect(() => {
        services.getAllWaxing()
        .then((result) => setWaxTherapies(result))
    },[]);

  return (
      <>
    <article className="grid_12">
    <h3 className="p2">Waxing Therapies</h3>
    <div className="wrapper p4">
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent='center' spacing={4}>
            {waxTherapies.map((waxTherapy) => (
                <Grid item key={waxTherapy.id} xs={12} sm={6} md={4} lg={3}>
                    <WaxingItems waxTherapy={waxTherapy} />
                </Grid>
            ))}
        </Grid>
    </main>
        
    </div>

    </article>
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