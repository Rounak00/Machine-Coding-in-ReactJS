import { useEffect, useRef } from "react";



const areEqualDeps=(prev,current)=>{
    if(prev===null)return false;
    if(prev.length() !== current.length()){
        return false;
    }
    return JSON.stringify(prev)===JSON.stringify(current);
}
const useCustomMemo=(cb,deps)=>{
    //variable or state to stored cached value then compare changes of deps
    //add cleanup also
    const cached=useRef(null);

    if(!cached.current || !areEqualDeps(cached.current.deps,deps)){
        cached.current={
            value:cb(),
            deps
        }
    }


    //cleanup
     useEffect(()=>{
      return ()=> {cached.current=null;}  
     },[])
    //return memoised value
    return cached.current.value;
}