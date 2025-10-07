import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white relative">
      <div className="text-3xl font-semibold text-gray-800 cursor-pointer">Logo</div>

      <ul className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
        <li className="text-lg hover:text-blue-600 cursor-pointer transition">How It Works</li>
        <li className="text-lg hover:text-blue-600 cursor-pointer transition">Our Work</li>
        <li className="text-lg hover:text-blue-600 cursor-pointer transition">Pricing</li>
        <li className="text-lg hover:text-blue-600 cursor-pointer transition">About Us</li>
      </ul>

      <button className="hidden md:block bg-[#487BFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition">
        Book A Call
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Our Work</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About Us</li>
          <button className="bg-[#487BFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition">
            Book A Call
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
