import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
      <Tabs>
        <TabList>
          <Tab
            onClick={() => setCountryList(createList(props.countries, "cases"))}
          >
            CASES
          </Tab>
          <Tab
            onClick={() =>
              setCountryList(createList(props.countries, "deaths"))
            }
          >
            DEATHS
          </Tab>
          <Tab
            onClick={() =>
              setCountryList(createList(props.countries, "recovered"))
            }
          >
            RECOVERED
          </Tab>
        </TabList>
        <TabPanel>
          <h1>Total Cases: {props.cases}</h1>
          {countrylist}
        </TabPanel>
        <TabPanel>
          <h1>Total Deaths: {props.deaths}</h1>
          {countrylist}
        </TabPanel>
        <TabPanel>
          <h1>Total Recovered: {props.recovered}</h1>
          {countrylist}
        </TabPanel>
      </Tabs>
    </div>
  );
}

function createList(countries, type) {
  return countries.map((country) => {
    return (
      <tr className="countrydiv" key={country.countryInfo._id}>
        {country[type]} in {country.country}{" "}
        <img
          src={country.countryInfo.flag}
          className="countryflag"
          alt="countryflag"
        />
      </tr>
    );
  });
}
