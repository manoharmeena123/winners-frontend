import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 mt-0">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.winnersinstitute.in/assets/logo-.svg"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 font-medium flex items-center border border-black rounded py-2 px-10">
              Exams
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-200  py-2 rounded-md shadow-md z-10 w-full">
              <Link
                to="/mppsc"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                MPPSC
              </Link>
              <Link
                to="/ssc"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                SSC
              </Link>
              <Link
                to="/banking"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                Banking
              </Link>
              <Link
                to="/railway"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                Railway
              </Link>
              <Link
                to="/mp-esb"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                MP ESB
              </Link>
              <Link
                to="/defence"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                Defence
              </Link>
              <Link
                to="/tet-exams"
                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white"
              >
                TET Exams
              </Link>
            </div>
          </div>
          <Link to="/" className="text-red-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 font-medium">
            About
          </Link>
          <Link to="/student-zone" className="text-gray-800 font-medium">
            Student Zone
          </Link>
          <Link to="/publication" className="text-gray-800 font-medium">
            Publication
          </Link>
        </div>

        {/* Course Login Button */}
        <div>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md font-medium">
            Courses Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
