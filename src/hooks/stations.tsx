import { useEffect, useState, useRef } from "react";
const wsUrl = process.env.REACT_APP_WS_STATIONS ?? "ws://192.168.20.27:10014/stations";
export function useStationsWS() {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      ws.current?.send(JSON.stringify({ action: "get_stations" }));
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.stations) {
          setStations(data.stations);
        }
      } catch (e) {
        setError(e as Error);
      }
    };

    ws.current.onerror = (event) => {
      setError(new Error("WebSocket error"));
    };

    ws.current.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  return { stations, error };
}
