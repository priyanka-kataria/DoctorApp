import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { assets } from "../assets_frontend/assets";

export default function Appointment() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const FetchDocInfo = async () => {
    const DocInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(DocInfo);
  };

  useEffect(() => {
    FetchDocInfo();
  }, [doctors, docId]);

  return !docInfo ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-xl font-medium text-gray-500 animate-pulse">
        Loading...
      </p>
    </div>
  ) : (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Doctor Details Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 bg-gradient-to-b from-blue-500 to-purple-500 p-6 flex items-center justify-center">
            <img
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          {/* Info Section */}
          <div className="flex-1 p-8 space-y-6">
            {/* Doctor Name and Verification */}
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-800">
                Dr. {docInfo.name}
              </h1>
              <img
                src={assets.verified_icon}
                alt="Verified"
                className="w-6 h-6"
              />
            </div>

            {/* Speciality and Experience */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {docInfo.speciality}
              </span>
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                {docInfo.experience} Years Experience
              </span>
              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                {docInfo.degree}
              </span>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">About</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            {/* Fee and Book Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-inner">
              <div>
                <p className="text-sm text-gray-500">Consultation Fee</p>
                <p className="text-xl font-bold text-gray-800">₹{docInfo.fees}</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md w-full sm:w-auto">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="p-8 space-y-6 border-t border-gray-200 mt-6">
          {/* Timings */}
          <div className="flex items-center gap-3">
            <img
              src={assets.clock_icon}
              alt="Clock Icon"
              className="w-6 h-6"
            />
            <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <img
              src={assets.location_icon}
              alt="Location Icon"
              className="w-6 h-6"
            />
            <p className="text-gray-600">Video Consultation / Clinic Visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
