import React, { useState, useEffect } from "react";
import { countryInformation } from "../Controller/router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Color from "../Functions/color";
import { dataFormater } from "../Functions/data_formater";
import "../Css/grafic.css";

export default function Grafic(props) {
  let [dataToShow, setDataToShow] = useState({});
  let [dataToDisplay, setDataToDisplay] = useState([]);
  const [countryUrl, setCountryURL] = useState("");

  useEffect(() => {
    setCountryURL(
      "https://disease.sh/v3/covid-19/historical/" +
        props.country +
        "?lastdays=30",
    );
    if (!("country" in dataToShow)) {
      countryInformation(countryUrl, setDataToShow);
    }
    if ("timeline" in dataToShow) {
      setCountryURL(" ");
      const dataToShowFilter = dataToShow["timeline"];
      const dataCases = Object.entries(dataToShowFilter);
      const dataPerCase = dataCases.map((cases) => {
        return cases[1];
      });
      const dataReady = Object.keys(dataPerCase[0]).map((date) => {
        const options = { month: "long", day: "numeric" };
        return {
          name: new Date(date).toLocaleDateString("en-US", options),
          cases: dataPerCase[0][date],
          deaths: dataPerCase[1][date],
          recovered: dataPerCase[2][date],
        };
      });

      setDataToDisplay(dataReady);
    }
  }, [props, dataToShow, countryUrl]);
console.log(dataToDisplay)
  return (
    <ResponsiveContainer className="graficviewcountry">
    <LineChart
    data={dataToDisplay}
    margin={{
      top: 10,
      right: 30,
      left: 10,
      bottom: 0,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis tickFormatter={dataFormater} />
        <Tooltip />
        <Legend />
    <Line type="monotone" dataKey="cases" stroke={Color("cases")} fill= {Color("cases")} activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="deaths" stroke={Color("deaths")} fill= {Color("deaths")} activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="recovered" stroke={Color("recovered")} fill= {Color("recovered")} activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
  );
}

