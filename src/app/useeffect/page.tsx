import { useRef } from "react";

//now here the cleanup thing is not fully possible in react as react handle it using reconcilation technique, but we can do clean up when dependency array changed
const useCustomEffect = (effect, deps) => {
  const isFirstRendered = useRef(true);
  const prevDeps = useRef([]);

  //first renderes
  if (isFirstRendered.current) {
    isFirstRendered.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  //no deps or diffeent deps
  const depsChanged = deps
    ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps)
    : true;
  if (depsChanged) {
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function" && deps) {
        cleanup();
      }
    };
  }
  //cleanup

  prevDeps.current = deps || [];
};
export default useCustomEffect;
