import React from "react";
import { Link } from "react-router-dom";
import { ShieldIcon } from "./SVGIcons";

const Header = () => (
  <header className="flex justify-between items-center px-4 py-4 md:px-10 lg:px-20 bg-gray-900 border-b border-gray-800 shadow-xl fixed w-full z-10 backdrop-blur-sm bg-gray-900/90">
    
    {/* Logo */}
    <div className="flex items-center space-x-2 text-white font-bold text-xl">
      <ShieldIcon className="w-7 h-7 text-cyan-400" />
      {/* Clicking logo sends user to Home page */}
      <Link to="/">Exe2Vision</Link>
    </div>

    {/* Navigation */}
    <nav className="flex items-center space-x-6">

      <Link
        to="/about"
        className="text-gray-300 hover:text-cyan-400 transition-colors hidden sm:block text-sm md:text-base"
      >
        About the Research
      </Link>

      <Link
        to="/login"
        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-base"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
      >
        Sign Up
      </Link>

    </nav>
  </header>
);

export default Header;
