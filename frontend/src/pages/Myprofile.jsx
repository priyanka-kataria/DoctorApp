import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "./myprofile.css"; // External CSS file
import axios from "axios";

export default function MyProfile() {
  const { userData, setUserData, token } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(userData?.user || {});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data to the database
  const handleSave = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/user/update_profile", 
        formData, // ✅ Send updated user data in the request body
  
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Include auth token
          },
        }
      );
  
      if (response.status === 200) {
        // ✅ Update the user context with new data
        setUserData((prev) => ({ ...prev, user: response.data }));
  
        setIsEdit(false);
        alert("Profile updated successfully!");
      } else {
        throw new Error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    {/* Left Section: Profile Card */}
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6 md:w-1/3">
      <img
        src={formData.image || "/placeholder.svg"}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-md"
      />
      <p className="mt-4 text-xl font-bold">{formData.name}</p>
      <p className="text-sm text-gray-200">{formData.role || "Patient"}</p>

      {/* Appointments Counter */}
      <div className="mt-6 bg-white text-blue-700 px-4 py-2 rounded-full shadow-md">
        Appointments: <span className="font-semibold">12</span>
      </div>
    </div>

    {/* Right Section: Profile Details */}
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 md:w-2/3">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Profile Settings</h3>
        {!isEdit && (
          <button
            onClick={() => setIsEdit(true)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Contact Information */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-700 mb-4">Contact Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <p className="text-gray-800">{formData.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone:</label>
            {isEdit ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{formData.phone || "-"}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Address:</label>
            {isEdit ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{formData.address || "-"}</p>
            )}
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <h4 className="text-lg font-medium text-gray-700 mb-4">Basic Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Gender:</label>
            {isEdit ? (
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-800">{formData.gender || "-"}</p>
            )}
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Birthday:</label>
            {isEdit ? (
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{formData.dob || "-"}</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {isEdit && (
        <div className="flex justify-end mt-6 gap-x-4">
          {/* Cancel Button */}
          <button
            onClick={() => setIsEdit(false)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Cancel
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:scale-[1.05] transition-transform duration-[250ms]"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  </div>
);
}