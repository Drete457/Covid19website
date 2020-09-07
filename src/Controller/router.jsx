import React, { useState, useEffect } from "react";
import Data from "../Service/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainController from "./maincontroller";
import CountryPage from "../view/country_page";
import NoPage from "../view/error";
import update from "../Controller/update";
import { GlobalData } from "../Context/GlobalData";
import { CountriesData } from "../Context/CountriesData";
import { HistoricalData } from "../Context/HistoricalData";

const urlAllInfo = "https://disease.sh/v3/covid-19/all";
const urlCountrysAllInfo = "https://disease.sh/v3/covid-19/countries";
const urlHistoricalData =
  "https://disease.sh/v3/covid-19/historical/all?lastdays=30";

export default function View(select) {
  const [globalData, setGlobalData] = useState("");
  const [countriesData, setCountriesData] = useState("");
  const [historicalData, setHistoricalData] = useState("");
  let [type, setType] = useState("");

  useEffect(() => {
    if (globalData.length === 0) {
      try {
        setUseState(urlAllInfo, setGlobalData);
        setUseState(urlCountrysAllInfo, setCountriesData);
        setUseState(urlHistoricalData, setHistoricalData);
      } catch (error) {
        update("cases");
      }
    }
    setType(Object.values(select));
  }, [select, globalData]);

  return (
    <Router>
      <GlobalData.Provider value={{ globalData, setGlobalData }}>
        <CountriesData.Provider value={{ countriesData, setCountriesData }}>
          <HistoricalData.Provider
            value={{ historicalData, setHistoricalData }}
          >
            <div className="router">
              <Switch>
                <Route exact path="/">
                  <MainController
                    globalData={globalData}
                    countriesData={countriesData}
                    type={type}
                    historicalData={historicalData}
                  />
                </Route>
                <Route path="/Portugal">
                  <CountryPage />
                </Route>
                <Route component={noPage} />
              </Switch>
            </div>
          </HistoricalData.Provider>
        </CountriesData.Provider>
      </GlobalData.Provider>
    </Router>
  );
}

function setUseState(url, set) {
  Data(url)
    .then((result) => {
      set(result);
    })
    .catch((error) => {
      set(error);
    });
}

export function countryInformation(url, set) {
  setUseState(url, set);
}

const noPage = () => {
  return (
    <div>
      <NoPage />
    </div>
  );
};
