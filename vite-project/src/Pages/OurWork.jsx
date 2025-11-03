import React from "react";
import img1 from "../assets/eduweb.png";
import img2 from "../assets/coffee.png";
import img3 from "../assets/elephant.png";
import img4 from "../assets/taxi.png";

const projects = [
  {
    title: "EduWeb",
    category: "Education",
    tech: ["React", "Tailwind CSS"],
    img: img1,
    color: "from-green-100 to-green-200",
  },
  {
    title: "Café Aura",
    category: "Logo Design",
    tech: ["Figma", "Photoshop"],
    img: img2,
    color: "from-rose-100 to-rose-200",
  },
  {
    title: "National Parks",
    category: "Thumbnail Creation",
    tech: ["Illustrator", "Canva"],
    img: img3,
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "Online Taxi Service",
    category: "Transportation Service",
    tech: ["HTML", "CSS", "JavaScript"],
    img: img4,
    color: "from-fuchsia-100 to-fuchsia-200",
  },
];

const OurWork = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="text-left mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Stellar Projects
        </h2>
        <p className="text-gray-500 text-base mt-1">A Glimpse of Our Work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br ${p.color}`}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
            </div>

            <div className="relative z-10 mt-44 md:mt-56">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {p.title}
              </h3>
              <p className="text-base text-gray-700 mb-3">{p.category}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  Tech Stack:
                </span>
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/80 border border-gray-300 text-gray-700 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
