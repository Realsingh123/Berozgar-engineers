import React from "react";
import appleImg from "../assets/apple.jpg";
import cokeImg from "../assets/coke.jpg";
import nikeImg from "../assets/nike.jpg";

const projects = [
  {
    name: "Apple",
    img: appleImg,
    bg: "bg-black",
  },
  {
    name: "Coca-Cola",
    img: cokeImg,
    bg: "bg-red-600",
  },
  {
    name: "Nike",
    img: nikeImg,
    bg: "bg-blue-300",
  },
];

const OurWork = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Our Work
      </h2>
      <p className="text-gray-500 text-lg mb-12">
        A glimpse of our portfolio
      </p>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-15">
        {projects.map((proj, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`w-64 h-64 rounded-3xl overflow-hidden flex items-center justify-center shadow-lg ${proj.bg}`}
            >
              <img
                src={proj.img}
                alt={proj.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="mt-4 text-xl font-medium text-gray-900">
              {proj.name}
            </h4>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm h-[40px] w-[200px] px-6 py-2 rounded-full shadow-md transition-all">
        See More
      </button>
    </section>
  );
};

export default OurWork;
