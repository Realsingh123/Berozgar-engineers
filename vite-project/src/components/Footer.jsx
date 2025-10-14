import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 text-center md:text-left">
        {/* Left Section - Logo + Socials + Button */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:ml-30 ml-0">

          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">Logo</div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-7 text-[#487BFF]">
            <a href="#" className="hover:text-[#3763e2] transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#3763e2] transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#3763e2] transition">
              <FaFacebookF size={20} />
            </a>
          </div>

          {/* Contact Button */}
          <button className="bg-[#487BFF] text-white px-7 h-10 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition">
            Contact Us
          </button>
        </div>

        {/* Center Section - Links Column 1 & 2 */}
        <div className="grid grid-cols-2 gap-20 md:gap-24 justify-center md:justify-start mt-10 md:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">Work With Us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Advertise With Us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Support Us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Business Advices</li>
          </ul>

          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">Private Coaching</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Our Work</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Our Commitment</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Our Team</li>
          </ul>
        </div>

        {/* Right Section - More Links */}
        <div className="flex justify-center md:justify-start mt-10 lg:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">FAQs</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Report a Bug</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p>© 2025 Logo Inc. - All Rights Reserved</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
