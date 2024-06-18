"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow  from 'leaflet/dist/images/marker-shadow.png';

const MapWithGeocoding = ({ place }) => {
  const [position, setPosition] = useState([16.1543, 73.6807]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [key, setKey] = useState(0); // Add key state

  const fillBlueOptions = { fillColor: 'blue' };

  useEffect(() => {
    const fetchData = async () => {
      if (place) {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/search?format=json&&state=sindhudurg&city=${place}&postalcode=416500`
          );
          if (response.data && response.data.length > 0) {
            const { lat, lon, display_name } = response.data[0];
            setPosition([parseFloat(lat), parseFloat(lon)]);
            setPlaceName(display_name);
            setErrorMessage(null);
            setKey(prevKey => prevKey + 1); // Increment key to force re-mount of MapContainer
          } else {
            setErrorMessage("Place not found");
          }
        } catch (error) {
          console.error("Error fetching geocoding data:", error);
          setErrorMessage("Error fetching geocoding data");
        }
      }
      console.log(place)
    };
    fetchData();
  }, [place]);



  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <MapContainer
        key={key} // Add key prop
        style={{
          height: "calc(100vh - 40px)", // Adjusted for input field height
          width: "100vw",
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={fillBlueOptions} radius={10000} />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [35, 50],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [35, 41],
            })
          }
        >
          <Popup>{place}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithGeocoding;
