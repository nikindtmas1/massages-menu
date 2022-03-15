import React, {useState, useEffect} from 'react';
import { CircularProgress } from '@material-ui/core';
import { Box } from '@material-ui/core';
import * as services from '../Services/data';

import BodyTherapyItems from '../BodyTherapyItems/BodyTherapyItems';

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
        bodyTherapies ?
        bodyTherapies.map((bodyTherapy) => (

          <BodyTherapyItems bodyTherapy={bodyTherapy} />

        ))
          : <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
      }
      </div>
    </div>
  </article>
  )
}

export default ArticlesBodyTherapyPage