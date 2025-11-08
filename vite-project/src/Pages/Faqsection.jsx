import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in custom website development, UI/UX design, logo creation, branding, and complete digital solutions tailored for startups and small businesses.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The duration depends on your project requirements. A basic business website usually takes 1–2 weeks, while complex or custom web apps may take 3–5 weeks.",
  },
  {
    question: "How much do you charge for a website?",
    answer:
      "Our pricing depends on the type, size, and complexity of your project. We offer affordable packages for startups and can customize quotes as per your needs.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Yes, absolutely. Every website we create is fully responsive, ensuring it looks perfect on all devices — mobiles, tablets, and desktops.",
  },
  {
    question: "Do you also provide website maintenance or updates?",
    answer:
      "Yes, we offer ongoing website maintenance plans to keep your site updated, secure, and performing smoothly even after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course! We can redesign or modernize your existing website while maintaining your brand identity and improving its performance and look.",
  },
  {
    question: "How do I get started with you?",
    answer:
      "Simply contact us through our inquiry form or email. We’ll discuss your project goals, share a proposal, and start once everything is finalized.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-[#F9FAFB] relative overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12 relative">
        Frequently Asked Questions
        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </h2>

      {/* Main Container */}
      <div className="flex items-start justify-between w-[90%] max-w-6xl px-10 py-12 rounded-3xl bg-white shadow-xl backdrop-blur-sm">
        {/* Left: FAQ List */}
        <div className="flex flex-col gap-6 w-[55%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl px-5 py-4 transition-all duration-300 cursor-pointer hover:shadow-md ${
                openIndex === index ? "bg-blue-50 border-blue-300" : "bg-white"
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900 text-[15px]">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus size={18} className="text-blue-600" />
                ) : (
                  <Plus size={18} className="text-gray-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 text-sm mt-3 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA / Contact Box */}
        <div className="flex flex-col justify-center w-[40%] bg-gradient-to-br from-blue-600 to-blue-500 text-white p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">How We Can Help You?</h2>
          <p className="text-blue-50 text-sm mb-6 leading-relaxed">
            Let’s discuss your business goals and build something meaningful
            together. Our team is always ready to assist you with the best
            digital solutions.
          </p>
          <button className="bg-white text-blue-600 font-medium px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
