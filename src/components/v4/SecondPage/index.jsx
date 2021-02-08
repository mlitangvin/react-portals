import React, { memo, useState, useEffect, useContext } from 'react';
import aContext from '../SubscriptionBus/context';

const MemoizedSecondPage = memo(function CoreSecondPage({ setRefreshPlease }) {
  const [isReady, setIsReady] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
      console.log(`Second Page isReady: true`);
    }
  }, []);

  console.log('Second Page re-rendered');

  return (
    <div>
      <h1>I am the second page</h1>
      <hr />
      <div>
        <h2>Page 2 Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            console.log('Second Page asking First Page to refresh');
            // setRefreshPlease({ type: 'refresh' });
            setRefreshPlease(true);
          }}
        >
          Refresh First Page
        </button>
      </div>
    </div>
  );
});

const SecondPage = () => {
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   if (!isReady) setIsReady(true);
  // }, []);

  // if (isReady) {
  const { setRefreshPlease } = useContext(aContext);
  return <MemoizedSecondPage setRefreshPlease={setRefreshPlease} />;
  // } else {
  //   return <div>Loading...</div>;
  // }
};

export default SecondPage;
