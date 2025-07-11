import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeLineChoice from "../../../components/timeLineChoice";

type SessionStatus = 'completed' | 'failed';

interface ChargingSession {
  id: string;
  startTime: Date;
  endTime: Date | null;
  status: SessionStatus;
  energyDelivered?: number;
}

interface Connector {
  name: string;
  currentSession: ChargingSession | null;
  sessionsHistory: ChargingSession[];
}

interface Product {
  id: string;
  productNumber: string;
  connectors: Connector[];

}

const chargingStationsDB: Product[] = [
  {
    id: "123",
    productNumber: "vupsen",
    connectors: [
      {
        name: "Type 2",
        currentSession: {
          id: "sess-001",
          startTime: new Date("2023-05-16T13:15:00"),
          endTime: null,
          status: "completed",
          energyDelivered: 12.4
        },
        sessionsHistory: [
          {
            id: "sess-000",
            startTime: new Date("2023-05-16T10:00:00"),
            endTime: new Date("2023-05-16T11:30:00"),
            status: "completed",
            energyDelivered: 24.5
          },
          {
            id: "sess-002",
            startTime: new Date("2023-05-15T18:00:00"),
            endTime: new Date("2023-05-15T18:05:00"),
            status: "failed"
          }
        ]
      }
    ]
  },
  {
    id: "124",
    productNumber: "pupsen",

    connectors: [
      {
        name: "CCS",
        currentSession: null,
        sessionsHistory: [
          {
            id: "sess-003",
            startTime: new Date("2023-05-16T08:00:00"),
            endTime: new Date("2023-05-16T10:00:00"),
            status: "completed",
            energyDelivered: 50.0
          },
          {
            id: "sess-031",
            startTime: new Date("2024-05-16T08:00:00"),
            endTime: new Date("2024-05-16T10:00:00"),
            status: "completed",
            energyDelivered: 50.0
          },
          {
            id: "sess-032",
            startTime: new Date("2025-05-16T08:00:00"),
            endTime: new Date("2025-05-16T10:00:00"),
            status: "completed",
            energyDelivered: 50.0
          },
          {
            id: "sess-033",
            startTime: new Date("2025-05-16T08:05:00"),
            endTime: new Date("2025-05-16T10:10:00"),
            status: "completed",
            energyDelivered: 50.0
          },
        ]
      },
      {
        name: "Chademo",
        currentSession: {
          id: "sess-004",
          startTime: new Date("2023-05-16T12:00:00"),
          endTime: null,
          status: "completed"
        },
        sessionsHistory: []
      }
    ]
  },
  {
    id: "125",
    productNumber: "12345",

    connectors: [
      {
        name: "GBT",
        currentSession: null,
        sessionsHistory: [
          {
            id: "sess-005",
            startTime: new Date("2023-05-16T07:00:00"),
            endTime: new Date("2023-05-16T07:45:00"),
            status: "failed"
          },
          {
            id: "sess-006",
            startTime: new Date("2023-05-15T16:00:00"),
            endTime: new Date("2023-05-15T18:30:00"),
            status: "completed",
            energyDelivered: 65.2
          }
        ]
      }
    ]
  }
];

const connectorTypes = ["CCS", "Chademo", "Type 2", "GBT", "Type 1"];
const percentPerColumn = 100 / (connectorTypes.length + 2);

function SessionStatistica() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);
  const [stationFilter, setStationFilter] = useState<string>("");

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };



  const navigate = useNavigate();

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

  const parsedStart = startDate
    ? new Date(...(startDate.split("/").reverse().map((n, i) => i === 1 ? Number(n) - 1 : Number(n)) as [number, number, number]))
    : null;

  const parsedEnd = endDate
    ? new Date(...(endDate.split("/").reverse().map((n, i) => i === 1 ? Number(n) - 1 : Number(n)) as [number, number, number]))
    : null;


  if (parsedEnd) {
    parsedEnd.setHours(23, 59, 59, 999);
  }


  const getCounts = (
    connectors: Connector[],
    type?: string,
    start?: Date | null,
    end?: Date | null
  ) => {
    let completed = 0;
    let failed = 0;

    connectors.forEach((connector) => {
      if (type && connector.name.toLowerCase() !== type.toLowerCase()) return;

      const allSessions: ChargingSession[] = [
        ...(connector.sessionsHistory || []),
        ...(connector.currentSession ? [connector.currentSession] : []),
      ];

      allSessions.forEach((session) => {
        const sessionStart = new Date(session.startTime);
        if (
          (start && sessionStart < start) ||
          (end && sessionStart > end)
        ) {
          return;
        }

        if (session.status === "completed") completed++;
        if (session.status === "failed") failed++;
      });
    });

    return { completed, failed };
  };


  const getConnectorValue = (connectors: Connector[], type: string): string => {
    const { completed, failed } = getCounts(connectors, type, parsedStart, parsedEnd);
    const total = completed + failed;
    if (total === 0) return "—";
    const percent = Math.round((completed / total) * 100);
    return `${completed} / ${failed} (${percent}%)`;
  };

  const getTotalValue = (connectors: Connector[]): string => {
    const { completed, failed } = getCounts(connectors, undefined, parsedStart, parsedEnd);
    const total = completed + failed;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    return `${completed} / ${failed} (${percent}%)`;
  };

  const getSortValue = (product: Product): number => {
    if (sortColumn === "Общее") {
      const { completed, failed } = getCounts(product.connectors, undefined, parsedStart, parsedEnd);
      const total = completed + failed;
      return total ? completed / total : -1;
    } else if (connectorTypes.includes(sortColumn!)) {
      const { completed, failed } = getCounts(product.connectors, sortColumn!, parsedStart, parsedEnd);
      const total = completed + failed;
      return total ? completed / total : -1;
    }
    return -1;
  };

  const filteredData = chargingStationsDB
    .filter((station) => {
      const matchesFilter = station.productNumber
        .toLowerCase()
        .includes(stationFilter.toLowerCase());

      if (!parsedStart || !parsedEnd) return matchesFilter;

      const inDateRange = station.connectors.some((connector) =>
        [...connector.sessionsHistory, connector.currentSession]
          .filter((s): s is ChargingSession => Boolean(s))
          .some((session) => {
            const sessionStart = new Date(session.startTime);
            return sessionStart >= parsedStart && sessionStart <= parsedEnd;
          })
      );

      return matchesFilter && inDateRange;
    });




  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortDirection || !sortColumn) return 0;
    const aValue = getSortValue(a);
    const bValue = getSortValue(b);
    if (aValue === -1 && bValue === -1) return 0;
    if (aValue === -1) return 1;
    if (bValue === -1) return -1;

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="p-4">
      <TimeLineChoice onDateChange={handleDateChange} onReset={handleReset} />

      <table className="table-auto w-full text-sm border border-gray-400 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="border px-2 py-1 text-left"
              style={{ width: `${percentPerColumn}%` }}
            >
              Станция
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
          {sortedData.map((filteredData) => (
            <tr
              key={filteredData.id}
              className="border-b border-gray-300 cursor-pointer"
              onClick={() => navigate(`/station/${filteredData.id}`)}
            >
              <td className="border px-2 py-1">{filteredData.productNumber}</td>
              {connectorTypes.map((type) => (
                <td key={type} className="border px-2 py-1">
                  {getConnectorValue(filteredData.connectors, type)}
                </td>
              ))}
              <td className="border px-2 py-1">
                {getTotalValue(filteredData.connectors)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SessionStatistica;
