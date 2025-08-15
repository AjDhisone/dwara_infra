import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/brand/Logo.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav
      style={{ background: "#f0f0f0" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Dwara Infras"
              loading="lazy"
              className="w-28 md:w-36 lg:w-44"
            />
          </div>

          {/* Free Consultation Button */}
          <div className="hidden md:block">
            <button
              onClick={() => (window.location.href = "tel:+919344413901")}
              className="text-sm md:text-base font-serif px-4 py-2 border border-gray-800 text-gray-800 rounded-md transition duration-300 hover:bg-[#36454F] hover:text-white focus:outline-none"
            >
              Free Consultation
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg items-center">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={closeAllMenus}
                className="relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300"
              >
                {item}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300"
              >
                Client Portal
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link
                    to="https://dwarainfras.zohodesk.in/portal/en/newticket?departmentId=205469000000010772&layoutId=205469000000011350"
                    onClick={closeAllMenus}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Raise a Ticket
                  </Link>
                  <Link
                    to="https://books.zohosecure.in/portal/dwarainfras"
                    onClick={closeAllMenus}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Manage Transactions
                  </Link>
                  <a
                    href="https://tally.so/r/nGAx12"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Requirements
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none text-gray-700"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
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

      {/* Mobile Menu */}
      <div
        style={{ background: "#36454F" }}
        className={`md:hidden fixed top-20 left-0 w-full text-white flex flex-col items-center gap-6 py-10 transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 hidden"
        }`}
      >
        {["Home", "About"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={closeAllMenus}
            className="text-xl relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300"
          >
            {item}
          </Link>
        ))}

        {/* Mobile Dropdown */}
        <div className="w-full flex flex-col items-center">
          <button
            onClick={toggleMobileDropdown}
            className="text-xl font-semibold flex items-center gap-1 justify-center"
          >
            Client Portal
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                mobileDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {mobileDropdownOpen && (
            <div className="mt-2 flex flex-col items-center">
              <a
                href="https://dwarainfras.zohodesk.in/portal/en/newticket?departmentId=205469000000010772&layoutId=205469000000011350"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="relative block py-2 hover:underline"
              >
                Raise a Ticket
              </a>
              <a
                href="https://books.zohosecure.in/portal/dwarainfras"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="relative block py-2 hover:underline"
              >
                Manage Transactions
              </a>
              <a
                href="https://tally.so/r/nGAx12"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="relative block py-2 hover:underline"
              >
                Requirements
              </a>
            </div>
          )}
        </div>

        <Link
          to="/contact"
          onClick={closeAllMenus}
          className="text-xl relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
