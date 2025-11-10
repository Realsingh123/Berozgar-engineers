import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const SERVICE_ID = "service_9teojkc";
const TEMPLATE_ID = "template_gn1u8ie";
const PUBLIC_KEY = "JAo7Y1cy48wQ_h_Lh";

const Footer = () => {
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
    <footer className="bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 text-center md:text-left">
        {/* Social + Contact Button */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:ml-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-6 text-[#487BFF]">
              <a
                href="https://instagram.com/_ignitesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3763e2] transition"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com/in/ignitesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3763e2] transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#487BFF] text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-[#3763e2] transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-20 md:gap-24 justify-center md:justify-start mt-10 md:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("Home");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
              Home
            </li>

            <li
            className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("About-us");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
              About us
            </li>

            <li 
              className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("Why");
              section?.scrollIntoView({ behavior: "smooth" });
            }} 
            >
              why choose us
            </li>

            <li
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("our-work");
              section?.scrollIntoView({ behavior: "smooth" });
            }} 
            
            >
              our work
            </li>
            <li
            
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("Testimonials");
              section?.scrollIntoView({ behavior: "smooth" });
            }} 
            >
              Testimonials
            </li>
          </ul>

          <ul className="space-y-6 text-sm font-medium">
            <li
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("services");
              section?.scrollIntoView({ behavior: "smooth" });
            }} >
            Frontend Development
            </li>
            <li
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("services");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
            UI/UX Design
            </li>
            <li
            
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("services");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
            Branding
            </li>
            <li
            
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("Technologies");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
            Technologies
            </li>
          </ul>
        </div>

        {/* Extra Links */}
        <div className="flex justify-center md:justify-start mt-10 lg:mt-0">
          <ul className="space-y-6 text-sm font-medium">
            <li
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("FAQ");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
            FAQs
            </li>
            <li
             className=" hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
              const section = document.getElementById("Journey");
              section?.scrollIntoView({ behavior: "smooth" });
            }}>
            Start Your Journey
            </li>
            <li>
              <button
                onClick={() => setShowForm(true)}
                className="hover:text-[#487BFF] transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form Popup */}
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
              Contact Us ✉️
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-[15px]">
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
                className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white/80 ${
                  formData.service ? "text-gray-700" : "text-gray-500"
                }`}
              >
                <option value="">Select Service</option>
                <option value="Frontend Web Development">Frontend Web Development</option>
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

      {/* Bottom Copyright */}
      <div className="bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p>© 2025 Ignite Solutions. - All Rights Reserved</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
