interface StatsData {
    availability: number;   // или number, если это процент
    offlineTime: number;    // или number, если это миллисекунды/секунды
    onlineTime: number;
    totalTime: number;
}

interface StatsProps {
    data: StatsData;
}

function Stats({ data }: StatsProps) {
    return (
        <div className="availability__stat">
            <div className="availability__stat-item">
                <span>ДОСТУПНОСТЬ</span>
                <span>{data.availability}</span>
            </div>
            <div className="availability__stat-item">
                <span>ВРЕМЯ OFFLINE</span>
                <span>{data.offlineTime}</span>
            </div>
            <div className="availability__stat-item">
                <span>ВРЕМЯ ONLINE</span>
                <span>{data.onlineTime}</span>
            </div>
            <div className="availability__stat-item">
                <span>ОБЩЕЕ ВРЕМЯ</span>
                <span>{data.totalTime}</span>
            </div>
        </div>
    );
}

export default Stats