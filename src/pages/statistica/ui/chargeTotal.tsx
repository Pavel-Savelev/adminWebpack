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

const WavyLineChart: React.FC<{
  data: IChargerData[];
  activeItem?: string;
}> = ({ data, activeItem }) => {
  console.log("📈 WavyLineChart data:", data);

  const formattedData = data.map((item) => {
    const dateObj = new Date(item.date);
    return {
      ...item,
      date: dateObj.toLocaleDateString("ru-RU"),
      charged: item.value,
      time: dateObj.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={formattedData}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          contentStyle={{
              width: '160px',
              height: '80px',
              fontSize: '14px',
              padding:'16px 10px',
              border:'3px solid #ccc',
              borderRadius:'5px'
            }}
          formatter={(value: number, name: string, props: any) => [`${value} кВт*ч`, 'Зарядка']}
          labelFormatter={(label: string, payload: any) => {
            const time = payload?.[0]?.payload?.time;
            return `${label} ${time ? `в ${time}` : ''}`;
  }}
/>
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
  console.log("🔌 ChargerTotal data:", data);
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
