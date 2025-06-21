"use Client"

import { useEffect, useState } from "react";

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error:string |null;
}

export function useApi <T = any>(url:string, options?: RequestInit){
    const [state, setState] = useState<FetchState<T>>({
      data: null,
      loading: true,
      error: null,
    });
    
    useEffect(()=>{ 
        let isMounted=true;

        async function fetchData (){
            setState({ data: null, loading: true, error: null });
       
            try{
                const res = await fetch(url, options);

                if (!res.ok)
                  throw new Error(`Error ${res.status}: ${res.statusText}`);

                const json = await res.json();

                if (isMounted) {
                  setState({ data: json, loading: false, error: null });
                }
            }catch(err:any){
                if (isMounted) {
                  setState({
                    data: null,
                    loading: false,
                    error: err.message || "Unknown error",
                  });
                }
            }
        }
        fetchData();

        return () => {
          isMounted = false;
        };
    },[url,JSON.stringify(options)])
    return state;
}