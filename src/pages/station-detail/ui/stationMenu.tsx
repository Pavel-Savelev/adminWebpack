import { useState } from "react";
import { IElectricalStation } from "../../../types/elecricalStation";
import { SecondaryContentType } from "../stationDetails";
interface StationMenuProps {
  station: IElectricalStation;
  activeView: SecondaryContentType;
  setActiveView: (view: SecondaryContentType) => void;
}

export const StationMenu = ({ station, activeView, setActiveView }: StationMenuProps) => {
  return (
    <div className="station__menu__buttons">
      <button onClick={() => setActiveView("map")} className={activeView === "map" ? "active" : ""}>Информация</button>
      <button onClick={() => setActiveView("logs")} className={activeView === "logs" ? "active" : ""}>Логи</button> 
      <button onClick={() => setActiveView("accidents")} className={activeView === "accidents" ? "active" : ""}>Аварии</button>
      <div className="dropdown">
        <button className="station__menu__buttons-another">
          Другое <img src="/arrow_down.svg" alt="arrow" />
        </button>
        <ul className="dropdown__menu">
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("comments")} className={activeView === "comments" ? "active" : ""}>Комментарии</button>
          </li>
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("updates")} className={activeView === "updates" ? "active" : ""}>Обновления</button>
          </li>
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("photos")} className={activeView === "photos" ? "active" : ""}>Фотографии</button>
          </li>
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("monitoring")} className={activeView === "monitoring" ? "active" : ""}>Мониторинг</button>
          </li>
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("availability")} className={activeView === "availability" ? "active" : ""}>Доступность</button>
          </li>
          <li className="dropdown__menu-item">
            <button onClick={() => setActiveView("session")} className={activeView === "session" ? "active" : ""}>Сессии</button>
          </li>
        </ul>
    </div>
    </div>
  );
};

