import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const country = state?.country;

  if (!country) {
    return (
      <p>No country selected. Please select a country from the dropdown.</p>
    );
  }

  return (
    <div className="details">
      <h2>Kingdom of {country.name.common}</h2>
      <div className="flag">
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
      <p>
        <span>Capital:</span> {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <span>Located in:</span> {country.region}
      </p>
    </div>
  );
};

export default Details;
