import React from "react";
import whyusImg from "../assets/why.png";

const features = [
  {
    title: "Discovery",
    description:
      "We dive deep to understand your goals and audience, ensuring every solution is perfectly aligned with your needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Strategy",
    description:
      "We craft tailored, data-driven strategies designed to accelerate results and give your business the edge it deserves.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Execution",
    description:
      "From start to finish, our experts use the latest tech to drive flawless, measurable execution—leaving nothing to guesswork.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Measurement",
    description:
      "Track every milestone with transparent analytics, so you see what’s working and scale what matters most.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-5">
                Why Choose Us?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-12">
                Unlock growth with secure, scalable solutions custom-fit for your business. Our team blends expert support and smart automation, making your journey seamless and rewarding.
              </p>
            </div>
            <div className="w-full">
              <img
                src={whyusImg}
                alt="Why Choose Us"
                className="rounded-2xl shadow-lg w-3/4 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                  {feat.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
