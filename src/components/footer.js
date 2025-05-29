import { useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer style={{color:"#D3D3D3"}} ref={footerRef} className="bg-gray-900 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <h2 style={{color: "#4A5763"}} className="text-3xl font-bold ">Dwara Infras</h2>
          <p style={{color: "black"}} className="mt-3">Master of consistency and quality</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 style={{color: "#4A5763"}} className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul style={{color:"#4A5763"}} className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            {/* <li><a href="/gallery">Gallery</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={{color: "#4A5763"}} className="text-xl font-semibold mb-4">Follow Us</h3>
          <div style={{color:"#4A5763"}} className="flex justify-center md:justify-start space-x-4">
            {/* <a href="#" className="p-3 rounded-full no-hover"><FaFacebookF />Facebook</a> */}
            {/* <a href="#" className="p-3 rounded-full no-hover"><FaTwitter /></a> */}
            <a href="https://www.instagram.com/dazzler_ela_555/" className="p-3 rounded-full no-hover"><FaInstagram />Instagram</a>
            <a href="https://www.linkedin.com/company/dwara-infras/" className="p-3 rounded-full no-hover"><FaLinkedinIn />Linkedin</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div  className="text-center text-gray-400 text-sm mt-8 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Dwara Infras. All Rights Reserved.
      </div>

      <div style={{background:"#4A5763"}} className="text-center text-gray-400 text-sm mt-8 border-t border-gray-800 pt-5">
        <a href="https://www.linkedin.com/in/ajay-dhisone-134266258/">Developed and maintained by <span style={{textDecoration:"underline"}}>Ajay Dhisone</span>.</a>
      </div>
    </footer>
  );
};

export default Footer;
