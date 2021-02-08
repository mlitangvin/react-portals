import React from 'react';

const Portal = (props) => {
  return (
    <>
      <div>Im a portal for testing!</div>
      <ul>
        <li>
          This is the value of someProp passed from Test component:{' '}
          {props.someProp}
        </li>
      </ul>
      <button onClick={props.flipTheSwitch}>Toggle</button>
    </>
  );
};

export default Portal;
