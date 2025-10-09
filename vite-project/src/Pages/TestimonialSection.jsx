import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Amelia Joseph",
    title: "Chief Manager",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jacob Joshua",
    title: "Chief Manager",
    text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it’s got to be Embrace!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jacob John",
    title: "Chief Manager",
    text: "Embrace really nails it! Creative and approachable style. They understand artistry meets strategy. Thrilled with what we achieved!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Amelia Joseph",
    title: "Chief Manager",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jacob Joshua",
    title: "Chief Manager",
    text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it’s got to be Embrace!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jacob John",
    title: "Chief Manager",
    text: "Embrace really nails it! Creative and approachable style. They understand artistry meets strategy. Thrilled with what we achieved!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Calculating 3 testimonials to show at a time
  const visibleTestimonials = testimonials.slice(index, index + 3);

  // Handling wrapping for this testimonials
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-4xl font-bold mb-10 text-black">
        What Our Client Said About Us
      </h2>

      {/* Testimonials Container */}
      <div className="flex justify-center items-center gap-6 overflow-hidden">
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className={`w-[300px] p-6 rounded-2xl text-left shadow transition-all duration-300 ${
              (index + i) % testimonials.length === index
                ? "bg-[#487BFF] text-white scale-105"
                : "bg-[#f9f9f9] text-gray-800 hover:bg-[#487BFF] hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm opacity-80">{t.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-50 top-[83px] -translate-y-1/2 flex gap-3">
        <button
          onClick={prevTestimonial}
          className="bg-gray-200 hover:bg-[#487BFF] p-3 rounded-full transition"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-gray-200 hover:bg-[#3763e2] p-3 rounded-full text-white transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
