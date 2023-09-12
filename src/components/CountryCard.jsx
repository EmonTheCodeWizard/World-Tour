import { useState } from "react";

const CountryCard = ({ countryCard, handleCountry }) => {
  const { name, flags, population, area } = countryCard;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className=" hover:scale-105  transition-transform duration-300 hover:bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 p-6 m-4 rounded-xl text-white ">
      <img src={flags.png} alt="" className="w-fit h-[180px]" />
      <div className="p-3">
        <h3>Name: {name?.common}</h3>
        <p>Population : {population}</p>
        <p>Area : {area}</p>
      </div>
      <button
        onClick={() => handleCountry(countryCard)}
        className="btn btn-outline mr-4 btn-sm mt-4"
      >
        Mark Visited
      </button>
      <button onClick={handleVisited} className="btn btn-success btn-sm mt-4">
        Visited
      </button>
      {visited ? (
        <p className="bg-green-400 rounded-2xl px-4 mt-2 text-black font-medium">{`I've Visited this Country`}</p>
      ) : (
        <p className="bg-red-400 rounded-2xl px-4 mt-2 text-white font-medium">{`I Want to Visit`}</p>
      )}
    </div>
  );
};

export default CountryCard;
