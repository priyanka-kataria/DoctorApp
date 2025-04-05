import React, { useState } from "react";
import { assets } from "../assets_frontend/assets";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Richard James",
      specialization: "General Physician",
      address: "57th Cross, Richmond, Circle, Church Road, London",
      date: "25 July, 2024",
      time: "6:30 PM",
      image: assets.profile_pic,
      status: "Pending",
    },
    {
      id: 2,
      doctorName: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      address: "45th Avenue, Baker Street, New York",
      date: "30 July, 2024",
      time: "4:00 PM",
      image: assets.profile_pic,
      status: "Unpaid",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Brown",
      specialization: "Dermatologist",
      address: "12th Street, Downtown, Los Angeles",
      date: "15 August, 2024",
      time: "11:00 AM",
      image: assets.profile_pic,
      status: "Paid",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 via-purple-700 to-pink-600 min-h-screen rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-white text-center sm:text-left">
        My Appointments
      </h1>

      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex flex-col sm:flex-row items-center border-b border-gray-300 pb-6 mb-6 sm:items-start bg-gradient-to-r from-purple-900 via-blue-900 to-pink-800 rounded-lg shadow-md p-6 hover:bg-gradient-to-br from-blue-800 via-purple-800 to-pink-800 transition-all"
        >
          {/* Doctor Image */}
          <img
            src={appointment.image}
            alt={appointment.doctorName}
            className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 shadow-lg"
          />

          {/* Appointment Details */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold text-white drop-shadow-md">{appointment.doctorName}</h2>
            <p className="text-sm text-gray-300">{appointment.specialization}</p>
            <p className="text-sm text-gray-200 mt-1">Address: {appointment.address}</p>
            <p className="text-sm text-gray-200 mt-1">
              Date & Time: {appointment.date}, {appointment.time}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0 space-y-2">
            {appointment.status === "Unpaid" && (
              <button
                onClick={() => handleStatusChange(appointment.id, "Paid")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-[1rem] py-[0.5rem] rounded hover:bg-blue-700 transition-all w-full sm:w-auto shadow-md"
              >
                Pay Now
              </button>
            )}
            {appointment.status === "Paid" && (
              <button
                disabled
                className="bg-green-500 text-white px-[1rem] py-[0.5rem] rounded cursor-not-allowed w-full sm:w-auto shadow-md"
              >
                Paid
              </button>
            )}
            <button
              onClick={() => handleStatusChange(appointment.id, "Cancelled")}
              className="border border-white-100 text-red-200 px-[1rem] py-[0.5rem] rounded hover:bg-red-500 hover:text-black transition-all w-full sm:w-auto shadow-md"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
