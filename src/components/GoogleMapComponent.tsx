import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export interface ILocation{
  lat:number;
  lng:number;
}

export interface GoogleMapComponentProps{
  positionMap:ILocation
}

const containerStyle = {
  width: '100%',
  height: '390px'
};

function GoogleMapComponent({ positionMap }: GoogleMapComponentProps) {
  if (!positionMap || positionMap.lat === undefined || positionMap.lng === undefined) {
    return <div>Координаты недоступны</div>;
  }

  const center = {
    lat: positionMap.lat,
    lng: positionMap.lng,
  };

  return (
    <div className="map__content">
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <span>
        Координаты: {center.lat.toFixed(4)}, {center.lng.toFixed(4)}
      </span>
    </div>
  );
}


export default GoogleMapComponent
