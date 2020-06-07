import React, { useState, useEffect } from "react";
import { Map, TileLayer, CircleMarker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView(props) {
  let [countries, setCountries] = useState("");

  useEffect(() => setCountries(props.countries), [props.countries]);

  return (
    <div>
      <Map className="mapview" center={[0, 0]} zoom={2}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Array.from(countries).forEach((country) => {
          return (
            <CircleMarker
              center={[country.countryInfo.lat, country.countryInfo.long]}
              fillColor="blue" fill="true"
              radius={country[props.type]} 
            />
          );
        })}
      </Map>
    </div>
  );
}
