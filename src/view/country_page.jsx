import React from "react";
import ReactDOM from 'react-dom';
import BackButton from "../Functions/backbutton";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "../Css/country_page.css";

export default function countryPage(country) {
  ReactDOM.render(
    <Router>
      <Redirect to={country.country} />
      <ViewCountry country={country} />
      </Router>,
    document.getElementById('root')
  );
}

function ViewCountry(props) {
  const country = props.country;
  console.log(country)
  return (
    <div className="countrypage">
      <h1>{country.country}</h1>
      <img
          src={country.countryInfo.flag}
          className="countryflag"
          alt="countryflag"
      />
      <h2>meter uma data aqui</h2>
      <p>Cases: {country.todayCases}</p>
      <p>Deaths: {country.todayDeaths}</p>
      <p>Tests: {country.tests}</p>
      <h3>Per 1 Million</h3>
      <p>Cases: {country.casesPerONeMillion}</p>
      <p>Deaths: {country.deathsPerOneMillion}</p>
      <p>Tests: {country.testsPerOneMillion}</p>
      <p>Meter um gráfico aqui</p>
      <BackButton />
      <p>Note: The data above concerns only the past 30 days</p>
    </div>
  );
}
