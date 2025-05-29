import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/brand/Logo.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
   setIsOpen(!isOpen)
  };
  
  

  return (
    <nav
      style={{ background: "#f0f0f0" }}
      className={`fixed top-0 w-full z-50 bg-opacity-90 transition-all duration-500 ${
        scrolled ? "bg-gray-100 shadow-md" : "bg-gray-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Dwara Infras"
              width="150"
              height="150"
              loading="lazy"
              className="block "
              
            />
          </div>

          {/* Free Consultation Button */}
          <div className="md:block">
  <button
    onClick={() => window.location.href = 'tel:+919344413901'}
    className="text-sm font-serif px-4 py-2 border border-gray-800 text-gray-800 rounded-md transition duration-300 hover:bg-[#36454F] hover:text-white hover:shadow-md focus:outline-none"
  >
    Free Consultation
  </button>
</div>



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative text-gray-800 hover:text-gray-600 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none z-999 text-gray-700"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Menu (hamburger) icon
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

      {/* Mobile Menu */}
      <div style={{background:"#36454F"}}
        className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ${
          isOpen ? "translate-x-0 opacity-100 top-16" : "translate-x-full opacity-0 hidden"
        }`}
      >
        {["Home", "About", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-2xl hover:scale-105 transition-transform"
            onClick={toggleMenu} // ✅ Close menu on link click
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
