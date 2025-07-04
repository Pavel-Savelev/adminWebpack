import { useEffect, useState } from "react";

export function useStations() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/stations")
      .then(res => res.json())
      .then(data => setStations(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { stations, loading, error };
}

export default useStations