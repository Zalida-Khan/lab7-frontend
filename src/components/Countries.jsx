import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (event) => {
    const cca2 = event.target.value;
    const selectedData = countries.find((country) => country.cca2 === cca2);
    setSelectedCountry(cca2);
    navigate(`/countries/${cca2}`, { state: { country: selectedData } });
  };

  return (
    <div className="countries">
      <h1 className="h1">World Kingdoms</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;