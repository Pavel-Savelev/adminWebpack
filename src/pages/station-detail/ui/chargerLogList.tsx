import CreateLogItemStation from "./chargerLogItem"
import { IElectricalStation } from "../../../types/elecricalStation";

export interface ILogItemStationProps {
    station: IElectricalStation;
}

function CreateLogList({ station }: ILogItemStationProps) {
    return (
        <>  
            <h3 className="station_name">Station Logs | {station.nameOfApp}</h3>
            <div className="header_log_list">
                <h4 className="log_list_name">Name_Log</h4> 
                <button className="log_list_arrow"></button>
            </div>
            <ul className="body_log_list">
                <CreateLogItemStation station={station} />
            </ul>
        </>
    )
}

export default CreateLogList