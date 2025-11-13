import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9teojkc";
const TEMPLATE_ID = "template_gn1u8ie";
const PUBLIC_KEY = "JAo7Y1cy48wQ_h_Lh";

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
    <section
      className="w-full flex justify-center py-16 px-6 sm:px-8 bg-gray-50 relative"
      id="Journey"
    >
      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl md:h-[240px] px-8 sm:px-10 md:px-14 py-10 md:py-12 rounded-3xl bg-[#1A1732] relative overflow-hidden text-center md:text-left"
      >
        {/* Left Section */}
        <div className="flex flex-col gap-6 z-10 mb-6 md:mb-0">
          <h2 className="text-white text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold leading-snug">
            Start Your Journey <br className="hidden sm:block" /> With Us Now
          </h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm sm:text-base h-[36px] w-[130px] sm:w-[140px] rounded-full shadow-md transition-all mx-auto md:mx-0"
          >
            Start Now
          </button>
        </div>

        {/* Right Circle Icon */}
        <div className="flex items-center justify-center bg-[#EFFF00] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-full z-10">
          <ArrowUpRight
            strokeWidth={3}
            size={60}
            className="text-[#2563eb] sm:size-70 md:size-80"
          />
        </div>

        {/* Decorative background glow */}
        <div className="absolute w-[350px] h-[350px] bg-[#2563eb]/10 blur-3xl rounded-full -bottom-20 -left-20"></div>
      </div>

      {/* Pop-up Form */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 px-4">
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl p-6 sm:p-8 md:p-10 rounded-3xl w-full max-w-md sm:max-w-lg animate-[fadeIn_0.3s_ease-out]">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A1732] mb-6 text-center">
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 appearance-none ${
                  formData.service ? "text-gray-700" : "text-gray-500"
                }`}
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700"
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

      {/* Animation Keyframe */}
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
