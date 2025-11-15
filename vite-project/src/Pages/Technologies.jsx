import React from "react";

const Technologies = () => {
  const technologies = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      id="Technologies"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-1/3 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/3 w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
            Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            We <span className="text-blue-600">Work With</span>
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            The latest technologies we use to craft seamless, interactive, and
            visually stunning digital experiences.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6">
          <div
            className="flex whitespace-nowrap animate-scroll"
            style={{
              animation: "scroll 10s linear infinite",
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-5 sm:mx-8 md:mx-10 min-w-[80px] sm:min-w-[90px] md:min-w-[100px] group"
              >
                <div className="p-3 sm:p-4 md:p-5 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 mt-2 sm:mt-3 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Desktop speed */
  .animate-scroll {
    animation: scroll 10s linear infinite;
  }

  /* Tablet speed */
  @media (max-width: 1024px) {
    .animate-scroll {
      animation-duration: 15s !important;
    }
  }

  /* Mobile speed (Small screens) */
  @media (max-width: 640px) {
    .animate-scroll {
      animation-duration: 20s !important;
    }
  }
`}</style>
    </section>
  );
};

export default Technologies;
