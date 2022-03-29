import { useEffect, useState } from "react";

export default function useLoader(action) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await action();
        setData(res);
        setIsLoaded(true);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    }
    fetchData();
  }, [action]);

  return { isLoaded, data, error };
}
