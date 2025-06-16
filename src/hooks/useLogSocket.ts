import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { ILogItems } from "../types/elecricalStation";
// import { WS_URL } from "../utils/constants";

export function useLogSocket() {
  const [logs, setLogs] = useState<ILogItems[]>([]);

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

      const normalize = (item: any): ILogItems => ({
        productNumber: parseInt(item.serial_number),
        message: item.message,
        date: item.time,
      });

      const parsedLogs: ILogItems[] = Array.isArray(raw)
        ? raw.map(normalize)
        : [normalize(raw)];

      setLogs((prevLogs) => [...prevLogs, ...parsedLogs]);
    }
  }, [lastJsonMessage]);

  return logs;
}

