import { useEffect, useState } from 'react';

import { API_PREFIX } from '../constants/constants.env';

const useFetch = (url?: string, params: any = {}) => {
  const [ data, setData ] = useState();
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState(false);

  const sendRequest = (url: string, params: any = {}) => {
    setLoading(() => true);

    fetch(API_PREFIX + url, params)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      });
  };

  useEffect(() => {
    if (url) {
      sendRequest(url, params);
    }
  }, []);

  return {
    data,
    error,
    loading,
    sendRequest,
  };
};

export default useFetch;