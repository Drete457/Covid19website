import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreateList from "../Functions/create_list";
import Color from "../Functions/color";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import "react-tabs/style/react-tabs.css";
import "../Css/country-list.css";

export default function CountryList(props) {
  let [countryList, setCountryList] = useState([]);
  let [newColor, setNewColor] = useState({});
  let [order, setOrder] = useState(true);
  let [search, setSearch] = useState("");

  useEffect(() => {
    setNewColor({
      color: Color(Object.values(props.type).join("")),
    });
  }, [props.type]);

 useEffect(() => {
    if (countryList.length === 0) {
      setCountryList(CreateList(Array.from(props.countries), props.type, order));
    }
  }, [props, order, countryList]);

  return (
    <div className="separators">
      <Tabs key="tabs">
        <TabList key="tablist" className="tablist">
          <Tab
            key="cases"
            onClick={() => {
              searchCountry(
                CreateList(props.countries, "cases", order),
                setCountryList,
                search,
              );
            }}
          >
            CASES
          </Tab>
          <Tab
            key="deaths"
            onClick={() => {
              searchCountry(
                CreateList(props.countries, "deaths", order),
                setCountryList,
                search,
              );
            }}
          >
            DEATHS
          </Tab>
          <Tab
            key="recovered"
            onClick={() => {
              searchCountry(
                CreateList(props.countries, "recovered", order),
                setCountryList,
                search,
              );
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
      <button
        className="arrowbutton"
        onClick={() => {
          setOrder(!order);
          setCountryList(countryList.reverse());
        }}
      >
        {order ? (
          <TiArrowSortedUp className="arrow" />
        ) : (
          <TiArrowSortedDown className="arrow" />
        )}
      </button>
      <input
        className="search"
        type="text"
        placeholder="search... "
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          searchCountry(
            CreateList(props.countries, props.type, order),
            setCountryList,
            event.target.value,
          );
         
        }}
      />
      <div className="countrylist">{countryList}</div>
    </div>
  );
}

function searchCountry(list, set, search) {
  if (search.length === 0) {
    set(list);
  } else {
    let newList = list.filter((value) => {
      return value.key.toUpperCase().includes(search.toUpperCase())
        ? value
        : false;
    });
    set(newList);
  }
}
