import React, {useState, useEffect} from 'react';

import FaceItems from '../FaceItems/FaceItems';

const ArticlesFacePage = () => {

    const [faceCare, setFaceCare] = useState([]);

    useEffect(() => {
        
    },[]);

  return (
    <article className="grid_12">
    <h3 className="p2">Face Care</h3>
    <div className="wrapper p4">

    <FaceItems faceCare={faceCare} />
    </div>
  </article>
  )
}

export default ArticlesFacePage