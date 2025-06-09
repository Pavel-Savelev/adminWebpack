import { IDataCurrentStations } from "../../../types/statisctics";

interface StatisticsProps {
  data: IDataCurrentStations;
}

function StatisticsTotal({ data }: StatisticsProps) {
  const items = [
    { label: "Станций в мониторинге:", value: data.currentMonitoring },
    { label: "Станции онлайн:", value: data.onlineStation },
    { label: "Что-то еще:", value: data.something },
    ];
    return (
    <section className="statistics-total">
        {items.map((item, index) => (
            <div key={index} className="stat-item">
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
            </div>
        ))}
        </section>
    );
}

export default StatisticsTotal;
