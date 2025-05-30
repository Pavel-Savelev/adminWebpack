import React, { useEffect, useState } from "react";
import LinePlot from "./graph"; // по умолчанию
import { DiagramDataPoint } from "../types/diagram.jsx";

interface DiagramCreatorProps {
  title: string;
  data: DiagramDataPoint[];
  type?: string;
  ChartComponent?: React.ComponentType<{ data: any[] }>; // ⬅ сюда можно передать другой график
}

type Period = "Day" | "Week" | "Month" | "Year";

function ButtonDiagramCreator({
  activeItem,
  setActiveItem,
  onFilter,
}: {
  activeItem: string;
  setActiveItem: (value: Period) => void;
  onFilter: (value: Period) => void;
}) {
  const dataMenu: Period[] = ["Day", "Week", "Month", "Year"];
  return (
    <div className="menuTime">
      {dataMenu.map((time) => (
        <div
          key={time}
          className={`menuTime-item ${activeItem === time ? "active" : ""}`}
          onClick={() => {
            setActiveItem(time);
            onFilter(time);
          }}
        >
          <button className="button time-button">{time}</button>
        </div>
      ))}
    </div>
  );
}

const DiagramCreator: React.FC<DiagramCreatorProps> = ({
  title,
  data,
  ChartComponent,
}) => {
  const [filteredData, setFilteredData] = useState<DiagramDataPoint[]>([]);
  const [activeItem, setActiveItem] = useState<Period>("Month");

  const filterData = (period: Period) => {
    const now = new Date();
    let filtered: DiagramDataPoint[] = [];

    switch (period) {
      case "Day":
        filtered = data.filter((d) => {
          const date = new Date(d.date);
          return date.toDateString() === now.toDateString();
        });
        break;

      case "Week":
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        filtered = data.filter((d) => {
          const date = new Date(d.date);
          return date >= startOfWeek && date <= endOfWeek;
        });
        break;

      case "Month":
        filtered = data.filter((d) => {
          const date = new Date(d.date);
          return (
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
          );
        });
        break;

      case "Year":
        const yearData = data.filter((d) => {
          const date = new Date(d.date);
          return date.getFullYear() === now.getFullYear();
        });

        const grouped = new Map<string, number[]>();
        yearData.forEach((d) => {
          const date = new Date(d.date);
          const key = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}`;
          if (!grouped.has(key)) grouped.set(key, []);
          grouped.get(key)!.push(d.value);
        });

        filtered = Array.from(grouped.entries()).map(([month, values]) => ({
          date: new Date(`${month}-01T00:00:00`),
          value: values.reduce((a, b) => a + b, 0) / values.length,
        }));
        break;

        default:
          filtered = data;
          break;
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
  filterData(activeItem);
  }, [data, activeItem]);


  const Chart = ChartComponent ?? LinePlot;

  return (
    <div className="diagram">
      <div className="diagram-content">
        <h3>{title}</h3>
        <ButtonDiagramCreator
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          onFilter={filterData}
        />
      </div>
      <div className="diagram-placeholder">
        <Chart data={filteredData} activeItem={activeItem} />
      </div>
    </div>
  );
};

export default DiagramCreator;
