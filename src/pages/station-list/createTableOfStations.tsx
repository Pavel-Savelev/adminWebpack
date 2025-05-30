import { products } from "../../data/stations"
import CreateListItem from "./ui/createStationlistItem"
import React, { JSX } from "react";

function CreateTable(): JSX.Element {
    

    return (
        <div className="list__container">
            <ul className="list">
                {products.list.map((station)=>(
                    <CreateListItem key={station.id} station={station} />
                ))}
            </ul>
        </div>
    )
}

export default CreateTable;
