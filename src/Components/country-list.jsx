import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreateList from "../Functions/create_list";
import Update from "../Controller/update";
import Color from "../Functions/color";
import "react-tabs/style/react-tabs.css";
import "../Css/country-list.css";

export default function CountryList(props) {
  let [countrylist, setCountryList] = useState(0);
  let [newColor, setNewColor] = useState({})

  useEffect(() => {
    setNewColor({
      color: Color(Object.values(props.type).join(""))
  });
  }, [props.type]);

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
        <TabPanel style={newColor} key="casesview" className="tab">
          <h2>Total Cases: {props.cases}</h2>
        </TabPanel>
        <TabPanel style={newColor} key="deathsview" className="tab">
          <h2>Total Deaths: {props.deaths}</h2>
        </TabPanel>
        <TabPanel style={newColor} key="recoveredview" className="tab">
          <h2>Total Recovered: {props.recovered}</h2>
        </TabPanel>
      </Tabs>
      {countrylist}
    </div>
  );
}
