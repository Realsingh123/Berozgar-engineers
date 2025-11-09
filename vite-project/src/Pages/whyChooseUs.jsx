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
    description: "We listen, collaborate, and deliver what you need",
  },
  {
    icon: customerService,
    title: "Ongoing Support",
    description: "Continuous updates and maintenance after delivery.",
  },
];

const FeatureGrid = () => (
  <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-14 sm:gap-y-10 w-[85%]">
    {features.map((f, i) => (
      <div key={i} className="flex items-start gap-3">
        <img src={f.icon} alt={f.title} className="w-11 h-11" />
        <div className="max-w-[170px]">
          <h3 className="text-[15px] font-semibold text-gray-900 mb-1">
            {f.title}
          </h3>
          <p className="text-gray-600 text-[12px] leading-snug">
            {f.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const WhyChooseUs = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-6">

      <div className="relative text-center z-10 mb-16">
      <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
        Why Choose Us
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Trusted by <span className="text-blue-600">Clients</span> Worldwide
      </h2>
      <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
        We deliver high-quality digital solutions that combine creativity,
        strategy, and technology — helping businesses grow and stand out.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
      <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-[46%] pr-0">
        <img
          src={Mockup3}
          alt="Why Choose Us"
          className="w-[260px] h-[400px] md:w-[290px] md:h-[430px] lg:w-[310px] lg:h-[450px] object-contain translate-x-[-120px]"
        />
      </div>

      <div className="flex-1 flex justify-start lg:pl-0">
        <FeatureGrid />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
