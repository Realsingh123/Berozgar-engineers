import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I sign up for the project?",
    answer:
      "You can easily sign up by contacting our team or filling out the Start Now form. Once done, we’ll reach out to discuss your project goals.",
  },
  {
    question: "What should I prepare before starting?",
    answer:
      "Prepare your business goals, references for design inspiration, and a short description of your project or service needs.",
  },
  {
    question: "Does my company need help with marketing strategies?",
    answer:
      "Yes, our team provides full digital marketing guidance — from social media to branding — tailored for your business growth.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center py-16 bg-white">
      <div className="flex items-center justify-between w-[1000px] h-[280px] px-16 py-10 rounded-3xl bg-gray-50 shadow-sm">
        {/* Left: FAQ List */}
        <div className="flex flex-col gap-4 w-[55%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 cursor-pointer transition-all"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900 text-[15px] hover:text-blue-600 transition">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus size={16} className="text-gray-500" />
                ) : (
                  <Plus size={16} className="text-gray-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Newsletter / Contact */}
        <div className="flex flex-col justify-center w-[40%]">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How We Can Help You?
          </h2>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            Follow our newsletter. We’ll regularly update our latest projects
            and availability.
          </p>
          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button className="bg-blue-600 text-white px-5 py-2 text-sm font-medium hover:bg-blue-700 transition">
              Let’s Talk
            </button>
          </div>
          <a
            href="#"
            className="text-blue-600 text-sm mt-4 flex items-center gap-1 hover:underline"
          >
            More FAQ →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
