import React from "react";
import update from "../Controller/update";

export default function CreateList(countries, type, order) {
  update(type);
  countries.sort((country1, country2) => {
    return country2[type] - country1[type];
  });
  let list = countries.map((country, index) => {
    return (
      <div className="countrydiv" key={index} onClick={handleClick}>
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

function handleClick(event) {
  event.preventDefault();
  console.log("was clicked");
}
