import { useState } from "react";
import TimeLineChoice from "../../../components/timeLineChoice";
import AvailabilityChart from "./graphDate";
import { parseISO, isWithinInterval } from "date-fns";
import { getHours, getMinutes } from "date-fns";
import { startOfDay, endOfDay } from "date-fns";
import { mockData } from "../../../data/dataTimeAvailbl";
import { Event } from "../../../data/dataTimeAvailbl";

function AvailabilityStation() {
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(
    null
  );

  const filteredData = dateRange
    ? mockData.filter(({ start, end }) => {
        const rangeStart = startOfDay(dateRange.start);
        const rangeEnd = endOfDay(dateRange.end);
        return (
          isWithinInterval(parseISO(start), {
            start: rangeStart,
            end: rangeEnd,
          }) ||
          isWithinInterval(parseISO(end), { start: rangeStart, end: rangeEnd })
        );
      })
    : mockData;

  const { minTime, maxTime } = getTimeRange(filteredData);

  return (
    <div className="availability">
      <div className="header__availability">
        <TimeLineChoice
          onDateChange={(startStr, endStr) => {
            const parseDMY = (dateStr: string) => {
              const [day, month, year] = dateStr.split("/").map(Number);
              return new Date(year, month - 1, day);
            };

            if (!startStr || !endStr) {
              setDateRange(null);
              return;
            }

            const start = parseDMY(startStr);
            const end = parseDMY(endStr);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
              setDateRange(null);
              return;
            }

            setDateRange({ start, end });
          }}
          onReset={() => setDateRange(null)}
        />
      </div>

      <div style={{ marginTop: "2rem", width: "100%", maxWidth: "100%" }}>
        <AvailabilityChart
          data={filteredData}
          minTime={minTime}
          maxTime={maxTime}
        />
      </div>
    </div>
  );
}

function getTimeInMinutes(dateStr: string) {
  const date = parseISO(dateStr);
  return getHours(date) * 60 + getMinutes(date);
}

function getTimeRange(data: Event[]) {
  if (data.length === 0) {
    return { minTime: 0, maxTime: 1440 };
  }

  let minTime = 24 * 60;
  let maxTime = 0;

  data.forEach(({ start, end }) => {
    const startMinutes = getTimeInMinutes(start);
    const endMinutes = getTimeInMinutes(end);
    if (startMinutes < minTime) minTime = startMinutes;
    if (endMinutes > maxTime) maxTime = endMinutes;
  });

  minTime = Math.floor(minTime / 30) * 30;
  maxTime = Math.ceil(maxTime / 30) * 30;

  return { minTime, maxTime };
}

export default AvailabilityStation;
