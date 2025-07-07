import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import ChargerTypeTag from "./ui/chargerSatus";
import { StationMenu } from "./ui/stationMenu";
import DetailsButtons from "./ui/detailButtons";
import CreateDataList from "./ui/chargerLogList";
import MercuryTable from "./ui/mercuryTable";
import GoogleMapComponent from "../../components/GoogleMapComponent";
import { useLogSocket } from "../../hooks/useLogSocket";
import { useStationComments } from "../../hooks/comments";
import {
  IConnectorStatus,
  IElectricalStation,
} from "../../types/elecricalStation";
import { useStationAccidents } from "../../hooks/accidents";
import CommentButton from "./ui/commentSend";
import EventTable from "./ui/tableDataTime";
import AvailabilityStation from "./ui/availabilityStation";
import { mockData } from "../../data/dataTimeAvailbl";
import PhaseStatGraph from "./ui/phaseStatGraph";
import { phaseData } from "../../data/phaseData";
import SessionTable from "./ui/sessionStation";
interface LocationState {
  station?: IElectricalStation;
}

export type SecondaryContentType =
  | "map"
  | "logs"
  | "updates"
  | "photos"
  | "another"
  | "accidents"
  | "comments"
  | "availability"
  | "monitoring"
  | "session";

function StationDetails() {
  const location = useLocation();
  const { productNumber: paramProductNumber } = useParams();

  const [station, setStation] = useState<IElectricalStation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logSocketList = useLogSocket();
  const [activeView, setActiveView] = useState<SecondaryContentType>("map");

  const { comments } = useStationComments(station?.productNumber || 0);
  const { accidents } = useStationAccidents(station?.productNumber || 0);

  useEffect(() => {
    if ((location.state as LocationState)?.station) {
      setStation((location.state as LocationState).station!);
      setIsLoading(false);
    } else if (paramProductNumber) {
      const allStations: IElectricalStation[] = JSON.parse(
        localStorage.getItem("stations") || "[]"
      );
      const found = allStations.find(
        (s) => String(s.productNumber) === paramProductNumber
      );
      setStation(found || null);
      setIsLoading(false);
    }
  }, [location.state, paramProductNumber]);

  const filterLogsStation = useMemo(
    () =>
      logSocketList.filter(
        (log) => log.productNumber === station?.productNumber
      ),
    [logSocketList, station?.productNumber]
  );

  if (isLoading) return <p>Загрузка...</p>;
  if (!station) return <p>Станция не найдена</p>;

  const chargers = station.chargers || [];

  const renderSecondaryContent = () => {
    switch (activeView) {
      case "map":
        return <GoogleMapComponent positionMap={station.location} />;
      case "logs":
        return (
          <>
            <h3 className="window_name">Логи станции | {station.nameOfApp}</h3>
            <CreateDataList data={filterLogsStation} />
          </>
        );
      case "comments":
        return (
          <>
            <h3 className="window_name">Комментарии | {station.nameOfApp}</h3>
            <CommentButton />
            <CreateDataList data={comments} />
          </>
        );
      case "accidents":
        return (
          <>
            <h3 className="window_name">Аварии | {station.nameOfApp}</h3>
            <CreateDataList data={accidents} />
          </>
        );
      case "availability":
        return (
          <>
            <h3 className="window_name">Доступность | {station.nameOfApp}</h3>
            <AvailabilityStation mockData={mockData} />
            <EventTable events={mockData}></EventTable>
          </>
        );
        case "session":
        return (
          <>
            <h3 className="window_name">Сессии | {station.nameOfApp}</h3>
            {/* <DataTable data={dataSession} /> 
            */}
            <SessionTable></SessionTable>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="content">
      <div className="primary style-window-border">
        <div className="type__of__charger">
          {chargers.map((charger: IConnectorStatus) => (
            <ChargerTypeTag
              key={`${station.id}-${charger.type}`}
              charger={charger}
            />
          ))}
        </div>

        <StationMenu
          station={station}
          activeView={activeView}
          setActiveView={setActiveView}
        />

        <div className="detail__item active">
          <div className="information__status">
            <h3>Информация о станции</h3>
            <span className="status-line">
              <span className={`status-indicator ${station.status}`}></span>
              <span className="status-label">{station.status}</span>
            </span>
          </div>
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

        <DetailsButtons />
        <MercuryTable station={station} />

        <PhaseStatGraph data={phaseData}></PhaseStatGraph>
      </div>
      <div className="secondary style-window-border">
        {renderSecondaryContent()}
      </div>
    </div>
  );
}

export default StationDetails;
