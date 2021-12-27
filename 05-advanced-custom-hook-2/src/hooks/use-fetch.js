import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConf, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConf.url, {
        method: requestConf.method ? requestConf.method : "GET",
        body: requestConf.body ? JSON.stringify(requestConf.body) : null,
        headers: requestConf.headers ? requestConf.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
