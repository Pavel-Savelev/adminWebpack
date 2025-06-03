import DiagramCreator from "../../components/diagramCreator";
import { DiagramSELL } from "../../data/data";
import React from "react";
import GoogleMapComponent from "../../components/GoogleMapComponent";
import { ILocation } from "../../components/GoogleMapComponent";
import LinePlot from "../../components/graph";

function MainContent() {
  const KazanPosition:ILocation = {
    lat: 55.85706151333579,
    lng: 49.120016809958116
  }
  return (
    <div className="content-area">
      <div className="content-diagrams">
        <DiagramCreator title="Продажи" data={DiagramSELL} ChartComponent={LinePlot} type="line" />
      </div>

      <div className="content-map">
        <h3 className="map-header">Карта</h3>
          <GoogleMapComponent 
          positionMap = {KazanPosition}
        />
      </div>
    </div>
  );
}
export default MainContent
