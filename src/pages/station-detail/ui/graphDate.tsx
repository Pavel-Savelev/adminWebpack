import { parseISO, format, differenceInMinutes } from "date-fns";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

type Event = {
  start: string;
  end: string;
  status: "Online" | "Offline";
};

type ChartItem = {
  day: string;
  startMinutes: number;
  duration: number;
  status: "Online" | "Offline";
  start: string;
  end: string;
};

type AvailabilityChartProps = {
  data: Event[];
  minTime: number;
  maxTime: number;
};

function AvailabilityChart({ data, minTime = 0, maxTime = 60 }: AvailabilityChartProps) {
  const cappedMaxTime = Math.min(maxTime, 60);

  const parsed: ChartItem[] = [];

  data.forEach(({ start, end, status }) => {
    const startDate = parseISO(start);
    const endDate = parseISO(end);

    const day = format(startDate, "dd MMM yyyy");
    const startMinutes = startDate.getHours() * 60 + startDate.getMinutes();
    const duration = differenceInMinutes(endDate, startDate);

    parsed.push({ day, startMinutes, duration, status, start, end });
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="horizontal"
        data={parsed}
        margin={{ top: 20, right: 30, left: 30, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          type="number"
          domain={[minTime, cappedMaxTime]}
          tickFormatter={(m) => `${Math.floor(m / 60)}ч`}
        />

        <Tooltip
          content={({ active, payload }) => {
            if (!active || !payload || !payload.length) return null;

            const d = payload[0].payload;
            const online = d.status === "Online" ? d.duration : 0;
            const offline = d.status === "Offline" ? d.duration : 0;

            return (
              <div
                style={{ background: "var(--special-content-background)", border: "none",color:"var(--color-text)",padding:"0",fontSize: "15px",fontWeight: 400  }}
              >
                <p>Начало: {format(parseISO(d.start), "dd.MM.yyyy, HH:mm:ss")}</p>
                <p>Конец: {format(parseISO(d.end), "dd.MM.yyyy, HH:mm:ss")}</p>
                <hr />
                <p>
                  Online:{" "}
                  {online ? `${Math.floor(online / 60)}ч ${online % 60}м` : "0 сек"}
                </p>
                <p>
                  Offline:{" "}
                  {offline ? `${Math.floor(offline / 60)}ч ${offline % 60}м` : "0 сек"}
                </p>
              </div>
            );
          }}
        />
        <Bar dataKey="duration" isAnimationActive={false} fill="var(--graph-color)" />
      </BarChart>
    </ResponsiveContainer>
  );
}


export default AvailabilityChart;
