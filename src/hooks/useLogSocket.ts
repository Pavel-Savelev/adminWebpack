import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { IDataStation } from "../types/elecricalStation";

export function useLogSocket() {
  const [logs, setLogs] = useState<IDataStation[]>([]);

  const WS_URL = "ws://192.168.20.190:8765/log/12345";

  const {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket(WS_URL, {
    share: false,
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        event: "subscribe",
        data: {
          channel: "logs",
        },
      });
    }
  }, [readyState, sendJsonMessage]);

  useEffect(() => {
    if (lastJsonMessage) {
      const raw = lastJsonMessage as
        | { time: string; serial_number: string; message: string }
        | { time: string; serial_number: string; message: string }[];

      const normalize = (item: any): IDataStation => ({
        productNumber: parseInt(item.serial_number),
        message: item.message,
        date: item.time,
      });

      const parsedLogs: IDataStation[] = Array.isArray(raw)
        ? raw.map(normalize)
        : [normalize(raw)];

      setLogs((prevLogs) => [...prevLogs, ...parsedLogs]);
    }
  }, [lastJsonMessage]);

  return logs;
}