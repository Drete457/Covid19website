import React from "react";

export function CreateList(countries, type) {
    return countries.map((country) => {
      return (
        <div className="countrydiv" key={country.country}>
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
  
export const dataFormater = (cases) => {
    if (cases > 8000000) {
      return (cases / 1000000).toString() + " M";
    } else if (cases > 1000) {
      return (cases / 1000).toString() + " K";
    } else {
      return cases.toString();
    }
  }
  
