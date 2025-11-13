import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9teojkc";
const TEMPLATE_ID = "template_gn1u8ie";
const PUBLIC_KEY = "JAo7Y1cy48wQ_h_Lh";

const HeroBrand = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      alert("✅ Details sent successfully!");
      setShowForm(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert("❌ Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Home"
      className="w-full min-h-[60vh] flex justify-center items-center bg-white px-4 sm:px-6 md:px-10 py-10"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between items-center min-h-[460px]">
        {/* Left Section */}
        <div className="md:w-1/2 w-full pt-6 md:pt-0 text-center md:text-left">
          <h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-black mb-4 leading-tight"
            style={{ letterSpacing: "-1.2px" }}
          >
            Building your digital world,
            <br />
            <span className="block text-blue-600">One pixel at a time</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mb-8">
            We care about our work and we care about our clients.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="h-11 sm:h-12 px-6 sm:px-8 bg-[#487BFF] text-white rounded-full text-sm sm:text-base font-semibold shadow hover:bg-[#3763e2] transition-all duration-200"
          >
            Let’s Talk
          </button>
        </div>

        {/* Right Animation */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0 min-h-[320px] sm:min-h-[400px]">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <DotLottieReact
              src="https://lottie.host/e52ec048-476a-4468-9e94-2732988a1755/UFjHuGGzF3.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(255,255,255,0.25)] backdrop-blur-sm p-4 sm:p-0">
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-[95%] sm:max-w-[500px] md:max-w-[550px] animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
              aria-label="Close form"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1732] mb-6 text-center">
              Let’s Get Started 🚀
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-5 text-[15px]"
            >
              {[
                { type: "text", name: "name", placeholder: "Full Name", required: true },
                { type: "email", name: "email", placeholder: "Email Address", required: true },
                { type: "text", name: "company", placeholder: "Company Name", required: false },
              ].map(({ type, name, placeholder, required }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700"
                />
              ))}

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 appearance-none ${
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 h-24 sm:h-28 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 placeholder-gray-500 text-gray-700 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 sm:py-3.5 rounded-full text-[15px] sm:text-[16px] font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Details"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Fade In Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroBrand;
