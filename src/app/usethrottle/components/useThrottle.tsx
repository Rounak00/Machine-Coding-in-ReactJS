import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const timeSinceLast = now - lastExecuted.current;

    if (timeSinceLast >= delay) {
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      const timeout = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, delay - timeSinceLast);

      return () => clearTimeout(timeout);
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
