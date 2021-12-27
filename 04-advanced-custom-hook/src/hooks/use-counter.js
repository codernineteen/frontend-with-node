import { useState, useEffect } from "react";

const useCounter = (help) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + help);
    }, 1000);

    return () => clearInterval(interval);
  }, [help]);
  return counter;
};

export default useCounter;
