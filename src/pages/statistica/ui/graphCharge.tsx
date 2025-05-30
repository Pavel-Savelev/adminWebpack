import TimeLineChoice from "./timeLineChoice";
import DiagramCreator from "../../../components/diagramCreator";
import React from "react";
import { IChargerData } from "../../../types/diagram";

const ParentComponent = ({ data }: { data: IChargerData[] }) => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleDateChange = (startStr: string, endStr: string) => {
    const [sd, sm, sy] = startStr.split("/").map(Number);
    const [ed, em, ey] = endStr.split("/").map(Number);
    setStartDate(new Date(sy, sm - 1, sd));
    setEndDate(new Date(ey, em - 1, ed, 23, 59, 59, 999));
  };

  const filteredData = data.filter((item) => {
    if (!startDate || !endDate) return true;
    const date = new Date(item.date);
    return date >= startDate && date <= endDate;
  });

  return (
    <div>
      <TimeLineChoice onDateChange={handleDateChange} />
      <DiagramCreator title="Статистика" data={filteredData} />
    </div>
  );
};

export default ParentComponent