import { IElectricalStation } from "../../../types/elecricalStation";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Props {
  station: IElectricalStation;
}

function CreateListItem({ station  }: Props) {
    const navigate = useNavigate()
    

    const handleClick = () => {
      navigate(`/station/${station.productNumber}`, { 
          state: { 
              station
          } 
      });
  }
  return (
    <li className="station__item__list">
      <button className="button button__stations__list" onClick={handleClick}>
        <p className="item-param station__item__list-id">ID: {station.id}</p>
        <p className="item-param station__item__list-ip">IP: {station.ip}</p>
        <p className="item-param station__item__list-ssh">SSH: {station.ssh}</p>
        <p className="item-param station__item__list-product_number">Product Number: {station.productNumber}</p>
      </button>
    </li>
  );
}


export default CreateListItem ;
