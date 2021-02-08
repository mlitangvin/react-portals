import React from 'react';

const handlePortalBtnClick = (target, additionalFunc) => {
  console.log(target);
  additionalFunc();
};

const PortalV2 = (props) => {
  return (
    <button onClick={(e) => handlePortalBtnClick(e.target, props.performThis)}>
      Portal Button {props.bid}
    </button>
  );
};

export default PortalV2;
