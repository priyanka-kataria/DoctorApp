// import React from "react";
// import Home from "./pages/Home";

// import { Route, Routes } from "react-router-dom";
// import Myappointment from "./pages/Myappointment";
// import Login from "./pages/Login.tsx";
// import About from "./pages/About";
// import Contact from "./pages/Contact.jsx";
// import Doct from "./pages/Doct";
// import Myprofile from "./pages/Myprofile";
// import Apoointment from "./pages/Apoointment";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AppState from "./context/AppState";

// export default function App() {
//   return (
//     <>
//       <AppState>
//         <div className="text-black-200 mx-4 sm:max[10%]">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/doctors" element={<Doct />} />
//             <Route path="/doctors/:speciality" element={<Doct />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/my-profile" element={<Myprofile />} />
//             <Route path="/my-appointment" element={<Myappointment />} />
//             <Route path="/appointment/:docId" element={<Apoointment />} />
//           </Routes>
//           <Footer />
//         </div>
//       </AppState>
//     </>
//   );
// }
import React, { useContext } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Myappointment from "./pages/Myappointment";
import Login from "./pages/Login.tsx";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Doct from "./pages/Doct";
import Myprofile from "./pages/Myprofile";
import Apoointment from "./pages/Apoointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppState from "./context/AppState";
import AppContext from "./context/AppContext.jsx";

// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const { userData,token } = useContext(AppContext);
  console.log(userData,"userData")
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  // const {  userData } = useContext(AppContext);
  // console.log(userData,"userData")
  return (
    <AppState>
    
      {/* Ensure AppState wraps everything */}
      <div className="text-black-200 mx-4 sm:max[10%]">
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/doctors"
            element={
              // <PrivateRoute>
                <Doct />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctors/:speciality"
            element={
              <PrivateRoute>
                <Doct />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <Myprofile />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-appointment"
            element={
              <PrivateRoute>
                <Myappointment />
              </PrivateRoute>
            }
          />
          <Route
            path="/appointment/:docId"
            element={
              <PrivateRoute>
                <Apoointment />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AppState>
  );
}
