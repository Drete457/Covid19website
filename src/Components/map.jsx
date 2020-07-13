import React, { useState, useEffect } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import Color from "../Functions/color";
import "leaflet/dist/leaflet.css";
import "../Css/map.css";

export default function MapView(props) {
  let [countries, setCountries] = useState("");
  let [newColor, setNewColor] = useState("");
  
  useEffect(() => {
    setCountries(props.countries);
    setNewColor(Color(Object.values(props.type).join("")));
  }, [props]);

  return (
    <div>
      <Map id="mapview" className="mapview" center={[38.7071, -9.13549]} zoom={3} minZoom={2.2} maxZoom={18} maxBounds={[[-89.98155760646617, -180],[89.99346179538875, 180]]} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Array.from(countries).map((country, index) => {
          return (
            <Circle key={index}
              center={[country.countryInfo.lat, country.countryInfo.long]}
              color={newColor}
              radius={country[props.type]}
            />
          );
        })}
      </Map>
    </div>
  );
}

