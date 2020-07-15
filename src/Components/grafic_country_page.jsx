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
  let [dataToShow, setDataToShow] = useState([]);
  let [dataToDisplay, setDataToDisplay] = useState([]);
  let [newColor, setNewColor] = useState("");
  const [countryUrl, setCountryURL] = useState("");
  

  useEffect(() => {
    if (dataToShow) {
      setCountryURL("https://disease.sh/v3/covid-19/historical/" + props.country + "?lastdays=30");
      setDataToShow(countryInformation(countryUrl, setDataToShow));
    }
console.log(countryUrl)
    console.log(dataToShow)
    if (dataToShow) {
      setDataToDisplay(
        Object.keys(dataToShow).map((key) => {
          const options = { month: "long", day: "numeric" };
          return {
            name: new Date(key).toLocaleDateString("en-US", options),
            cases: dataToShow[key],
          };
        }),
      );
    }
   // setNewColor(Color(Object.values(props.type).join("")));
    
  }, [props, dataToShow, countryUrl]);

  return (
    <ResponsiveContainer className="grafic">
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
        <Line type="monotone" dataKey="cases" stroke={newColor} fill={newColor} />
      </LineChart>
    </ResponsiveContainer>
  );
}
