import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export interface ConnectorInfo {
  conectorName: string;
  completedValue: string;
  outstandingValue: string;
}

export interface Session {
  id: string;
  productNumber: string;
  connectors: ConnectorInfo[];
}

const sessionStatistica: Session[] = [
  {
    id: "123",
    productNumber: "123",
    connectors: [
      { conectorName: "Type 2", completedValue: "80", outstandingValue: "20" },
    ],
  },
  {
    id: "12345643463",
    productNumber: "222",
    connectors: [
      { conectorName: "CCS", completedValue: "60", outstandingValue: "40" },
    ],
  },
  {
    id: "12345623435647568",
    productNumber: "111",
    connectors: [
      { conectorName: "CCS", completedValue: "60", outstandingValue: "80" },
      { conectorName: "GBT", completedValue: "20", outstandingValue: "40" },
      { conectorName: "Type 2", completedValue: "0", outstandingValue: "20" },
    ],
  },
  {
    id: "efefewfa1231231dwd",
    productNumber: "111",
    connectors: [
      { conectorName: "Chademo", completedValue: "60", outstandingValue: "80" },
      { conectorName: "GBT", completedValue: "20", outstandingValue: "40" },
      { conectorName: "Type 2", completedValue: "0", outstandingValue: "20" },
    ],
  },
  {
    id: "123456334568765",
    productNumber: "222",
    connectors: [
      { conectorName: "Type 2", completedValue: "80", outstandingValue: "20" },
    ],
  },
  {
    id: "123456324567543265",
    productNumber: "333",
    connectors: [
      { conectorName: "Chademo", completedValue: "2", outstandingValue: "80" },
    ],
  },
  {
    id: "123456325346o9876",
    productNumber: "1235",
    connectors: [
      { conectorName: "Chademo", completedValue: "60", outstandingValue: "80" },
      { conectorName: "GBT", completedValue: "20", outstandingValue: "40" },
      { conectorName: "Type 2", completedValue: "0", outstandingValue: "20" },
    ],
  },
  {
    id: "1234560021",
    productNumber: "1235",
    connectors: [
      { conectorName: "Chademo", completedValue: "60", outstandingValue: "80" },
      { conectorName: "GBT", completedValue: "20", outstandingValue: "40" },
      { conectorName: "Type 2", completedValue: "0", outstandingValue: "20" },
    ],
  },
  {
    id: "123456354365879785453",
    productNumber: "1255",
    connectors: [
      { conectorName: "Chademo", completedValue: "60", outstandingValue: "80" },
      { conectorName: "GBT", completedValue: "20", outstandingValue: "40" },
      { conectorName: "Type 2", completedValue: "0", outstandingValue: "20" },
    ],
  },
];

const connectorTypes = ["CCS", "Chademo", "Type 2", "GBT", "Type 1"];
const percentPerColumn = 100 / (connectorTypes.length + 2);

function SessionStatistica() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);
  const [stationFilter, setStationFilter] = useState<string>("");

  const navigate = useNavigate();

  const handleClick = (session: Session) => {
    navigate(`/station/${session.id}`, {
      state: { station: session },
    });
  };


  const toggleSort = (column: string) => {
    if (sortColumn !== column) {
      setSortColumn(column);
      setSortDirection("asc");
    } else {
      setSortDirection((prev) =>
        prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
      );
    }
  };

  const getCompletionPercent = (connectors: ConnectorInfo[]): number => {
    let completed = 0;
    let outstanding = 0;

    connectors.forEach((c) => {
      completed += Number(c.completedValue);
      outstanding += Number(c.outstandingValue);
    });

    const total = completed + outstanding;
    return total > 0 ? (completed / total) * 100 : 0;
  };

  const getConnectorPercent = (connectors: ConnectorInfo[], type: string): number => {
    const found = connectors.find(
      (c) => c.conectorName.toLowerCase() === type.toLowerCase()
    );
    if (!found) return -1;

    const completed = Number(found.completedValue);
    const outstanding = Number(found.outstandingValue);
    const total = completed + outstanding;
    return total > 0 ? (completed / total) * 100 : 0;
  };

  const getConnectorValue = (
    connectors: ConnectorInfo[],
    type: string
  ): string => {
    const found = connectors.find(
      (c) => c.conectorName.toLowerCase() === type.toLowerCase()
    );
    if (!found) return "—";

    const completed = Number(found.completedValue);
    const outstanding = Number(found.outstandingValue);
    const total = completed + outstanding;
    const percentCompleted = total > 0 ? (completed / total) * 100 : 0;
    const roundedPercent = Math.round(percentCompleted);
    return `${completed} / ${outstanding} (${roundedPercent}%)`;
  };

  const getTotal = (connectors: ConnectorInfo[]): string => {
    let completed = 0;
    let outstanding = 0;

    connectors.forEach((c) => {
      completed += Number(c.completedValue);
      outstanding += Number(c.outstandingValue);
    });

    const total = completed + outstanding;
    const percentCompleted = total > 0 ? Math.round((completed / total) * 100) : 0;

    return `${completed} / ${outstanding} (${percentCompleted}%)`;
  };

  const filteredData = sessionStatistica.filter((s) =>
    s.productNumber.toLowerCase().includes(stationFilter.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {

    if (!sortDirection || !sortColumn) return 0;

    let aValue = 0;
    let bValue = 0;

    if (sortColumn === "Общее") {
      aValue = getCompletionPercent(a.connectors);
      bValue = getCompletionPercent(b.connectors);
    } else if (connectorTypes.includes(sortColumn)) {
      aValue = getConnectorPercent(a.connectors, sortColumn);
      bValue = getConnectorPercent(b.connectors, sortColumn);
    } else {
      return 0;
    }

    if (aValue === -1) return 1;
    if (bValue === -1) return -1;

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="p-4">
      <table className="table-auto w-full text-sm border border-gray-400 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="border px-2 py-1 text-left"
              style={{ width: `${percentPerColumn}%` }}
            >Станция
               <input
                type="text"
                placeholder="Введите станцию"
                className="mt-1 block w-full text-sm border border-gray-300 rounded px-1"
                value={stationFilter}
                onChange={(e) => setStationFilter(e.target.value)}
              />
            </th>
            {connectorTypes.map((type) => (
              <th
                key={type}
                className="border px-2 py-1 text-left cursor-pointer"
                style={{ width: `${percentPerColumn}%` }}
                onClick={() => toggleSort(type)}
              >
                {type}{" "}
                {sortColumn === type
                  ? sortDirection === "asc"
                    ? "↑"
                    : sortDirection === "desc"
                    ? "↓"
                    : ""
                  : ""}
              </th>
            ))}
            <th
              className="border px-2 py-1 text-left cursor-pointer"
              style={{ width: `${percentPerColumn}%` }}
              onClick={() => toggleSort("Общее")}
            >
              Общее{" "}
              {sortColumn === "Общее"
                ? sortDirection === "asc"
                  ? "↑"
                  : sortDirection === "desc"
                  ? "↓"
                  : ""
                : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((session) => (
            <tr
              key={session.id}
              className="border-b border-gray-300 cursor-pointer"
              onClick={() => navigate(`/station/${session.id}`)}
            >
              <td className="border px-2 py-1">{session.productNumber}</td>
              {connectorTypes.map((type) => (
                <td key={type} className="border px-2 py-1">
                  {getConnectorValue(session.connectors, type)}
                </td>
              ))}
              <td className="border px-2 py-1">{getTotal(session.connectors)}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default SessionStatistica;

// не работает навигация при нажатии на разные кнопки но ведут в одно место
//скорее всего потому что рендерится по данным 

