import React, { useState } from "react";
import logoImg from "../assets/tpLogo.png";
import emailjs from "emailjs-com";
import { X } from "lucide-react";

const SERVICE_ID = "service_9teojkc";
const TEMPLATE_ID = "template_gn1u8ie";
const PUBLIC_KEY = "JAo7Y1cy48wQ_h_Lh";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
    <>
      <nav className="h-20 flex items-center justify-between px-8 shadow-sm bg-white relative">
        <div className="cursor-pointer flex items-center h-full">
          <img src={logoImg} alt="Logo" className="h-32 w-auto object-contain" />
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
          <li
            className="text-lg hover:text-blue-600 cursor-pointer transition"
            onClick={() => {
              const section = document.getElementById("our-work");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Our Work
          </li>
          <li className="text-lg hover:text-blue-600 cursor-pointer transition">
            Pricing
          </li>
          <li className="text-lg hover:text-blue-600 cursor-pointer transition">
            About Us
          </li>
        </ul>
        <button
          onClick={() => setShowForm(true)}
          className="hidden md:block bg-[#487BFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition"
        >
          Book A Call
        </button>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden text-gray-700 font-medium">
            <li
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
                const section = document.getElementById("our-work");
                section?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Our Work
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              About Us
            </li>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#487BFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition"
            >
              Book A Call
            </button>
          </ul>
        )}
      </nav>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
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
    </>
  );
};

export default Navbar;
