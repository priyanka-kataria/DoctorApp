import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Doct() {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterdoc] = useState(doctors);

  const ApplyFilter = () => {
    if (speciality) {
      setFilterdoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterdoc(doctors);
    }
  };

  useEffect(() => {
    ApplyFilter();
  }, [doctors, speciality]);

  return (
    <div className="flex flex-col items-center gap-8 py-16 px-4 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      {/* Header */}
      <p className="text-3xl md:text-4xl font-extrabold text-white text-center">
        Browse Doctors by Speciality
      </p>
      <p className="sm:w-1/2 text-center text-sm md:text-base text-gray-200 mb-6">
        Browse through our extensive list of trusted doctors and schedule your appointment with ease.
      </p>

      {/* Filters Section */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {[
          "General physician",
          "Gynecologist",
          "Dermatologist",
          "Pediatricians",
          "Neurologist",
          "Gastroenterologist",
        ].map((spec) => (
          <p
            key={spec}
            onClick={() =>
              speciality === spec ? navigate("/doctors") : navigate(`/doctors/${spec}`)
            }
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
              speciality === spec
                ? "bg-blue-300 text-blue-900 shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-200"
            }`}
          >
            {spec}
          </p>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterDoc.map((elem) => (
          <div
            key={elem._id}
            onClick={() => navigate(`/appointment/${elem._id}`)}
            className="border rounded-xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300 bg-white shadow-lg"
          >
            <img
              className="w-full h-auto object-contain rounded-t-xl"
              src={elem.image}
              alt={elem.name}
            />
            <div className="p-4">
              <p className="text-green-500 font-semibold">Available</p>
              <p className="text-lg font-bold text-gray-900">{elem.name}</p>
              <p className="text-sm text-gray-500">{elem.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
