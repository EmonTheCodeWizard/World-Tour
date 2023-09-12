import { useEffect, useState } from "react";
import CountryCard from "./countryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://restcountries.com/v3.1/all";
        const res = await fetch(URL);
        const data = await res.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCountry = (country) => {
    console.log("Add this to your Visited Country");
    const newVisitedArr = [...visitedCountries, country];
    setVisitedCountries(newVisitedArr);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-semibold mt-10 text-white">
          Countries {countries.length}
        </h1>
        <div className="mt-10 bg-cyan-800 rounded-2xl p-10">
          <h4 className="text-start text-4xl font-semibold text-white">
            Visited Countries: {visitedCountries.length}
          </h4>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard
              countryCard={country}
              handleCountry={handleCountry}
              key={country.cca3}
            ></CountryCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
