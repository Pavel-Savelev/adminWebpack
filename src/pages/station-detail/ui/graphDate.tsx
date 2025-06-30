  import { color } from "d3";
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

  type AvailabilityChartProps = {
    data: Event[];
    minTime: number;
    maxTime: number;
  };

  type HourlyChartItem = {
    day: string;
    hour: number; 
    onlineMinutes: number;
    offlineMinutes: number;
  };



  function AvailabilityChart({ data, minTime = 0, maxTime = 120 }: AvailabilityChartProps) {
    const cappedMaxTime = Math.min(maxTime, 120); 

    const hourlyDataMap = new Map<string, HourlyChartItem>();

    data.forEach(({ start, end, status }) => {
      const startDate = parseISO(start);
      const endDate = parseISO(end);

      const current = new Date(startDate);
      while (current < endDate) {
        const hour = current.getHours();
        const segmentHour = Math.floor(hour / 2) * 2;

        const segmentStart = new Date(current);
        segmentStart.setHours(segmentHour, 0, 0, 0);

        const segmentEnd = new Date(segmentStart);
        segmentEnd.setHours(segmentHour + 2);

        const rangeStart = current > segmentStart ? current : segmentStart;
        const rangeEnd = endDate < segmentEnd ? endDate : segmentEnd;

        const minutes = differenceInMinutes(rangeEnd, rangeStart);
        if (minutes <= 0) {
          current.setTime(segmentEnd.getTime());
          continue;
        }

        const key = `${format(segmentStart, "dd MMM yyyy")}_${segmentHour}`;
        const existing = hourlyDataMap.get(key) || {
          day: format(segmentStart, "dd MMM yyyy"),
          hour: segmentHour,
          onlineMinutes: 0,
          offlineMinutes: 0,
        };

        if (status === "Online") {
          existing.onlineMinutes += minutes;
        } else {
          existing.offlineMinutes += minutes;
        }

        hourlyDataMap.set(key, existing);
        current.setTime(rangeEnd.getTime());
      }
    });

    const hourlyData = Array.from(hourlyDataMap.values());

    return (
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={hourlyData}
          margin={{ top: 20, right: 30, left: 30, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={(d) => format(new Date(d.day), "d MMMM")}
            angle={-45}
            textAnchor="end"
            height={60}
          /><XAxis
            dataKey={(d) => `${format(new Date(d.day), "d MMM")} ${d.hour}:00–${d.hour + 2}:00`}
            angle={-45}
            textAnchor="end"
            height={80}
          />

          <YAxis
            domain={[0, cappedMaxTime]}
            tickFormatter={(m) => `${m}м`}
          />
          <Tooltip
            labelStyle={{ color: "var(--color-text)" }}
            labelFormatter={(label, payload) => {
              if (!payload || payload.length === 0) return label;
              const { day, hour } = payload[0].payload;
              const startTime = `${hour}:00`;
              const endTime = `${hour + 2}:00`;
              return (
                <span style={{ color: "var(--color-text)", fontWeight: 600 }}>
                  {format(new Date(day), "d MMMM yyyy")} {startTime}–{endTime}
                </span>
              );
            }}
            formatter={(value, name) => {
              const labelMap: Record<string, string> = {
                onlineMinutes: "Онлайн",
                offlineMinutes: "Офлайн",
              };
              return [
                <span style={{ color: "var(--color-text)" }}>{value} минут</span>,
                labelMap[name] || name,
              ];
            }}
          />

          <Bar dataKey="onlineMinutes" stackId="a" fill="var(--graph-online-color)" name="Online" />
          <Bar dataKey="offlineMinutes" stackId="a" fill="var(--graph-offline-color)" name="Offline" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default AvailabilityChart;
