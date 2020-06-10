import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Data from "../Service/api";
import CountryList from "../Components/country-list";
import MapView from "../Components/map";
import Grafic from "../Components/grafic";
import "../Css/router.css";

const urlAllInfo = "https://disease.sh/v2/all";
const urlCountrysAllInfo = "https://disease.sh/v2/countries";
const urlHistoricalData = "https://disease.sh/v2/historical/all?lastdays=30";

export default function Router(select) {
  const [globalData, setGlobalData] = useState("");
  const [countriesData, setCountriesData] = useState("");
  const [historicalData, setHistoricalData] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (globalData.length === 0) {
      setUseState(urlAllInfo, setGlobalData);
      setUseState(urlCountrysAllInfo, setCountriesData);
      setUseState(urlHistoricalData, setHistoricalData);
    }
    setType(Object.values(select));
  }, [select, globalData]);

  return (
    <div className="mainbody" key="mainbody">
      <div className="view" key="view">
        <CountryList
          key="countrylist"
          cases={globalData.cases}
          deaths={globalData.deaths}
          recovered={globalData.recovered}
          countries={countriesData}
        />
      </div>
      <div className="mapview" key="mapview">
        <MapView key="mapview" countries={countriesData} type={type} />
      </div>
      <div className="graficview" key="graficview">
        <Grafic dataHistorical={historicalData} type={type} />
      </div>
    </div>
  );
}

function setUseState(url, set) {
  Data(url).then((result) => {
    set(result);
  });
}

export function Update(select) {
  ReactDOM.render(
    <Router select={select} />, 
    document.getElementById('root')
  );
}