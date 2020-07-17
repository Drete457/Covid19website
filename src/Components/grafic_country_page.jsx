import React, { useState, useEffect } from "react";
import { countryInformation } from "../Controller/router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Color from "../Functions/color";
import { dataFormater } from "../Functions/data_formater";
import "../Css/grafic.css";

export default function Grafic(props) {
  let [dataToShow, setDataToShow] = useState({});
  let [dataToDisplay, setDataToDisplay] = useState({});
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
      console.log("1")
      const dataToShowFilter = dataToShow["timeline"];
      const dataCases = Object.entries(dataToShowFilter);
      const dataPerCase = dataCases.map(cases => { return cases[1]});
      const dataReady = dataPerCase.map(cases => Object.keys(cases).map((date) => {
          const options = { month: "long", day: "numeric" };
           return {
             name: new Date(date).toLocaleDateString("en-US", options),
             cases: cases[date],
           };
         })
       )
     setDataToDisplay(dataReady);
    }
  }, [props, dataToShow, countryUrl]);
console.log(dataToDisplay);

  return (<div></div>);
}
/* <ResponsiveContainer className="grafic">
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
        <Line
          type="monotone"
          dataKey="cases"
          stroke={newColor}
          fill={newColor}
        />
      </LineChart>
    </ResponsiveContainer>*/
