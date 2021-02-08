import React, { useState, useEffect } from 'react';
import PortalV2 from '../PortalV2';

const demoDataset = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

// NOTE: The props here include the performThis prop sent down by FirstPage component
const SecondPage = (props) => {
  const [count, setCount] = useState(0);

  console.log('Second Page re-rendered');

  return (
    <div>
      <h1>I am the second page</h1>
      {demoDataset.map((data) => (
        <PortalV2 key={data.id} bid={data.id} performThis={props.performThis} />
      ))}
      <hr />
      <div>
        <h2>Page 2 Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    </div>
  );
};

export default SecondPage;
