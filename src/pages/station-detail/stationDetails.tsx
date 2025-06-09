import { useLocation } from "react-router-dom";
import ChargerTypeTag from "./ui/chargerSatus";
import { StationMenu } from "./ui/stationMenu";
import DetailsButtons from "./ui/detailButtons";
import CreateLogList from "./ui/chargerLogList";
import MercuryTable from "./ui/mercuryTable";
import GoogleMapComponent from "../../components/GoogleMapComponent";
// import ShortLogs from "./ui/stationShortLogs";
import { ChargerStatus } from "../../types/elecricalStation";
import { IElectricalStation } from "../../types/elecricalStation";
import { useState } from "react";
import { useLogSocket } from "../../hooks/useLogSocket";
import { ILogItems } from "../../types/elecricalStation";
import { allLogs } from "../../data/stations";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";

export interface IElectricalStationProps {
  station: IElectricalStation;
}

export interface IlogListProps {
  logs: ILogItems[];
}

export type SecondaryContentType = "map" | "logs" | "updates" | "photos" | "comments";

function StationDetails() {
  const location = useLocation();
  const { productNumber } = useParams();
  const [station, setStation] = useState<IElectricalStation | null>(
    (location.state as IElectricalStationProps | undefined)?.station || null
  );

  useEffect(() => {
  if (location.state && (location.state as any).station) {
    setStation((location.state as any).station); // пришло через navigate
  } else if (productNumber) {

    const allStations: IElectricalStation[] = JSON.parse(localStorage.getItem("stations") || "[]");
    const found = allStations.find(s => String(s.productNumber) === productNumber);
    if (found) {
      setStation(found);
    }
  }
}, [location.state, productNumber]);

  const logSocketList = useLogSocket();
  const filterLogsStation = logSocketList.filter(
    (log) => log.productNumber === station?.productNumber
  );
  const [activeView, setActiveView] = useState<SecondaryContentType>("map");

  if (!station) return <p>Станция не найдена</p>;

  const chargers = station.chargers || [];

  return (
    <div className="content">
      <div className="primary style-window-border">
        <div className="type__of__charger">
          {chargers.map((charger: ChargerStatus) => (
            <ChargerTypeTag key={`${station.id}-${charger.type}`} charger={charger} />
          ))}
        </div>

        <StationMenu station={station} activeView={activeView} setActiveView={setActiveView} />

        <div className="information detail__item active">
          <h3>Информация о станции</h3>
          <div className="station__info">
            <p className="station__info__item">Название в приложении: {station.nameOfApp}</p>
            <p className="station__info__item">IP: {station.ip}</p>
            <p className="station__info__item">SSH: {station.ssh}</p>
            <p className="station__info__item">Серийный номер: {station.productNumber}</p>
            <p className="station__info__item">Адрес: {station.address}</p>
            <p className="station__info__item">Регион: {station.region}</p>
          </div>
        </div>

        <DetailsButtons />
        <MercuryTable station={station} />
      </div>

      <div className="secondary style-window-border">
        {activeView === "map" && <GoogleMapComponent positionMap={station.location} />}
        {activeView === "logs" && (
          <>
            <h3 className="station_name">Station Logs | {station.nameOfApp}</h3>
            <div className="header_log_list">
              <h4 className="log_list_name">Name_Log</h4>
              <button className="log_list_arrow"></button>
            </div>
            <CreateLogList logs={filterLogsStation} />
          </>
        )}
      </div>
    </div>
  );
}

export default StationDetails;