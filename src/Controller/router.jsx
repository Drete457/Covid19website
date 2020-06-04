import React, { useState, useEffect } from "react";
import Data from "../Service/api";
import CountryList from "../Components/country-list";
import "../Css/router.css";

const urlAllInfo = "https://disease.sh/v2/all";
const urlCountrysAllInfo = "https://disease.sh/v2/countries";

export default function Router() {
  const [globalData, setGlobalData] = useState("");
  const [countriesData, setCountriesData] = useState("");

  useEffect(() => {
    Data(urlAllInfo).then((result) => {
      if (true) {
        setGlobalData(result);
      }
    });
    Data(urlCountrysAllInfo).then((result) => {
      if (true) {
        setCountriesData(result);
      }
    });
  }, []);

  return (
    <div className="view">
      <CountryList
        cases={globalData.cases}
        deaths={globalData.deaths}
        recovered={globalData.recovered}
        countries={countriesData}
      />
    </div>
  );
}
