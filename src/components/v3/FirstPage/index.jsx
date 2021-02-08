import React, { memo, useState, useEffect, useContext } from 'react';
import aContext from '../SubscriptionBus/context';

// NOTE: Memoized version of the component to prevent excessive re-renders
const MemoizedFirstPage = memo(function CoreFirstPage({
  refreshPlease,
  setRefreshPlease
}) {
  const [isReady, setIsReady] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
      console.log(`First Page isReady: true`);
    }
  }, []);

  useEffect(() => {
    console.log(refreshPlease);
    (async () => {
      if (refreshPlease) {
        setRefreshPlease(false);
        console.log('Fetching some asynchronous stuff now');
        await new Promise((resolve) => {
          setTimeout(() => {
            setCount(count + 1);
            resolve();
          }, 1000);
        });
      }
    })();
  }, [refreshPlease]);

  console.log('First Page re-rendered');

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>I am the first page</h1>
      <div>
        <h2>Page 1 Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
      <hr />
    </div>
  );
});

const FirstPage = () => {
  const { refreshPlease, setRefreshPlease } = useContext(aContext);
  return (
    <MemoizedFirstPage
      refreshPlease={refreshPlease}
      setRefreshPlease={setRefreshPlease}
    />
  );
};

export default FirstPage;
