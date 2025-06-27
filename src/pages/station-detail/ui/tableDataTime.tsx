import React from "react";
import { Event } from "../../../data/dataTimeAvailbl";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function getDuration(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffMs = endDate.getTime() - startDate.getTime();
  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
}

const EventTable: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <table className="time__period">
      <tbody className="custom-tbody">
        <tr className='time__period__head'>
          <th>Начало</th>
          <th>Окончание</th>
          <th>Длительность</th>
          <th>Доступность</th>
        </tr>
        <tr>
          <td colSpan={4}><div className="full-width-line" /></td>
        </tr>
        {events.map((event, idx) => (
          <React.Fragment key={idx}>
            <tr className="time__period__list">
              <td>{`${formatDate(event.start)} ${formatTime(event.start)}`}</td>
              <td>{`${formatDate(event.end)} ${formatTime(event.end)}`}</td>
              <td>{getDuration(event.start, event.end)}</td>
              <td className={event.status === "Online" ? "online" : "offline"}>
                {event.status}
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <div className="full-width-line" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
