import { useState, useMemo } from "react";
import TimeLineChoice from "../../../components/timeLineChoice";
import AvailabilityChart from "./graphDate";
import { parseISO, isWithinInterval, startOfDay, endOfDay, getHours, getMinutes } from "date-fns";
import { Event } from "../../../data/dataTimeAvailbl";
import Stats from "./statsAvailability";
//data
import { statsData } from "../../../data/dataTimeAvailbl";
type AvailabilityStationProps = {
  mockData: Event[];
};

function AvailabilityStation({ mockData }: AvailabilityStationProps) {
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);

  const filteredData = useMemo(() => {
    if (!dateRange) return mockData;

    const rangeStart = startOfDay(dateRange.start);
    const rangeEnd = endOfDay(dateRange.end);

    return mockData.filter(({ start, end }) => (
      isWithinInterval(parseISO(start), { start: rangeStart, end: rangeEnd }) ||
      isWithinInterval(parseISO(end), { start: rangeStart, end: rangeEnd })
    ));
  }, [mockData, dateRange]);

  const { minTime, maxTime } = useMemo(() => getTimeRange(filteredData), [filteredData]);

  return (
    <div className="availability">
      <div className="header__availability">
        <TimeLineChoice
          onDateChange={(startStr, endStr) => {
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

      <div> 
        <Stats data={statsData}></Stats>
      </div>
      <div style={{ marginTop: "2rem", width: "100%", maxWidth: "100%" }}>
        {filteredData.length === 0 ? (
          <p>Нет данных о доступности за выбранный период.</p>
        ) : (
          <AvailabilityChart data={filteredData} minTime={minTime} maxTime={maxTime} />
        )}
      </div>
    </div>
  );
}

// Функция парсинга даты из строки формата "дд/мм/гггг"
function parseDMY(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

// Перевод ISO-даты в минуты с начала дня
function getTimeInMinutes(dateStr: string) {
  const date = parseISO(dateStr);
  return getHours(date) * 60 + getMinutes(date);
}

// Определение минимального и максимального времени из массива событий
function getTimeRange(data: Event[]) {
  if (data.length === 0) return { minTime: 0, maxTime: 1440 };

  let minTime = 1440;
  let maxTime = 0;

  data.forEach(({ start, end }) => {
    const startMin = getTimeInMinutes(start);
    const endMin = getTimeInMinutes(end);
    if (startMin < minTime) minTime = startMin;
    if (endMin > maxTime) maxTime = endMin;
  });

  return {
    minTime: Math.floor(minTime / 30) * 30,
    maxTime: Math.ceil(maxTime / 30) * 30,
  };
}

export default AvailabilityStation;
