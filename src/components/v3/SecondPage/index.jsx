import React, { memo, useState, useEffect, useContext } from 'react';
import aContext from '../SubscriptionBus/context';

// NOTE: Memoized version of the component to prevent excessive re-renders
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
  const { setRefreshPlease } = useContext(aContext);
  return <MemoizedSecondPage setRefreshPlease={setRefreshPlease} />;
};

export default SecondPage;
