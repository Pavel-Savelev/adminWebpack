import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export interface ILocation{
  x:number;
  y:number;
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
    lat: positionMap.x,
    lng: positionMap.y  
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
        Координаты: {(positionMap.x).toFixed(4)}, {(positionMap.y).toFixed(4)}
      </span>
    </div>
    
  );
}

export default GoogleMapComponent
