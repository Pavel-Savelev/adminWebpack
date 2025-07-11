import { useNavigate } from "react-router-dom";
import { products } from "../../data/stations";
import React, { JSX } from "react";
import { useEffect } from "react";


function CreateTable(): JSX.Element {
    const columns = [
        { key: "status", label: "Status" },
        { key: "id", label: "ID" },
        { key: "name", label: "Название станции" },
        { key: "ssh", label: "SSH" },
        { key: "address", label: "Адрес" },
        { key: "region", label: "Регион" },
    ];

    useEffect(() => {
        localStorage.setItem("stations", JSON.stringify(products.list));
    }, []);

    const navigate = useNavigate();

    const handleClick = (stationId: string) => {
        navigate(`/station/${stationId}`);
    };

    return (
        <div className="station__list__page">
            
            <table className="table auto w-full text-sm border border-gray-400 border-collapse">
                <thead>
                    <tr className="names__of__params">
                        {columns.map((col) => (
                            <th key={col.key} className="param__menu__buttom">
                                <span className="name__param">{col.label}</span>
                                <span className="arrow-icon">
                                    <img
                                        src="/arrow_down.svg"
                                        alt="arrow down"
                                        width={8}
                                        height={8}
                                    />
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="list">
                    {products.list.map((station) => (
                        <tr 
                            key={station.id} 
                            className="station__item__list"  
                            onClick={() => handleClick(station.id)}
                        >
                            <td className="item-param">{station.status}</td>
                            <td className="item-param">{station.id}</td>
                            <td className="item-param">{station.productNumber}</td>
                            <td className="item-param">{station.ssh}</td>
                            <td className="item-param">{station.address}</td>
                            <td className="item-param">{station.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CreateTable;