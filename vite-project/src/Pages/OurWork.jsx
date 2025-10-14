import React from "react";
import appleImg from "../assets/apple.jpg";
import cokeImg from "../assets/coke.jpg";
import nikeImg from "../assets/nike.jpg";
import teslaImg from "../assets/tesla.jpg";
import pepsiImg from "../assets/pepsi.jpg";
import adidasImg from "../assets/adidas.jpg";

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
  {
    name: "Tesla",
    img: teslaImg,
    bg: "bg-gray-800",
  },
  {
    name: "Pepsi",
    img: pepsiImg,
    bg: "bg-blue-700",
  },
  {
    name: "Adidas",
    img: adidasImg,
    bg: "bg-gray-200",
  },
];

const OurWork = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
        Our Work
      </h2>
      <p className="text-gray-500 text-base mb-12">
        A glimpse of our portfolio
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mb-15">
        {projects.map((proj, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`w-72 h-48 rounded-3xl overflow-hidden flex items-center justify-center shadow-lg ${proj.bg}`}
            >
              <img
                src={proj.img}
                alt={proj.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="mt-4 text-base font-medium text-gray-900">
              {proj.name}
            </h4>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm h-[40px] w-[150px] px-6 py-1 rounded-full shadow-md transition-all">
        See More
      </button>
    </section>
  );
};

export default OurWork;
