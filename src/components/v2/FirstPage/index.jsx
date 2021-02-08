import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import SecondPage from '../SecondPage';

const renderPortal = (performThis) => {
  // NOTE: This portal wraps the entire SecondPage component
  const atMountPoint = document.getElementById('tworoot');
  return createPortal(<SecondPage performThis={performThis} />, atMountPoint);
};

const FirstPage = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isReady) {
      console.log(`isReady: ${isReady}`);
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (toggle) {
      // NOTE: This would be where the component makes an API call to retrieve updated data
      console.log('THE PORTAL BUTTON MADE ME DO IT');
      setToggle(false);
    }
  }, [toggle]);

  console.log('First Page re-rendered');

  return (
    <div>
      <h1>I am the first page</h1>
      <div>
        <h2>Page 1 Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
      <hr />
      {/* NOTE: Render the portal only when the components have mounted */}
      {isReady && renderPortal(() => setToggle(true))}
    </div>
  );
};

export default FirstPage;
