import { useLocation } from "react-router-dom";
import ChargerTypeTag from "./ui/chargerSatus";
import { StationMenu } from "./ui/stationMenu";
import DetailsButtons from "./ui/detailButtons";
import MercuryTable from "./ui/mercuryTable";
import GoogleMapComponent from "../../components/GoogleMapComponent";
// import ShortLogs from "./ui/stationShortLogs";
import { ChargerStatus } from "../../types/elecricalStation";
import { IElectricalStation } from "../../types/elecricalStation";

interface LocationState {
  station: IElectricalStation;
}

function StationDetails() {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const station = state?.station;

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

        <StationMenu station={station} />
        <DetailsButtons></DetailsButtons>
        <MercuryTable station={station} />
      </div>
      <div className="secondary style-window-border">
        <GoogleMapComponent positionMap={station.location}></GoogleMapComponent>
        {/* скорее всего апи ну или уже из общего апи будут браться данные */}
        {/* <ShortLogs></ShortLogs> */}
      </div>
    </div>
  );
}

export default StationDetails;
