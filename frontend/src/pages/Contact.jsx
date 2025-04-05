import contactimg from "../assets_frontend/contact_image.png";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <div className="text-center text-4xl md:text-5xl font-extrabold text-white pb-6 px-4">
        <p>
          Contact <span className="text-yellow-300">ME</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-auto max-w-7xl px-6">
        {/* Image Section */}
        <img
          className="w-full max-w-[300px] md:max-w-[360px] rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
          src={contactimg}
          alt="Contact"
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-6 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 w-full max-w-[400px] sm:max-w-[500px]">
          <p className="text-xl md:text-2xl font-bold text-gray-800">MY DETAILS</p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Priyanka Kataria <br />
            B.Tech 3rd Year, Energy Science & Engineering <br />
            Indian Institute of Technology (IIT) Delhi
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hauz Khas <br />
            New Delhi, India <br />
            110016
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Tel: +91 9116821012 <br />
            Email: priyankaiitd22@gmail.com
          </p>
          <p className="text-sm md:text-base text-gray-600 italic">
            Passionate about sustainable energy solutions and open to collaboration opportunities. Feel free to reach out!
          </p>
          {/* Button with external link */}
          <a
            href="https://www.linkedin.com/in/priyanka-kataria-4a4aba255/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:scale-105 transition-transform duration-300 shadow-md w-full text-center"
          >
            Connect with Me
          </a>
        </div>
      </div>

      {/* Footer Animation */}
      <div className="w-full h-[100px] sm:h-[150px] bg-gradient-to-p to-transparent"></div>
    </div>
  );
}
