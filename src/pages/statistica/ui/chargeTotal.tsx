import { IChargerData } from "../../../types/diagram";
import DiagramCreator from "../../../components/diagramCreator";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChargerTotalProps {
  data: IChargerData[];
}

function getTotal(data: IChargerData[]): number {
  return data.reduce((sum, item) => sum + item.value, 0);
}

const WavyLineChart: React.FC<ChargerTotalProps> = ({ data }) => {
  // Преобразуем дату в строку для оси X
  const formattedData = data.map((item) => ({
    ...item,
    date: item.date.toLocaleDateString("ru-RU"),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={formattedData}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="charged"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export function ChargerTotal({ data }: ChargerTotalProps) {
  const totalChargedParam = getTotal(data);
  return (
    <div className="charger__total-container">
      <div className="charger__total-header">
        <h3>Заряжено в кВт*ч</h3>
        <span>{totalChargedParam}</span>
      </div>
      <div>
        <DiagramCreator
          title="Текущий график: "
          data={data}
          ChartComponent={WavyLineChart}
        />
      </div>
    </div>
  );
}


