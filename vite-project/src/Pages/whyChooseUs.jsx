  import React from "react";
  import team from "../assets/people.jpg";
  import { Search, Shield, CheckCircle, BarChart } from "lucide-react";

  const features = [
    {
      icon: <Search className="text-white w-5 h-5" />,
      title: "Discovery",
      description:
        "We dive deep to understand your goals and audience, ensuring every solution is perfectly aligned with your needs.",
    },
    {
      icon: <Shield className="text-white w-5 h-5" />,
      title: "Strategy",
      description:
        "We craft tailored, data-driven strategies designed to accelerate results and give your business the edge it deserves.",
    },
    {
      icon: <CheckCircle className="text-white w-5 h-5" />,
      title: "Execution",
      description:
        "From start to finish, our experts use the latest tech to drive flawless, measurable execution—leaving nothing to guesswork.",
    },
    {
      icon: <BarChart className="text-white w-5 h-5" />,
      title: "Measurement",
      description:
        "Track every milestone with transparent analytics, so you see what’s working and scale what matters most.",
    },
  ];

  const WhyChooseUs = () => {
    return (
      <section className="w-full bg-white py-20 px-8 sm:px-12 md:px-20 lg:px-65">
        {/* max width + center alignment */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
          {/* Left Side (Text + Image) */}
          <div className="flex flex-col justify-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-15">
                Unlock growth with secure, scalable solutions custom-fit for your
                business. Our team blends expert support and smart automation,
                making your journey seamless and rewarding.
              </p>
            </div>

            <img
              src={team}
              alt="Why Choose Us"
              className="rounded-3xl shadow-lg w-[320px] md:w-[400px] lg:w-[550px] h-auto object-cover mx-auto lg:mx-0"
            />
          </div>

          {/* Right Side (Features) */}
          <div className="flex flex-col gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="bg-indigo-600 p-5 rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-snug max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default WhyChooseUs;
