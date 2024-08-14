import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ image, Country, url }) => {
  return (
    <>
      <div className=" flex border  border-gray-300 max-w-96 max-h-[460px] flex-col  overflow-hidden shadow-2xl shadow-indigo-800   hover:shadow-md  transition-all  ease-in-out duration-200 rounded-xl pb-2 ">
        <img src={`${image}`} alt={Country} className="object-fill h-[70%]" />

        <div className="">
          <h1 className="ml-4 my-4 text-primary-light">Study in {Country}</h1>
          <Link to={url} className="ml-4 text-violet-500">
            {" "}
            {"Learn more >"}{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
