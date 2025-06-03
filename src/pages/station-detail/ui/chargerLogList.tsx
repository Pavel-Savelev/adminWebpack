import CreateLogItemStation from "./chargerLogItem";
import { IElectricalStation, ILogItems } from "../../../types/elecricalStation";
import React, { useRef, useEffect } from "react";

export interface ILogItemStationProps {
  station: IElectricalStation;
  logs: ILogItems[];
}

function CreateLogList({ station, logs }: ILogItemStationProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
  const listEl = listRef.current;
  if (!listEl) return;

  const isAtBottom =
  listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 5;


  if (isAtBottom) {
    listEl.scrollTop = listEl.scrollHeight;
  }
}, [logs]);

  return (
    <>
      <ul className="body_log_list" ref={listRef}>
        {logs.slice().reverse().map((log) => (
          <CreateLogItemStation
            key={`${log.date}-${log.message}-${log.productNumber}`}
            log={log}
          />
        ))}
      </ul>
    </>
  );
}

export default CreateLogList;
