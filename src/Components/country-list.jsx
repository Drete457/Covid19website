import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreateList from "../Functions/create_list";
import Color from "../Functions/color";
import { GlobalData } from "../Context/GlobalData";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import "react-tabs/style/react-tabs.css";
import "../Css/country-list.css";
import { CountriesData } from "../Context/CountriesData";

export default function CountryList(props) {
  const { globalData } = useContext(GlobalData);
  const { countriesData } = useContext(CountriesData);
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
      setCountryList(
        CreateList(Array.from(countriesData), props.type, order),
      );
    }
  }, [props, countriesData, order, countryList]);

  return (
    <div className="separators">
      <Tabs key="tabs">
        <TabList key="tablist" className="tablist">
          <Tab
            key="cases"
            onClick={(event) => {
              event.preventDefault();
              searchCountry(
                CreateList(countriesData, "cases", order),
                setCountryList,
                search,
              );
            }}
          >
            CASES
          </Tab>
          <Tab
            key="deaths"
            onClick={(event) => {
              event.preventDefault();
              searchCountry(
                CreateList(countriesData, "deaths", order),
                setCountryList,
                search,
              );
            }}
          >
            DEATHS
          </Tab>
          <Tab
            key="recovered"
            onClick={(event) => {
              event.preventDefault();
              searchCountry(
                CreateList(countriesData, "recovered", order),
                setCountryList,
                search,
              );
            }}
          >
            RECOVERED
          </Tab>
        </TabList>
        <TabPanel style={newColor} key="casesview" className="tab">
          <h2>Total Cases: {globalData.cases}</h2>
        </TabPanel>
        <TabPanel style={newColor} key="deathsview" className="tab">
          <h2>Total Deaths: {globalData.deaths}</h2>
        </TabPanel>
        <TabPanel style={newColor} key="recoveredview" className="tab">
          <h2>Total Recovered: {globalData.recovered}</h2>
        </TabPanel>
      </Tabs>
      <button
        className="arrowbutton"
        onClick={() => {
          setOrder(!order);
          if (countryList === " ") {
            return " ";
          } else {
            setCountryList(countryList.reverse());
          }
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
          searchCountry(
            CreateList(countriesData, props.type, order),
            setCountryList,
            event.target.value,
          );
          setSearch(event.target.value);
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
    if (newList.length > 0) {
      set(newList);
    } else {
      set(" ");
    }
  }
}
