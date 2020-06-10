import React, { useState, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, 
  },
  {
    name: 'Page B', uv: 3000, 
  },
  {
    name: 'Page C', uv: 2000,
  },
  {
    name: 'Page D', uv: 2780,
  },
  {
    name: 'Page E', uv: 1890, 
  },
  {
    name: 'Page F', uv: 2390, 
  },
  {
    name: 'Page G', uv: 3490,
  },
];

export default function Grafic(props) {
  let [dataToShow, setDataToShow] = useState([])
  let [dataToDisplay, setDataToDisplay] = useState("");
 
  useEffect(() => {
    setDataToShow(props.dataHistorical[props.type])
    if (dataToShow) {
      setDataToDisplay(Object.keys(dataToShow).map((key) => { return { name: key, uv: dataToShow[key] } }))
      console.log("está feito")
    }
    
  }, [props]);
    
  console.log(dataToDisplay);
    return (
      <AreaChart
        width={500}
        height={400}
        data={dataToDisplay}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }

  /* setDataToDisplay(Object.keys(algo).map((key) => { return [key, algo[key]] }))*/
  /*then(()=>setDataToDisplay(Object.keys(dataToShow).map((key) => { return [key, dataToShow[key]]})))*/
/*  Array.from(props.dataHistorical[props.type]).map((data) => {
      console.log(data);
      array.push({ name: data[0], uv: data[1] })
    })
      setDataToDisplay(array)*/

      /*   Object.getOwnPropertyNames(props.dataHistorical[props.type])
      .forEach((val, idx, array) => {array.push({name: val, uv: props.dataHistorical[props.type][val]})})*/

      /* Array.from(array).map((val) => console.log(val));
    setDataToDisplay(array);*/