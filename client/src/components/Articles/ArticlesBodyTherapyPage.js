import React, {useState, useEffect} from 'react';
// import { CircularProgress } from '@material-ui/core';
// import { Box } from '@material-ui/core';
import * as services from '../Services/data';

import BodyTherapyItems from '../BodyTherapyItems/BodyTherapyItems';
import CircularIndeterminate from '../Circular/Circular';


const ArticlesBodyTherapyPage = () => {

    const [bodyTherapies, setBodyTherapies] = useState([]);

    useEffect(() => {
      

        services.getAllBodyTherapy()
        .then((result) => setBodyTherapies(result))
   
     
    }, []);

  return (
    <article className="grid_12">
    <h3 className="p2">Body Therapies</h3>
    <div className="wrapper p4">
      <div className='wraper'>
        {
        !bodyTherapies ?
          <CircularIndeterminate />
          : 
          bodyTherapies.map((bodyTherapy) => (

            <BodyTherapyItems bodyTherapy={bodyTherapy} />
  
          ))
        
      }
      </div>
    </div>
  </article>
  )
}

export default ArticlesBodyTherapyPage