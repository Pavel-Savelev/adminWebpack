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
      <button onClick={() => setActiveView("photos")} className={activeView === "photos" ? "active" : ""}>Фотографии</button>
      <button onClick={() => setActiveView("updates")} className={activeView === "updates" ? "active" : ""}>Обновления</button>
      <button onClick={() => setActiveView("comments")} className={activeView === "comments" ? "active" : ""}>Комментарии</button>
    </div>
  );
};

