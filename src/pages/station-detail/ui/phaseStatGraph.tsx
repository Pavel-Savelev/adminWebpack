import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";
import { IPhaseData } from "../../../data/phaseData";

interface IPhaseProp {
  data: IPhaseData[];
}

const transformPhaseData = (rawData: IPhaseData[]) => {
  return rawData.map((item) => ({
    time: new Date(item.connectorA.date).toLocaleTimeString(),
    phaseA: parseFloat(item.connectorA.value),
    phaseB: parseFloat(item.connectorB.value),
    phaseC: parseFloat(item.connectorC.value),
  }));
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
            fontWeight:'600',
            fontSize:'16px',
            backgroundColor: "var(--special-content-background)",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
        }}
      >
        <p><strong>Время: </strong>{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.dataKey} style={{ color: entry.color, margin: 0 }}>
            {entry.name}: {entry.value.toFixed(2)}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

function PhaseChart({
  data,
  activePhase,
}: {
  data: IPhaseData[];
  activePhase: string | null;
}) {
  const chartData = transformPhaseData(data);

  const getOpacity = (phase: string) =>
    !activePhase || activePhase === phase ? 1 : 0.2;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 360]} />
        <Tooltip content={<CustomTooltip/>} />
        <Legend />
        <Line
          type="monotone"
          dataKey="phaseA"
          stroke="#e8fc03"
          name="Фаза A"
          strokeOpacity={getOpacity("phaseA")}
        />
        <Line
          type="monotone"
          dataKey="phaseB"
          stroke="#35fc03"
          name="Фаза B"
          strokeOpacity={getOpacity("phaseB")}
        />
        <Line
          type="monotone"
          dataKey="phaseC"
          stroke="#fc0303"
          name="Фаза C"
          strokeOpacity={getOpacity("phaseC")}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}



function PhaseStatGraph({ data }: IPhaseProp) {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <>
      <h2>График входного напряжения</h2>
      <div style={{ marginBottom: "1rem", display:'flex', gap:'20px',justifyContent:'center',width:'100%',padding:'10px 0 0 0'}}>
        <button className="options__button" onClick={() => setActivePhase(null)}>Все</button>
        <button className="options__button"  onClick={() => setActivePhase("phaseA")}>Фаза A</button>
        <button className="options__button"  onClick={() => setActivePhase("phaseB")}>Фаза B</button>
        <button  className="options__button"  onClick={() => setActivePhase("phaseC")}>Фаза C</button>
      </div>
      <PhaseChart data={data} activePhase={activePhase} />
    </>
  );
}

export default PhaseStatGraph;
