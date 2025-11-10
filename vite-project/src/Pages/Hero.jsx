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
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <section className="w-full min-h-[60vh] flex justify-center items-center bg-white px-2 py-10" id="Home">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between items-center min-h-[460px]">
        <div className="md:w-1/2 w-full pl-2 pt-8 md:pt-0">
          <h1
            className="font-bold text-4xl md:text-5xl text-black mb-4 leading-tight"
            style={{ letterSpacing: "-1.5px" }}
          >
            Building your digital world,
            <br />
            <span className="block text-blue-600">One pixel at a time</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            We care about our work and we care about our clients.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="h-12 px-7 bg-[#487BFF] text-white rounded-full text-base font-semibold shadow hover:bg-[#3763e2] transition"
            >
              Lets Talk
            </button>
          </div>
        </div>

        <div className="relative md:w-1/2 w-full flex justify-center items-center mt-14 md:mt-0 min-h-[420px]">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <DotLottieReact
              src="https://lottie.host/e52ec048-476a-4468-9e94-2732988a1755/UFjHuGGzF3.lottie"
              loop
              autoplay
            />
          </div>
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroBrand;
