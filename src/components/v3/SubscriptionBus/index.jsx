import React, { useReducer, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import aContext from './context';

const SomeContext = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [refreshPlease, setRefreshPlease] = useState(false);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
      console.log('Hidden Parent isReady: true');
    }
  }, []);

  console.log('Some Context re-rendered');

  return (
    <aContext.Provider value={{ refreshPlease, setRefreshPlease }}>
      {isReady &&
        createPortal(<FirstPage />, document.getElementById('oneroot'))}
      {isReady &&
        createPortal(<SecondPage />, document.getElementById('tworoot'))}
    </aContext.Provider>
  );
};

export default SomeContext;
