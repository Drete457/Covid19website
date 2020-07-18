import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Graphic from "../Components/grafic_country_page";
import BackButton from "../Functions/backbutton";
import "../Css/country_page.css";

export default function countryPage(country) {
  ReactDOM.render(
    <Router>
      <Redirect to={country.country} />
      <ViewCountry country={country} />
    </Router>,
    document.getElementById("root"),
  );
}

function ViewCountry(props) {
  const country = props.country;
  const date = new Date().toLocaleDateString();

  return (
    <div className="countrypage">
      <div className="nameandflag">
        <h1>{country.country}</h1>
        <img
          src={country.countryInfo.flag}
          className="countryflagpage"
          alt="countryflagpage"
        />
      </div>
      <div className="totals">
        <h2>{date}</h2>
        <p>Cases: {country.todayCases}</p>
        <p>Deaths: {country.todayDeaths}</p>
        <p>Tests: {country.tests}</p>
      </div>
      <div className="million">
        <h3>Per 1 Million</h3>
        <p>Cases: {country.casesPerOneMillion}</p>
        <p>Deaths: {country.deathsPerOneMillion}</p>
        <p>Tests: {country.testsPerOneMillion}</p>
      </div>
      <div className="grafic">
        <Graphic country={country.country} />
      </div>
      <p>Note: The data above concerns only the past 30 days</p>
      <div className="backbutton">
        <BackButton />
      </div>
    </div>
  );
}
