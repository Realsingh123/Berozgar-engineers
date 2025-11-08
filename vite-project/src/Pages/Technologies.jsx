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
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden" id="Technologies">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
            Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            We <span className="text-blue-600">Work With</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            The latest technologies we use to craft seamless, interactive, and
            visually stunning digital experiences.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <div
            className="flex whitespace-nowrap animate-scroll"
            style={{
              animation: "scroll 25s linear infinite",
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-10 min-w-[100px] group"
              >
                <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 mt-3 group-hover:text-blue-600 transition-colors duration-300">
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
      `}</style>
    </section>
  );
};

export default Technologies;
