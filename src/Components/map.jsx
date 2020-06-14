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
      <Map id="mapview" className="mapview" center={[38.7071, -9.13549]} zoom={3} maxZoom={30} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Array.from(countries).map((country) => {
          return (
            <Circle key={country.country}
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

