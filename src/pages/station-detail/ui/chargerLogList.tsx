import CreateDataItemStation from "./chargerLogItem";
import { IDataStation } from "../../../types/elecricalStation";
import React, { useRef, useEffect } from "react";

export interface IDataStationProps {
  data: IDataStation[];
  isLoading?: boolean;
  error?: string | null;
  emptyMessage?: string;
}

function CreateDataList({ data, isLoading = false, error = null, emptyMessage = "Нет данных" }: IDataStationProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;

    const isAtBottom = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 5;
    if (isAtBottom) {
      listEl.scrollTop = listEl.scrollHeight;
    }
  }, [data]);

  if (isLoading) {
    return <div className="loading-message">Загрузка...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="empty-message">{emptyMessage}</div>;
  }

  return (
    <ul className="body_log_list" ref={listRef}>
      {data.slice().reverse().map((item) => (
        <CreateDataItemStation
          key={`${item.date}-${item.message}-${item.productNumber}`}
          data={item}
        />
      ))}
    </ul>
  );
}

export default CreateDataList;