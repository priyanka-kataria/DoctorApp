import React from "react";
import Appontimg from "../assets_frontend/appointment_img.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 lg:px-20 py-10 md:py-20 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg mt-5 mb-5">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
          Book Appointment
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200">
          With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Create Account
        </button>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full max-w-md rounded-lg shadow-md"
          src={Appontimg}
          alt="Appointment"
        />
      </div>
    </div>
  );
}
