import { products } from "../../data/stations"
import CreateListItem from "./ui/createStationlistItem"
import React, { JSX } from "react";
import { useEffect } from "react";

function CreateTable(): JSX.Element {
    const columns = [
            { key: "status", label: "Status" },
            { key: "id", label: "ID" },
            { key: "ip", label: "IP" },
            { key: "name", label: "Название станции" },
            { key: "ssh", label: "SSH" },
            { key: "productNumber", label: "Серийный номер" },
            { key: "address", label: "Адрес" },
            { key: "region", label: "Регион" },
        ];
    useEffect(() => {
        localStorage.setItem("stations", JSON.stringify(products.list));
    }, []);


    return (
        <div className="station__table content">
            <div className="names__of__params">
            {columns.map(col => (
                <button key={col.key} className="param__menu__buttom">
                <span className="name__param">{col.label}</span>
                <span className="arrow-icon">
                    <img src="/arrow_down.svg" alt="arrow down" width={8} height={8} />
                </span>
                </button>
            ))}
            </div>  
            <ul className="list">
                {products.list.map((station)=>(
                    <CreateListItem key={station.id} station={station} />
                ))}
            </ul>
        </div>
    )
}

export default CreateTable;
