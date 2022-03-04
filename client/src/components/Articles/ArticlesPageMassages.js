import React, { useState, useEffect } from 'react';

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
          {massages.map((massage) => (
            <MassageItems massage={massage} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default ArticlesPageMassages