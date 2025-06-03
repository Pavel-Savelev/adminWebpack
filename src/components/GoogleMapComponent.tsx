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

function GoogleMapComponent({positionMap}:GoogleMapComponentProps) {
  const center = {
    lat: positionMap.lat,
    lng: positionMap.lng  
  };
  
  return (
    <div className='map__content'>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <span>
        Координаты: {(positionMap?.lat ?? 0).toFixed(4)}, {(positionMap?.lng ?? 0).toFixed(4)}
      </span>
    </div>
    
  );
}

export default GoogleMapComponent
