import React from "react";
import { IChargerStatType } from "../../../types/statisctics";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { TooltipProps } from "recharts";
import { parseDDMMYYYY } from "./dateUtil";

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload; 

    const itemDate = new Date(item.date);
    const formattedDate = `${String(itemDate.getDate()).padStart(2, '0')}/${String(itemDate.getMonth() + 1).padStart(2, '0')}/${itemDate.getFullYear()}`;


    return (
      <div className="custom-tooltip p-2 bg-white border border-gray-300 rounded shadow text-sm">
        <p className="font-semibold">Станция: {label}</p>
        <p>Количество: {item.count}</p>
        <p>Дата: {formattedDate}</p>
      </div>
    );
  }

  return null;
};


// где лучше прописать пропс интерфейс??
interface Props {
  data: IChargerStatType[];
  sliderValue:number;
  startDate: string;
  endDate: string;
}

const BarChartComponent: React.FC<Props> = ({ data, sliderValue, startDate, endDate }) => {
  const start = parseDDMMYYYY(startDate)?.getTime() ?? -Infinity;
  const end = parseDDMMYYYY(endDate)?.getTime() ?? Infinity;

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date).getTime();
    return itemDate >= start && itemDate <= end;
  });

  const sortedData = filteredData.sort((a, b) => b.count - a.count).slice(0, sliderValue);

  return (
  <div className="chart-wrapper">
    {sortedData.length > 0 ? (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={sortedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="chargerNameNumber" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" fill="#007db3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    ) : (
      <p className="no-data">Нет данных за выбранный период</p>
    )}
  </div>
);

};


    export default BarChartComponent;
