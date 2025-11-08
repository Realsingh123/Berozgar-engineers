import React from "react";
import logo from "../assets/tpLogo.png"; // Adjust path as needed

const AboutSection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#0F0F10] via-[#111111] to-[#1A1A1C] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      id="About-us"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-[-6rem]" />
        <div className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-[-4rem]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left - Logo / Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-pink-500 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img
              src={logo}
              alt="Ignite Solutions Logo"
              className="relative w-60 md:w-72 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right - About Text */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-center md:text-left">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              Ignite Solutions
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            At <span className="font-semibold text-white">Ignite Solutions</span>, we
            believe in transforming ideas into impactful digital realities. We
            are a passionate team of creators, developers, and strategists
            dedicated to helping businesses build strong digital identities and
            elevate their online presence.
          </p>

          <p className="text-gray-400 text-base leading-relaxed mb-8">
            From modern web design and branding to marketing strategies and
            creative content, we bring innovation, performance, and aesthetics
            together. Our mission is simple — to ignite your brand’s digital
            growth with precision, creativity, and technology.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
