import React from "react";
import ReactDOM from 'react-dom';
import BackButton from "../Functions/backbutton";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "../Css/country_page.css";

export default function countryPage(country) {
  console.log("page: " + country)
  ReactDOM.render(
    <Router>
      <Redirect to={country.country} />
      <ViewCountry country={country} />
      </Router>,
    document.getElementById('root')
  );
}

function ViewCountry(country) {
  console.log(country)
  return (
    <div className="countrypage">
        <h1>Teste</h1>
      <BackButton />
    </div>
  );
}
