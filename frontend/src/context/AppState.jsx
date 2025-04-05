import React, { useEffect, useState } from "react";
import { doctors } from "../assets_frontend/assets";
import AppContext from "./AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppState = (props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // Load token on app start
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    console.log(storedToken, "Stored Token");

    if (storedToken) {
      setToken(storedToken);
      navigate("/");
    }
  }, []);

  // Fetch user data when the token is updated
  useEffect(() => {
    const fetchUserData = async (currentToken) => {
      if (!currentToken) return; // Don't fetch if token is missing

      try {
        console.log(currentToken, "Token from frontend");

        const response = await axios.post(
          "http://localhost:8000/api/user/getuser",
          {},
          {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
          }
        );

        console.log("Response from fetchUserData:", response);
        if (response.status === 200) {
          setUserData(response.data);
          localStorage.setItem("userData", JSON.stringify(response.data)); // Persist user data
        } else {
          console.error("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const latestToken = localStorage.getItem("authToken"); // Get the latest token
    fetchUserData(latestToken);
  }, [token]); // Runs when `token` changes

  return (
    <AppContext.Provider value={{ doctors, token, setToken, userData, setUserData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
