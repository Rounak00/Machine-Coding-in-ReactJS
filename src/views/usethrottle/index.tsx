import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay = 360) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecutedRef = useRef(0);

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecutedRef.current >= delay) {
      setThrottledValue(value);
      lastExecutedRef.current = now;
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
// usage -> const throttledSearch = useThrottle(searchText, 1000);
