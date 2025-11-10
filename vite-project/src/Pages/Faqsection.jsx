import React, { useState } from "react";
import { Plus, Minus, X } from "lucide-react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9teojkc";
const TEMPLATE_ID = "template_gn1u8ie";
const PUBLIC_KEY = "JAo7Y1cy48wQ_h_Lh";

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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        alert("✅ Details sent successfully!");
        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      })
      .catch(() => {
        alert("❌ Something went wrong, please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-[#F9FAFB] relative overflow-hidden" id="FAQ">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12 relative">
        Frequently Asked Questions
        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </h2>

      <div className="flex items-start justify-between w-[90%] max-w-6xl px-10 py-12 rounded-3xl bg-white shadow-xl backdrop-blur-sm">
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

        <div className="flex flex-col justify-center w-[40%] bg-gradient-to-br from-blue-600 to-blue-500 text-white p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">How We Can Help You?</h2>
          <p className="text-blue-50 text-sm mb-6 leading-relaxed">
            Let’s discuss your business goals and build something meaningful
            together. Our team is always ready to assist you with the best
            digital solutions.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-600 font-medium px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition"
          >
            Let’s Talk
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300">
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl p-10 rounded-3xl w-[550px] animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
            >
              <X size={22} />
            </button>
            <h3 className="text-2xl font-semibold text-[#1A1732] mb-6 text-center">
              Let’s Get Started 🚀
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-[15px]"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500 text-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500 text-gray-700"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500 text-gray-700"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md appearance-none ${
                  formData.service ? "text-gray-700 bg-white" : "text-gray-500"
                }`}
                style={{ color: formData.service ? "#374151" : "#6B7280" }}
              >
                <option value="">Select Service</option>
                <option value="Frontend Web Development">
                  Frontend Web Development
                </option>
                <option value="Thumbnail Design">Thumbnail Design</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Logo Creation">Logo Creation</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500 text-gray-700"
              />
              <button
                type="submit"
                className="mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-full text-[16px] font-medium transition-all shadow-md hover:shadow-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Details"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
