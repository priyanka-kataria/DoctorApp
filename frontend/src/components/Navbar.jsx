import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets_frontend/logo.svg";
import AppContext from "../context/AppContext";
// import { button } from "@/components/ui/button";

const Navbar = () => {
  const { token, setToken, userData, setUserData } = useContext(AppContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if userData is available
  useEffect(() => {
    console.log("Updated userData:", userData);
  }, [userData]);

  // Fetch user data from API when token is available
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-container_navbar")) {
        setDropdownOpen(false);
        console.log("drowpdw")
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout function
  const handleLogout = () => {
    setUserData(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? "shadow-sm" : ""} bg-gradient-to-b from-blue-500 via-blue-500 to-blue-500`}>
      <div className="navbar-content">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>
            All Doctors
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>

        <div>
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : token && userData ? ( // Ensure userData is correctly set
            <div
              className="profile-container_navbar"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={userData?.user?.image || "/placeholder.svg"}
                alt="Profile"
                className="profile-image"
              />
              {/* <span className="profile-name">
                {userData?.user?.name || "User"}
              </span> */}

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/my-appointment")}
                  >
                    My Appointments
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button key={token} onClick={() => navigate("/login")} className="bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition-all">
              Create Account
            </button> // Key forces re-render
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
