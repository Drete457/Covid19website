import React from "react";
import update from "../Controller/update";
import countryPage from "../view/country_page";

export default function CreateList(countries, type, order) {
  update(type);
  countries.sort((country1, country2) => {
    return country2[type] - country1[type];
  });
  let list = countries.map((country) => {
    return (
      <div
        className="countrydiv"
        key={country.country}
        onClick={(event) => {
          event.preventDefault();
          handleClick(country);
        }}
      >
        {country[type]} in {country.country}{" "}
        <img
          src={country.countryInfo.flag}
          className="countryflag"
          alt="countryflag"
        />
      </div>
    );
  });
  return order ? list : list.reverse();
}

function handleClick(country) {
  countryPage(country);
}
