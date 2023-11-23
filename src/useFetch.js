import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch data from the resource!');
        }
        return response.json();
      })
      .then(data => {
        if (!abortCont.signal.aborted) { // Check if the fetch was aborted
          setData(data);
          setPending(false);
        }
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Aborted the fetching.');
        } else {
          setError(err.message);
          setPending(false);
        }
      });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
