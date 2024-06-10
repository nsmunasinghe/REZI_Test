import React, { useState, useEffect } from 'react';
import { Country } from 'country-state-city';

const ComboBox = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="w-full">
      <select 
        className="cmbSelect"
        value={selectedCountry} 
        onChange={handleCountryChange}
      >
        <option value="" disabled>Country</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
