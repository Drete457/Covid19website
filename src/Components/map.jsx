import React, { useState, useEffect, useContext } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import Color from "../Functions/color";
import { CountriesData } from "../Context/CountriesData";
import "leaflet/dist/leaflet.css";
import "../Css/map.css";

export default function MapView(props) {
  const { countriesData } = useContext(CountriesData);
  let [countries, setCountries] = useState("");
  let [newColor, setNewColor] = useState("");
  const maxBounds = [
    [-89.98155760646617, -180],
    [89.99346179538875, 180],
  ];
  const center = [38.7071, -9.13549];

  useEffect(() => {
    setCountries(countriesData);
    setNewColor(Color(Object.values(props.type).join("")));
  }, [props, countriesData]);

  return (
    <div>
      <Map
        id="mapview"
        className="mapview"
        center={center}
        zoom={2}
        minZoom={2}
        maxZoom={10}
        maxBounds={maxBounds}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Array.from(countries).map((country) => {
          return (
            <Circle
              key={country.country}
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
