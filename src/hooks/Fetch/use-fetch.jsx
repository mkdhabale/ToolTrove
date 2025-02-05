//not in used
import { useCallback, useEffect, useState } from "react";

function UseFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      if (result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetchData: ", error);
      setLoading(false);
      setError(error);
    }
  }, [url, options]); // Empty dependency array means fetchWeather won't change

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
}

export default UseFetch;
