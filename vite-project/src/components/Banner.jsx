import React from "react";
import Appontimg from "../assets_frontend/appointment_img.png";

export default function Banner() {
  return (<div class="flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
<div class="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5" >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p> Book Appointment</p>
          <p className="mt-4"> With 100+ Trusted Doctors</p>
       <button onClick={() => navigate("/login")} class="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all ">Create account</button>
          
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md "
          src={Appontimg}
          alt=""
        />
      </div>
    </div>
  );
}
