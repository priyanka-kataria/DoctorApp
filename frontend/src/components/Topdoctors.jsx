import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext.jsx";

export default function Topdoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16 px-4 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 text-white">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center">
        Meet Our Top Doctors
      </h1>
      <p className="sm:w-2/3 text-center text-sm md:text-base text-gray-200">
        Discover our top-rated and trusted doctors. Book an appointment with ease and confidence.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
        {doctors.map((elem) => (
          <div
            key={elem._id}
            onClick={() => navigate(`/appointment/${elem._id}`)}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.05]"
          >
            {/* Doctor Image */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-t-lg">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt={elem.name}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            {/* Doctor Info */}
            <div className="p-6 space-y-2">
              <p className="text-green-500 font-semibold">Available</p>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Dr. {elem.name}
              </h3>
              <p className="text-sm text-gray-600">{elem.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => navigate("/doctors")}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-3 rounded-full font-semibold hover:scale-[1.05] transition-transform duration-300 shadow-lg mt-8"
      >
        View More Doctors
      </button>
    </div>
  );
}
