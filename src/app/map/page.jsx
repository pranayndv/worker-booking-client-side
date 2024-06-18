"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow  from 'leaflet/dist/images/marker-shadow.png';

const MapWithGeocoding = () => {
  const [placeName, setPlaceName] = useState("");
  const [position, setPosition] = useState([16.1543, 73.6807]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [key, setKey] = useState(0); // Add key state

  const fillBlueOptions = { fillColor: 'blue' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const place = e.target.place.value;
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
  };
  const places = [
    {
      name: "Omkar Vadapav Service",
      coordinates: [16.1543, 73.6807]
    },
    {
      name: "Om Vasuli Service",
      coordinates: [16.1654, 73.6789]
    },  
    {
      name: "Gopal Eicher service ",
      coordinates: [16.1656, 73.6689]
    },
    {
      name: "Pranay full stack devloper",
      coordinates: [16.1658, 73.6589]
    },
    {
      name: "place 5",
      coordinates: [16.1660, 73.6489]
    },
    // Add more places as needed
  ];

  const handleMarkerClick = (place) => {
    setPosition(place.coordinates);
    setPlaceName(place.name);
  };


  return (
    <div className="flex flex-col items-center relative">
      <form onSubmit={handleSubmit} className='w-[60vw] absolute z-20  shadow-xl bg-gray-100 flex justify-center p-4 md:my-0  rounded-lg space-x-5'>
        <input type="text" name="question" placeholder="What you looking for ?"  className="h-[3rem] pl-5 pr-5 ml-[-0.6rem] rounded-md outline-none"/>
        <input type="text" name="place" placeholder="Location"  className="h-[3rem] pl-5 pr-5 ml-[-0.6rem] rounded-md outline-none"/>
        <button type="submit" className="text-red hover:before:bg-redborder-red-500 relative h-[3rem] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover:text-black hover:shadow-gray-500 hover:before:left-0 hover:before:w-full hover:scale-105 duration-300"> <span className="relative z-10 text-white">Search services</span></button>
        
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <MapContainer
      className="z-10"
        key={key} // Add key prop
        style={{
          height: "calc(100vh - 40px)", // Adjusted for input field height
          width: "100vw",
        }}
        center={position}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={fillBlueOptions} radius={10000} />
        {places.map((place, index) => (
          <Marker
            key={index}
            position={place.coordinates}
            onClick={() => handleMarkerClick(place)}
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
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithGeocoding;
