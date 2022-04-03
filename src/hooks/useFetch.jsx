import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(apiLink) {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  async function fetch() {
    setLoadingState(true);
    try {
      const res = await axios.get(apiLink);
      setResponse(res.data);
    } catch (err) {
      setError(err.response.status || 500);
    } finally {
      setLoadingState(false);
    }
  }

  useEffect(() => fetch(), []);

  return { loadingState, error, response };
}
