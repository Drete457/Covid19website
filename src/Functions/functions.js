import React from "react";

export default function CreateList(countries, type) {
    return countries.map((country) => {
      return (
        <div className="countrydiv" key={country.countryInfo._id}>
          {country[type]} in {country.country}{" "}
          <img
            src={country.countryInfo.flag}
            className="countryflag"
            alt="countryflag"
          />
        </div>
      );
    });
  }
  