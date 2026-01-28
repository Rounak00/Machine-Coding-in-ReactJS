import { useEffect, useState } from "react";

const useDebounce = function (query, delay = 3600) {
  const [data, setData] = useState("");
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setData(query);
    }, delay);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [query, delay]);

  return data;
};

export default useDebounce;

// usage -> 
// const data=useDebounce("somethng",4500);
