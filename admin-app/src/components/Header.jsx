import React from "react";
import { Link } from "react-router-dom";
import { ShieldIcon } from "./SVGIcons";
import { UserCogIcon } from "./SVGIcons";
import { LogOutIcon } from "./SVGIcons";

const Header = () => (
  <header className="flex justify-between items-center px-4 py-4 md:px-10 lg:px-20 bg-gray-900 border-b border-gray-800 shadow-xl fixed w-full z-10 backdrop-blur-sm bg-gray-900/90">
    
    {/* Logo */}
    <div className="flex items-center space-x-2 text-white font-bold text-xl">
      <ShieldIcon className="w-7 h-7 text-cyan-400" />
      {/* Clicking logo sends user to Home page */}
      <Link to="/admin-dashboard">Exe2Vision</Link>
    </div>

    {/* Navigation */}
    <nav className="flex items-center space-x-6">

      {/* Admin Dashboard Link */}
      <Link
        to="/admin-dashboard"
        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-base flex items-center space-x-2 font-medium py-1 px-2 rounded-lg"
      >
        <UserCogIcon className="w-4 h-4 text-cyan-400" />
        <span>Admin Dashboard</span>
      </Link>
      
      {/* Logout Button/Link */}
      <Link
        to="/"
        // Use the same styling as the previous button
        className="flex items-center space-x-1.5 text-gray-300 hover:text-red-400 transition-colors text-sm md:text-base font-medium border border-gray-700 hover:border-red-500 py-1.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700/50"
        onClick={() => {
            // Placeholder for optional pre-navigation logic (e.g., clearing local state)
            console.log("Redirecting to login...");
        }}
      >
        <span>Logout</span>
        <LogOutIcon className="w-4 h-4" />
      </Link>

     

    </nav>
  </header>
);

export default Header;
