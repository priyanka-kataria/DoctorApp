import React from "react";
import { assets } from "../assets_frontend/assets";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen py-10 px-6">
      {/* Header Section */}
      <div className="text-center text-4xl sm:text-5xl font-extrabold text-white pb-8">
        <p>
          ABOUT <span className="text-yellow-300 drop-shadow-lg">US</span>
        </p>
      </div>

      {/* About Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-xl"
          src={assets.about_image}
          alt="About Us"
        />
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-100 leading-relaxed">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and effectively.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to provide you with the best possible
            experience.
          </p>
          <b className="text-white text-xl">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for everyone.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-3xl sm:text-4xl font-bold text-white my-10">
        <p>
          WHY <span className="text-yellow-300 drop-shadow-lg">CHOOSE US</span>
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto mb-20">
        {/* Feature 1 */}
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300 text-white cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300 text-white cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300 text-white cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
}
