import { useState } from "react";
import { IElectricalStation } from "../../../types/elecricalStation";

interface StationMenuProps {
  station: IElectricalStation;
}

export function StationMenu({ station }:StationMenuProps) {
  const [activeTab, setActiveTab] = useState("Информации");

  const buttons = [
    "Информации",
    "Логи",
    "Фотографии",
    "Обновления",
    "Комментарии",
  ];

  return (
    <>
      <div className="station__menu__buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveTab(btn)}
            className={activeTab === btn ? "active" : ""}
          >
            {btn}
          </button>
        ))}
      </div>

      {activeTab === "Информации" && (
        <div className="information detail__item active">
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
      )}
    </>
  );
}
