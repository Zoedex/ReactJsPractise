import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    

    //useEffect
    useEffect(() => {
      fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error('Could not fetch data from the resource!')
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setPending(false);
      })
      .catch(err => {
        setError(err.message);
        setPending(false);
      })
    }, []);

    return { data , isPending, error};
}

export default useFetch ;