import React, { useState } from "react";

export interface Session {
  id: string;
  connector: string;
  start: string;
  end: string;
  consumption: number;
  startPercent: number;
  power: number;
  maxPower: number;
  endReason: string;
  status: string;
}

export const dataSession: Session[] = [
  {
    id: "111",
    connector: "Type 1",
    start: "2025-06-01T08:00",
    end: "2025-06-01T09:00",
    consumption: 12.5,
    startPercent: 80,
    power: 22,
    maxPower: 30,
    endReason: "Local",
    status: "Завершена",
  },
  {
    id: "112",
    connector: "Type 2",
    start: "2025-06-01T10:00",
    end: "2025-06-01T11:30",
    consumption: 15.2,
    startPercent: 75,
    power: 25,
    maxPower: 32,
    endReason: "Local",
    status: "Завершена",
  },
  {
    id: "123",
    connector: "Chademo",
    start: "2025-06-02T07:30",
    end: "2025-06-02T08:45",
    consumption: 8.7,
    startPercent: 90,
    power: 18,
    maxPower: 28,
    endReason: "Remote",
    status: "Завершена",
  },
  {
    id: "345",
    connector: "GBT",
    start: "2025-06-02T07:30",
    end: "2025-06-02T08:45",
    consumption: 8.7,
    startPercent: 90,
    power: 18,
    maxPower: 28,
    endReason: "Remote",
    status: "В процессе",
  },
];

const connectors = Array.from(new Set(dataSession.map((s) => s.connector)));
const statuses = Array.from(new Set(dataSession.map((s) => s.status)));
const reasons = Array.from(new Set(dataSession.map((s) => s.endReason)));

function SessionTable() {
  const [data, setData] = useState(dataSession);
  const [filters, setFilters] = useState({
    connector: "",
    start: "",
    end: "",
    status: "",
    reasonOfFinish: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    id: string,
    field: keyof Session
  ) => {
    const newData = data.map((row) =>
      row.id === id ? { ...row, [field]: e.target.value } : row
    );
    setData(newData);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof typeof filters
  ) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const filteredData = data.filter((row) => {
    return (
      row.connector.toLowerCase().includes(filters.connector.toLowerCase()) &&
      row.start.toLowerCase().includes(filters.start.toLowerCase()) &&
      row.end.toLowerCase().includes(filters.end.toLowerCase()) &&
      row.status.toLowerCase().includes(filters.status.toLowerCase()) &&
      row.endReason.toLowerCase().includes(filters.reasonOfFinish.toLowerCase())
    );
  });

  return (
    <div className="session-table p-4">
      <table className="table-auto w-full text-sm border border-gray-400 border-collapse">

        <thead className="bg-gray-100">
          <tr>
            <th className="col-connector border px-2 py-1 text-left ">
              Connector
              <select
                name="connector"
                value={filters.connector}
                onChange={(e) => handleFilterChange(e, "connector")}
                className="w-full border p-1 mt-1"
              >
                <option value="">Все</option>
                {connectors.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </th>
            <th className="full-width-line "></th>
            <th className="col-start border px-2 py-1 text-left">
              Start
              <input
                type="text"
                value={filters.start}
                onChange={(e) => handleFilterChange(e, "start")}
                className="w-full border p-1 mt-1"
              />
            </th>
            <th className="col-end border px-2 py-1 text-left">
              End
              <input
                type="text"
                value={filters.end}
                onChange={(e) => handleFilterChange(e, "end")}
                className="w-full border p-1 mt-1"
              />
            </th>
            <th className="col-consumption border px-2 py-1 text-left">
              Потребление кВ*ч
              <input
                type="text"
                value={filters.start}
                className="input-hidden"
              />
            </th>
            <th className="col-startPercent border px-2 py-1 text-left">% Старта
              <input
                type="text"
                value={filters.start}
                className="input-hidden"
              />
            </th>
            <th className="col-power border px-2 py-1 text-left">% Заряда
              <input
                type="text"
                value={filters.start}
                className="input-hidden"
              />
            </th>
            <th className="col-currentPower border px-2 py-1 text-left">Текущая мощность
              <input
                type="text"
                value={filters.start}
                className="input-hidden"
              />
            </th>
            <th className="col-maxPower border px-2 py-1 text-left">Максимальная мощность
              <input
                type="text"
                value={filters.start}
                className="input-hidden"
              />
            </th>
            <th className="col-endReason border px-2 py-1 text-left">
              Причина завершения
              <select
                name="reason"
                value={filters.reasonOfFinish}
                onChange={(e) => handleFilterChange(e, "reasonOfFinish")}
                className="w-full border p-1 mt-1"
              >
                <option value="">Все</option>
                {reasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </th>
            <th className="col-status border px-2 py-1 text-left">
              Статус
              <select
                name="status"
                value={filters.status}
                onChange={(e) => handleFilterChange(e, "status")}
                className="w-full border p-1 mt-1"
              >
                <option value="">Все</option>
                {statuses.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
  {filteredData.map((row) => (
    <tr key={row.id} className="border-b border-gray-300">
      <td className="col-connector border px-2 py-1 text-right">{row.connector}</td>
      <td className="col-start border px-2 py-1 text-right">{row.start}</td>
      <td className="col-end border px-2 py-1 text-right">{row.end}</td>
      <td className="col-consumption border px-2 py-1 text-right">
        {row.consumption} кВ*ч
      </td>
      <td className="col-startPercent border px-2 py-1 text-right">
        {row.startPercent}%
      </td>
      <td className="col-power border px-2 py-1 text-right">{row.power} %</td>
      <td className="col-currentPower border px-2 py-1 text-right">
        {row.maxPower} кВ*т
      </td>
      <td className="col-maxPower border px-2 py-1 text-right">
        {row.maxPower} кВ*т
      </td>
      <td className="col-endReason border px-2 py-1 text-right">{row.endReason}</td>
      <td className="col-status border px-2 py-1 text-right">{row.status}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default SessionTable;
