// import React from "react";

// const Technologies = () => {
//   const technologies = [
//     { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//     { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     // { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//     // { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//     { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
//     // { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
//     { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
//     // { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-17">
//           Technologies We Work With
//         </h2>

//         {/* Logos grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12 items-center justify-center">
//           {technologies.map((tech) => (
//             <div key={tech.name} className="flex flex-col items-center justify-center space-y-2">
//               <img
//                 src={tech.logo}
//                 alt={tech.name}
//                 className="h-12 object-contain transition-transform duration-300 hover:scale-105"
//               />
//               <p className="text-sm font-medium text-gray-700">{tech.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Technologies;


import React from "react";

const Technologies = () => {
  const technologies = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          Technologies We Work With
        </h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap [animation:scroll_20s_linear_infinite]"
            style={{
              animation: "scroll 20s linear infinite",
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
              >
                <div className="p-4 bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-100 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 mt-3">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes for Tailwind v4 */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
