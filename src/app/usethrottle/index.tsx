// ThrottlePollyfill.js

import React, { useEffect, useState } from "react";
import useThrottle from "./components/useThrottle";

const ThrottlePollyfill = () => {
  const [rawWindowSize, setRawWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const throttledWindowSize = useThrottle(rawWindowSize, 500);

  useEffect(() => {
    const handleResize = () => {
      setRawWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Throttled Window Size</h2>
      <p>Width: {throttledWindowSize.width}</p>
      <p>Height: {throttledWindowSize.height}</p>
    </div>
  );
};

export default ThrottlePollyfill;
