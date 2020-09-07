import React, { useState, useEffect, useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Color from "../Functions/color";
import { dataFormater } from "../Functions/data_formater";
import { HistoricalData } from "../Context/HistoricalData";

export default function Grafic(props) {
  const { historicalData } = useContext(HistoricalData);
  let [dataToShow, setDataToShow] = useState([]);
  let [dataToDisplay, setDataToDisplay] = useState([]);
  let [newColor, setNewColor] = useState("");

  useEffect(() => {
    setDataToShow(historicalData[props.type]);
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
    setNewColor(Color(Object.values(props.type).join("")));
  }, [props, dataToShow, historicalData]);

  return (
    <ResponsiveContainer className="grafic">
      <AreaChart
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
        <Area
          type="monotone"
          dataKey="cases"
          stroke={newColor}
          fill={newColor}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
