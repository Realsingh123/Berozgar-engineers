import React from "react";
import phoneMockup from "../assets/phone-mockup.png";
import customerReview from "../assets/customer-review.png";
import customerService from "../assets/customer-service.png";
import cyberSecurity from "../assets/cyber-security.png";
import efficiency from "../assets/efficiency.png";
import handshake from "../assets/handshake.png";
import cloudServer from "../assets/cloud-server.png";

const features = [
  {
    icon: customerReview,
    title: "Customer Reviews",
    description: "Genuine feedback from satisfied clients.",
  },
  {
    icon: customerService,
    title: "Responsive Support",
    description: "Prompt and friendly customer service.",
  },
  {
    icon: cyberSecurity,
    title: "Cyber Security",
    description: "Advanced data protection & confidentiality.",
  },
  {
    icon: efficiency,
    title: "Efficiency",
    description: "Fast delivery & optimized results.",
  },
  {
    icon: handshake,
    title: "Collaboration",
    description: "Transparent partnerships and reliability.",
  },
  {
    icon: cloudServer,
    title: "Cloud Solutions",
    description: "Modern, scalable cloud/server support.",
  },
];

const FeatureGrid = () => (
  <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-14 sm:gap-y-10 w-[85%]">
    {features.map((f, i) => (
      <div key={i} className="flex items-start gap-3">
        <img src={f.icon} alt={f.title} className="w-11 h-11" />
        <div className="max-w-[170px]">
          <h3 className="text-[15px] font-semibold text-gray-900 mb-1">
            {f.title}
          </h3>
          <p className="text-gray-600 text-[12px] leading-snug">
            {f.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const WhyChooseUs = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-6">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
      <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-[46%] pr-0">
        <img
          src={phoneMockup}
          alt="Why Choose Us"
          className="w-[260px] h-[400px] md:w-[290px] md:h-[430px] lg:w-[310px] lg:h-[450px] object-contain translate-x-[-120px]"
        />
      </div>

      <div className="flex-1 flex justify-start lg:pl-0">
        <FeatureGrid />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
