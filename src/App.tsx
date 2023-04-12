import React, { useCallback } from 'react';

import useFetch from './hooks/useFetch';

const App = () => {
  // If send url to hook, the request will be called during render
  const { sendRequest } = useFetch();

  const clickHandler = useCallback(() => {
    sendRequest('test');
  }, []);

  return (
    <>
      <h1>API MOCK TEST</h1>
      <button onClick={clickHandler}>Send test request</button>
    </>
  );
};

export default App;
