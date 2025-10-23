import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 mt-auto">
   
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-6xl mx-auto">
  
        <div>
          <h3 className="text-white text-2xl font-semibold mb-2">GreenNest</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Your trusted indoor plant care & store platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-5 text-lg">
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaPinterest />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
