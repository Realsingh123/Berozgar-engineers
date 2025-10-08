import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import emailjs from "emailjs-com"; 


const SERVICE_ID = "service_7c9u6s9";
const TEMPLATE_ID = "template_vheifua";
const PUBLIC_KEY = "NdMmz4aJ-_dRktHkDY";

const StartJourney = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        () => {
          alert("✅ Details sent successfully!");
          setShowForm(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Something went wrong, please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full flex justify-center py-16 bg-gray-50 relative">
      <div className="flex items-center justify-between w-[1000px] h-[280px] px-16 py-14 rounded-3xl bg-[#1A1732] relative overflow-hidden">
        <div className="flex flex-col gap-6 z-10">
          <h2 className="text-white text-3xl font-semibold leading-snug">
            Start Your Journey <br /> With Us Now
          </h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm h-[40px] w-[200px] px-6 py-2 rounded-full shadow-md transition-all"
          >
            Start Now
          </button>
        </div>

        <div className="flex items-center justify-center bg-[#EFFF00] w-45 h-45 rounded-full">
          <ArrowUpRight strokeWidth={3} size={100} className="text-[#2563eb]" />
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md text-gray-700"
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 backdrop-blur-md placeholder-gray-500"
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

      {/* Smooth Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default StartJourney;
