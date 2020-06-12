import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CreateList } from "../Functions/functions";
import Update from "../Controller/update";
import "react-tabs/style/react-tabs.css";
import "../Css/country-list.css";

export default function CountryList(props) {
  let [countrylist, setCountryList] = useState(0);

  useEffect(() => {
    let firstRun = [];
    Array.from(props.countries).forEach((country) => {
      firstRun.push(
        <div className="countrydiv" key={country.country} >
          {country.cases} in {country.country}{" "}
          <img
            src={country.countryInfo.flag}
            className="countryflag"
            alt="countryflag"
          />
        </div>,
      );
    });
    setCountryList(firstRun);
  }, [props.countries]);

  return (
    <div className="separators">
      <Tabs key="tabs">
        <TabList key="tablist" className="tablist">
          <Tab
            key="cases"
            onClick={() => {
              setCountryList(CreateList(props.countries, "cases"))
              Update("cases");
            }}
          >
            CASES
          </Tab>
          <Tab
            key="deaths"
            onClick={() => {
              setCountryList(CreateList(props.countries, "deaths"))
              Update("deaths");
            }}
          >
            DEATHS
          </Tab>
          <Tab
            key="recovered"
            onClick={() => {
              setCountryList(CreateList(props.countries, "recovered"))
              Update("recovered");
            }}
          >
            RECOVERED
          </Tab>
        </TabList>
        <TabPanel key="casesview" className="tab">
          <h2>Total Cases: {props.cases}</h2>
        </TabPanel>
        <TabPanel key="deathsview" className="tab">
          <h2>Total Deaths: {props.deaths}</h2>
        </TabPanel>
        <TabPanel key="recoveredview" className="tab">
          <h2>Total Recovered: {props.recovered}</h2>
        </TabPanel>
      </Tabs>
      {countrylist}
    </div>
  );
}
