import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/brand/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  return (
    <nav className="bg-gradient-to-l from-charcoal to-lightGray shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand name */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Dwara Infras Icon" width="170" height="170" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="relative text-lightGray hover:text-white transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </Link>
            <Link 
              to="/about" 
              className="relative text-lightGray hover:text-white transition-colors duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link 
              to="/gallery" 
              className="relative text-lightGray hover:text-white transition-colors duration-300 group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link 
              to="/contact" 
              className="relative text-lightGray hover:text-white transition-colors duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 transition-colors duration-300"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full screen mobile menu with transition */}
      <div 
        className={`fixed inset-0 bg-charcoal transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className="relative text-2xl text-lightGray transition-all duration-300 transform hover:scale-110 group"
            onClick={toggleMenu}
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-2xl text-lightGray transition-all duration-300 transform hover:scale-110 group"
            onClick={toggleMenu}
          >
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/gallery"
            className="relative text-2xl text-lightGray transition-all duration-300 transform hover:scale-110 group"
            onClick={toggleMenu}
          >
            Gallery
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/contact"
            className="relative text-2xl text-lightGray transition-all duration-300 transform hover:scale-110 group"
            onClick={toggleMenu}
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
