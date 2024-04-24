import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';
import { useState } from 'react';

export const Map = () => {

  const [position,setPosition] = useState([
    0,
    0
]);

const getCurrentPosition = ()=>{
  navigator.geolocation.getCurrentPosition((position2)=>{
  // 緯度軽度
  const {latitude, longitude} = position2.coords;
    setPosition([
      latitude,
      longitude
    ]);
  }
  );
  
};

  // 初期マップズームレベル
  const zoom = 14;
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
        
        <button 
        onClick={getCurrentPosition}
        >aaa</button>

        </Popup>
      </Marker>
    </MapContainer>
  )
};