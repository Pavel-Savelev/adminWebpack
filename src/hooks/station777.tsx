import useWebSocket, { ReadyState } from "react-use-websocket";
import { useState, useEffect } from "react";
import { IStationDataTry } from "../types/elecricalStation";

const station_id = "778";
const WS_URL = `ws://192.168.20.27:10014/ws`;

export function useStation777WS() {
  // возможно данные приходят другие и поэтому null
  const [stationTest, setStation] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [sent, setSent] = useState(false);

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      shouldReconnect: () => true,
    }
  );

  useEffect(() => {
    if (readyState === ReadyState.OPEN && !sent) {
      sendJsonMessage({ action: "get_station", station_id });
      setSent(true);
    }
  }, [readyState, sendJsonMessage, sent]);

  useEffect(() => {
    if (lastJsonMessage) {
      try {
        if ((lastJsonMessage as any).station_id === station_id) {
          setStation(lastJsonMessage as any);
        }
      } catch (e) {
        setError(e as Error);
      }
    }
  }, [lastJsonMessage]);
  console.log(stationTest)
  return { stationTest, error };
}
