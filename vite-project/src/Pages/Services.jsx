import React from "react";
import { Code2, PenTool, Image as ImageIcon, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-blue-600" />,
    title: "Front-End Development",
    description:
      "Building fast, responsive, and modern web interfaces with HTML, CSS, JavaScript, and React for an exceptional user experience.",
  },
  {
    icon: <PenTool className="w-7 h-7 text-pink-600" />,
    title: "Logo Creation",
    description:
      "Designing memorable, minimal, and meaningful brand logos that capture your identity and leave a lasting impression.",
  },
  {
    icon: <ImageIcon className="w-7 h-7 text-yellow-500" />,
    title: "Thumbnail Design",
    description:
      "Creating catchy, scroll-stopping thumbnails that boost clicks, engagement, and visibility on YouTube & social media.",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-purple-600" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive, visually appealing user interfaces with a focus on smooth navigation and modern aesthetics.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-12 lg:px-20 text-center overflow-hidden"id="services">
      {/* Decorative Gradient Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-40"></div>

      {/* Section Header */}
      <div className="relative max-w-3xl mx-auto mb-16">
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          Our Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Crafting <span className="text-blue-600">Digital Experiences</span> That Inspire
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          From pixel-perfect web apps to stunning brand visuals, we blend creativity and code to elevate your digital presence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:-translate-y-2"
          >
            <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-50 to-white mx-auto mb-6 group-hover:scale-110 group-hover:shadow-inner transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
