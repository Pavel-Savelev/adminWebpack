import React from "react";
import { ILogItems } from "../../../types/elecricalStation";
import { products } from "../../../data/stations";

interface Props {
  logs: ILogItems[];
}

const LogsList: React.FC<Props> = ({ logs }) => {
  // Теперь stations — это products.list
  const stations = products.list;

  const getStationName = (productNumber: number) => {
    const station = stations.find((s) => s.productNumber === productNumber);
    return station ? station.nameOfApp : "Неизвестная станция";
  };

  return (
    <div className="logs-list">
      
      {logs.map((log, idx) => (
        <button>
          <div
            key={idx}
            className="log-item"
            style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
          >
            <div>
              <a>Станция:</a> {getStationName(log.productNumber)}
            </div>
            <div>
              <a>Дата:</a> {log.date}
            </div>
            <div>
              <a>Сообщение:</a> {log.message}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LogsList;
