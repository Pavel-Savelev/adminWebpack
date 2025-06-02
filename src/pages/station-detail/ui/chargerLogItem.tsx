import { ILogItemStationProps } from "./chargerLogList"

function CreateLogItemStation({ station }: ILogItemStationProps) {

    return (
        <>  
            <div className="divider-line"></div>
            {station.logs.map((log, index) => (
                <li key={index} className="log_list_item">
                    <span className="log_item">Log: {log.message}</span>
                    <div className="divider-line"></div>
                </li>
            ))}
        </>
    );
}

export default CreateLogItemStation;