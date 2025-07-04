import React, { useState } from "react";

export interface ConnectorInfo {
  conectorName: string;
  completedValue: string;
  outstandingValue: string;
  exists: boolean;
}

export interface Session {
  id: string;
  productNumber: string;
  connectors: ConnectorInfo[];
}

const sessionStatistica: Session[] = [
  {
    id: "111",
    productNumber: "12312",
    connectors: [
      {
        conectorName: "Type 2",
        completedValue: "80",
        outstandingValue: "20",
        exists: true,
      },
    ],
  },
  {
    id: "111",
    productNumber: "1112",
    connectors: [
      {
        conectorName: "CCS",
        completedValue: "60",
        outstandingValue: "40",
        exists: true,
      },
    ],
  },
];

const connectorTypes = ["CCS", "Chademo", "Type 2", "GBT"];

function SessionStatistica() {
  const [data] = useState<Session[]>(sessionStatistica);

  const getConnectorValue = (
    connectors: ConnectorInfo[],
    type: string
  ): string => {
    const found = connectors.find((c) => c.conectorName.toLowerCase() === type.toLowerCase());
    return found ? `${found.completedValue} / ${found.outstandingValue}` : "—";
  };

  const getTotal = (connectors: ConnectorInfo[]): string => {
    let completed = 0;
    let outstanding = 0;
    connectors.forEach((c) => {
      completed += Number(c.completedValue);
      outstanding += Number(c.outstandingValue);
    });
    return `${completed} / ${outstanding}`;
  };

  return (
    <div className="session-table p-4">
      <table className="table-auto w-full text-sm border border-gray-400 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 text-left">Станция</th>
            {connectorTypes.map((type) => (
              <th key={type} className="border px-2 py-1 text-left">{type}</th>
            ))}
            <th className="border px-2 py-1 text-left">Общее</th>
          </tr>
        </thead>
        <tbody>
          {data.map((session) => (
            <tr key={session.id} className="border-b border-gray-300">
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
