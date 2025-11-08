import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logoImg from "../assets/tpLogo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-5 md:ml-30 ml-0">
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
          <button className="bg-[#487BFF] text-white px-7 h-10 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition mt-1">
            Contact Us
          </button>
        </div>
        <div className="grid grid-cols-2 gap-20 md:gap-24 justify-center md:justify-start mt-10 md:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">Home</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">About us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Why choose us</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Our work</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Testimonials</li>

          </ul>
          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">Front end development</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">UI/UX design</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Branding</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Technologies</li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-start mt-10 lg:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li className="hover:text-[#487BFF] cursor-pointer transition">FAQS</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Start your Journey</li>
            <li className="hover:text-[#487BFF] cursor-pointer transition">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p>© 2025 Ignite solutions. - All Rights Reserved</p>
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
