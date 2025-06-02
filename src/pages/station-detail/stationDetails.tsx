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
import React from "react";
import { useState } from "react";

interface LocationState {
  station: IElectricalStation;
}

export type SecondaryContentType = "map" | "logs" | "updates" | "photos" | "comments";

function StationDetails() {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const station = state?.station;
  const [activeView,setActiveView] = useState<SecondaryContentType>("map")

  if (!station) return <p>Станция не найдена</p>;

  const chargers = station.chargers || [];

  return (
    <div className="detail__content">
      <div className="primary style-window-border">
        <div className="type__of__charger">
          {chargers.map((charger: ChargerStatus) => (
            <ChargerTypeTag
              key={`${station.id}-${charger.type}`}
              charger={charger}
            />
          ))}
        </div>

        <StationMenu station={station} activeView={activeView} setActiveView={setActiveView} />
        <div className="information detail__item active">
        <h3>Информация о станции</h3>
        <div className="station__info">
          <p className="station__info__item">
            Название в приложении: {station.nameOfApp}
          </p>
          <p className="station__info__item">IP: {station.ip}</p>
          <p className="station__info__item">SSH: {station.ssh}</p>
          <p className="station__info__item">
            Серийный номер: {station.productNumber}
          </p>
          <p className="station__info__item">Адрес: {station.address}</p>
          <p className="station__info__item">Регион: {station.region}</p>
        </div>
      </div>
        <DetailsButtons></DetailsButtons>
        <MercuryTable station={station} />
      </div>
      <div className="secondary style-window-border">
        {activeView === "map" && (
          <GoogleMapComponent positionMap={station.location} />
          // <PhotoComponent ></PhotoComponent>
        )}
        {activeView === "logs" && (
          <CreateLogList station={station} />
        )}
      </div>
    </div>
  );
}

export default StationDetails;
