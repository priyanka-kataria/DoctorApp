import React from "react";
import rightimage from "../assets_frontend/header_img.png";
import ArrowIcon from "../assets_frontend/arrow_icon.svg";
import group_profile from "../assets_frontend/group_profiles.png";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 lg:px-20 py-10 md:py-20 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 text-white">
        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Book Appointment with Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img src={group_profile} alt="Group Profiles" className="w-30 h-16 rounded-full shadow-md" />
          <p className="text-base md:text-lg text-white leading-relaxed">
            Simply browse through our extensive list of trusted doctors and schedule your appointment with ease.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-3 rounded-full bg-white px-8 py-3 text-gray-700 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Book Appointment
          <img src={ArrowIcon} alt="Arrow Icon" className="w-4" />
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative mt-10 md:mt-0">
        <img
          src={rightimage}
          alt="Doctor Appointment"
          className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
