import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Box } from '@material-ui/core';

import * as services from '../Services/data';

import FaceItems from '../FaceItems/FaceItems';

const ArticlesFacePage = () => {

  const [faceCares, setFaceCares] = useState([]);

  useEffect(() => {
    services.getAllFaces()
      .then((result) => setFaceCares(result))
  }, []);

  return (
    <article className="grid_12">
      <h3 className="p2">Face Care</h3>
      <div className="wrapper p4">
        <div className='wraper'>
          {
          faceCares ?
          faceCares.map((faceCare) => (

            <FaceItems faceCare={faceCare} />

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

export default ArticlesFacePage