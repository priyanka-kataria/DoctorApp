import React, { useContext, useState } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("sign-up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { setToken } = useContext(AppContext);

  // Sign-up function
  const signUp = async () => {
    try {
      const response = await axios.post("https://doctor-app-lac.vercel.app/api/user/register", {
        name,
        email,
        password,
        phone,
      });
      localStorage.setItem("authToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Sign-up failed. Please try again.");
    }
  };

  // Sign-in function
  const signIn = async () => {
    try {
      const response = await axios.post("https://doctor-app-lac.vercel.app/api/user/login", {
        email,
        password,
      },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // Include credentials if needed
        });
      localStorage.setItem("authToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (state === "sign-up") {
      await signUp();
    } else {
      await signIn();
    }
  };

  return (
    <div className="flex items-start justify-center bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 px-4 py-4">
      {/* Error Popup */}
      {errorMessage && (
        <div className="absolute top-[60px] left-3/4 transform -translate-x-1/2 bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg z-50 flex flex-col items-center">
          <p className="text-1x font-small">{errorMessage}</p>
          <button
            onClick={() => setErrorMessage(null)}
            className="mt-3 bg-white text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-100 transition duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      )}


      <form
        className="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md mt-[50px]"
        onSubmit={onSubmit}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
          {state === "sign-up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-600 text-center">
          Please {state === "sign-up" ? "sign up" : "log in"} to book an appointment.
        </p>

        {/* Name Input */}
        {state === "sign-up" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            />
          </div>
        )}

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone Input */}
        {state === "sign-up" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-[10px] rounded-lg font-medium transition duration-[300ms] shadow-md"
        >
          {state === "sign-up" ? "Create Account" : "Login"}
        </button>

        {/* Toggle Between Sign-Up and Login */}
        {state === "sign-up" ? (
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-blue-600 underline cursor-pointer hover:text-blue-700"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("sign-up")}
              className="text-blue-600 underline cursor-pointer hover:text-blue-700"
            >
              Create one here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
