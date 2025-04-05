import React from "react";
import logo from "../assets_frontend/logo.svg";

export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 text-white py-12">
      <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-14 mx-auto max-w-7xl px-6">
        {/* Logo and About Section */}
        <div>
          <img className="mb-5 w-40" src={logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-100 leading-relaxed text-lg">
            Hi, I’m Priyanka Kataria, a B.Tech 3rd Year student in Energy
            Science & Engineering at IIT Delhi. Passionate about sustainable
            energy solutions, I am open to collaboration opportunities. Feel
            free to connect!
          </p>
        </div>

        {/* Navigation Section */}
        <div>
  <p className="text-2xl font-semibold mb-5 text-yellow-300">NAVIGATION</p>
  <ul className="flex flex-col gap-3 text-gray-100 text-lg">
    {/* Home Link */}
    <li className="hover:text-yellow-500 transition duration-300 cursor-pointer self-start">
      <a href="/" className="block">
        Home
      </a>
    </li>

    {/* GitHub Link */}
    <li className="hover:text-yellow-500 transition duration-300 cursor-pointer self-start">
      <a
        href="https://github.com/priyanka-kataria"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        GitHub
      </a>
    </li>

    {/* Privacy Policy Link */}
    <li className="hover:text-yellow-500 transition duration-300 cursor-pointer self-start">
      <a href="/privacy-policy" className="block">
        Privacy Policy
      </a>
    </li>
  </ul>
</div>


        {/* Contact Section */}
        <div>
          <p className="text-2xl font-semibold mb-5 text-yellow-300">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-100 text-lg">
            <li>Tel: +91 9116821012</li>
            <li>Email: priyankaiitd22@gmail.com</li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/priyanka-kataria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition duration-300"
              >
                Priyanka Kataria
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-base text-gray-200">
          © 2025 Priyanka Kataria | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
