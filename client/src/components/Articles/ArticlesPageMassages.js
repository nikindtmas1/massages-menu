import React, { useState, useEffect } from 'react';
//import { CircularProgress } from '@material-ui/core';
//import { Box } from '@material-ui/core';
import CircularIndeterminate from '../Circular/Circular';
// export default function CircularIndeterminate() {
//   return (
   
//   );
// }

import * as services from '../Services/data';

import MassageItems from '../MassageItems/MassageItems';
const ArticlesPageMassages = () => {

  const [massages, setMassages] = useState([]);

  useEffect(() => {
    services.getAll()
      .then((result) => setMassages(result))
  }, []);

  return (
    <article className="grid_12">
      <h3 className="p2">Body Massages</h3>
      <div className="wrapper p4">
        <div className='wrapper'>
          {
          massages.length > 0 
          ?
          massages.map((massage) => (
            <MassageItems massage={massage} />
          ))
          :  <CircularIndeterminate />
          // <Box sx={{ display: 'flex' }}>
          //     <CircularProgress />
          //   </Box>
          }
        </div>
      </div>
    </article>
  )
}

export default ArticlesPageMassages