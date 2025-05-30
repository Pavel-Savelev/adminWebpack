import { IElectricalStation } from "../../../types/elecricalStation";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Props {
  station: IElectricalStation;
}

function CreateListItem({ station  }: Props) {
    const navigate = useNavigate()
    

    const handleClick = () => {
      console.log(station)
      navigate(`/station/${station.id}`, { 
          state: { 
              station
          } 
      });
  }
  return (
    <li className="station__item__list">
      <button className="button button__stations__list" onClick={handleClick}>
        <p>ID: {station.id}</p>
        <p>IP: {station.ip}</p>
        <p>SSH: {station.ssh}</p>
        <p>Product Number: {station.productNumber}</p>
      </button>
    </li>
  );
}


export default CreateListItem ;
