import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/Logo.png";

const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50 rounded-b-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold flex text-green-600">
            <img src={logo} alt="Logo" className="h-[2.2rem] w-auto mr-2" />
            Daanapaani
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium border-b-2 border-green-600"
                  : "text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium border-b-2 border-green-600"
                  : "text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium border-b-2 border-green-600"
                  : "text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
            >
              Services
            </NavLink>
          </nav>

          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors duration-200"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
            isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium border-b-2 border-green-600"
                  : "block text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium border-b-2 border-green-600"
                  : "block text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium border-b-2 border-green-600"
                  : "block text-gray-700 font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-colors duration-200"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>

            {/* CTA Button for Mobile */}
            <NavLink
              to="/contact"
              className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-2 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
