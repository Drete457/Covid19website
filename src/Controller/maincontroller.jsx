import React from "react";
import CountryList from "../Components/country-list";
import MapView from "../Components/map";
import Grafic from "../Components/grafic";
import "../Css/maincontroller.css";

export default function MainController(props) {
  return (
    <div className="mainbody" key="mainbody">
      <div className="view" key="view">
        <CountryList
          key="countrylist"
          type={props.type}
        />
      </div>
      <div className="data">
        <div className="mapview" key="mapview">
          <MapView
            key="mapview"
            type={props.type}
          />
        </div>
        <div className="graficview" key="graficview">
          <Grafic type={props.type} />
        </div>
        <p className="repository">
          Create 2020 - Repository{" "}
          <a href="https://github.com/Drete457/Covid19website">Here</a>
        </p>
      </div>
    </div>
  );
}
