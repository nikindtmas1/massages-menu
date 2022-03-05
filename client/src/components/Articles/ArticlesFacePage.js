import React, { useState, useEffect } from 'react';
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
          {faceCares.map((faceCare) => (

            <FaceItems faceCare={faceCare} />

          ))}
        </div>
      </div>
    </article>
  )
}

export default ArticlesFacePage