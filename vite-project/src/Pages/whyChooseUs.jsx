import React from "react";
import Mockup3 from "../assets/mockup3.png";
import creative from "../assets/color.png";
import monitor from "../assets/monitor.png";
import bulb from "../assets/bulb.png";
import hourglass from "../assets/hourglass.png";
import handshake from "../assets/handshake.png";
import customerService from "../assets/customer-service.png";

const features = [
  {
    icon: creative,
    title: "Creative Excellence",
    description: "Stunning designs that bring your brand to life.",
  },
  {
    icon: monitor,
    title: "Web Development Expertise",
    description: "Modern, responsive, and high-performing websites.",
  },
  {
    icon: bulb,
    title: "Brand Identity Design",
    description: "Unique logos that make your business stand out.",
  },
  {
    icon: hourglass,
    title: "Fast Turnaround",
    description: "Delivering projects on time without compromising quality.",
  },
  {
    icon: handshake,
    title: "Client-Centric Approach",
    description: "We listen, collaborate, and deliver what you need.",
  },
  {
    icon: customerService,
    title: "Ongoing Support",
    description: "Continuous updates and maintenance after delivery.",
  },
];

const FeatureGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 md:gap-x-14 md:gap-y-10 w-full sm:w-[90%] lg:w-[85%] mx-auto">
    {features.map((f, i) => (
      <div
        key={i}
        className="flex items-start gap-3 hover:translate-y-[-4px] transition-transform duration-300"
      >
        <img
          src={f.icon}
          alt={f.title}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
        />
        <div className="max-w-[200px] sm:max-w-[180px] md:max-w-[200px]">
          <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-1">
            {f.title}
          </h3>
          <p className="text-gray-600 text-[12px] sm:text-[13px] leading-snug">
            {f.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const WhyChooseUs = () => (
  <section
    className="w-full max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-6"
    id="why"
  >
    {/* Header Section */}
    <div className="relative text-center z-10 mb-14 sm:mb-16">
      <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
        Why Choose Us
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Trusted by <span className="text-blue-600">Clients</span> Nationwide
      </h2>
      <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
        We deliver high-quality digital solutions that combine creativity,
        strategy, and technology — helping businesses grow and stand out.
      </p>
    </div>

    {/* Content Section */}
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">
      {/* Left Mockup */}
      <div className="flex justify-center lg:justify-end w-full lg:w-[46%]">
        <img
          src={Mockup3}
          alt="Why Choose Us"
          className="w-[220px] sm:w-[250px] md:w-[290px] lg:w-[320px] xl:w-[340px] h-auto object-contain transform lg:translate-x-[-60px] xl:translate-x-[-80px]"
        />
      </div>

      {/* Right Features */}
      <div className="flex-1 flex justify-center lg:justify-start w-full">
        <FeatureGrid />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
