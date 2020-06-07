import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreateList from '../Functions/functions';
import "react-tabs/style/react-tabs.css";

export default function CountryList(props) {
  let [countrylist, setCountryList] = useState(0);

  useEffect(() => {
    let firstRun = [];
    Array.from(props.countries).forEach((country) => {
      firstRun.push(
        <div className="countrydiv" key={country.countryInfo._id}>
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
        <TabList key="tablist">
          <Tab key="cases"
            onClick={() => setCountryList(CreateList(props.countries, "cases"))}
          >
            CASES
          </Tab>
          <Tab key="deaths"
            onClick={() =>
              setCountryList(CreateList(props.countries, "deaths"))
            }
          >
            DEATHS
          </Tab>
          <Tab key="recovered"
            onClick={() =>
              setCountryList(CreateList(props.countries, "recovered"))
            }
          >
            RECOVERED
          </Tab>
        </TabList>
        <TabPanel key="casesview">
          <h1>Total Cases: {props.cases}</h1>
          {countrylist}
        </TabPanel>
        <TabPanel key="deathsview">
          <h1>Total Deaths: {props.deaths}</h1>
          {countrylist}
        </TabPanel>
        <TabPanel key="recoveredview">
          <h1>Total Recovered: {props.recovered}</h1>
          {countrylist}
        </TabPanel>
      </Tabs>
    </div>
  );
}

