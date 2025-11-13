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
    link: "https://eduweb-clone.vercel.app/",
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
    link: "https://taxi-service-wepage.vercel.app/",
  },
];

const OurWork = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-12"
      id="our-work"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
          Our Work
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          A <span className="text-blue-600">Glimpse</span> of Our Work
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${p.color}`}
          >
            {/* Image Layer */}
            <div className="absolute inset-0">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 mt-40 sm:mt-52 md:mt-56 px-5 pb-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                {p.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                {p.category}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-900">
                  Tech Stack:
                </span>
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] sm:text-xs bg-white/80 border border-gray-300 text-gray-700 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
