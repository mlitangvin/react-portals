import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Portal from './Portal';

const renderPortal = (props) => {
  const somewhere = document.getElementById('portal');
  return createPortal(
    <Portal flipTheSwitch={props.flipTheSwitch} someProp={props.someProp} />,
    somewhere
  );
};

const Test = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!isReady) setIsReady(true);
  }, []);

  const flipTheSwitch = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>This is a test portal page</h1>
      <h2>This is the toggle's state: {toggle ? 'true' : 'false'}</h2>
      {isReady
        ? renderPortal({
            flipTheSwitch,
            someProp: toggle ? 'someValue' : 'anotherValue',
          })
        : null}
    </div>
  );
};

export default Test;
