import React, {useState, useEffect} from 'react';
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
        {bodyTherapies.map((bodyTherapy) => (

          <BodyTherapyItems bodyTherapy={bodyTherapy} />

        ))}
      </div>
    </div>
  </article>
  )
}

export default ArticlesBodyTherapyPage