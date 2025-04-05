import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets_frontend/assets";

export default function Speciality() {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center justify-center gap-6 py-16 px-4 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 text-white"
    >
      {/* Header */}
      <p className="text-3xl md:text-4xl font-extrabold text-center">
        Find by Speciality
      </p>
      <p className="sm:w-1/2 text-center text-sm md:text-base text-gray-200">
        Browse through our extensive list of trusted doctors and schedule your appointment with ease.
      </p>

      {/* Speciality Cards */}
      <div className="flex flex-wrap justify-center gap-6 pt-8 w-full">
        {specialityData.map((elem, index) => {
          return (
            <Link
              key={index}
              to={`/doctors/${elem.speciality}`}
              onClick={() => {
                window.scroll(0, 0);
              }}
              className="flex flex-col items-center text-xs sm:text-sm cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 w-[120px] sm:w-[150px] p-4"
            >
              <img
                className="w-16 sm:w-24 mb-3 rounded-full border border-gray-200"
                src={elem.image}
                alt={elem.speciality}
              />
              <p className="text-center font-medium text-gray-700">
                {elem.speciality}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
