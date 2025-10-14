import { useState, useEffect } from "react";
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
    name: "Sophia Wilson",
    title: "Product Head",
    text: "They delivered exactly what I envisioned, with outstanding professionalism. I’m amazed at how smooth the whole process was!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Miller",
    title: "Marketing Lead",
    text: "An absolute delight to work with! Highly creative and super reliable — they made the process both fun and productive.",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Emma Brown",
    title: "Brand Strategist",
    text: "They turned ideas into reality with a perfect mix of creativity and precision. I’ll definitely collaborate again!",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // desktop default

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // desktop
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = testimonials.slice(index, index + visibleCount);
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(
      ...testimonials.slice(0, visibleCount - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-16 bg-white text-center relative px-4 sm:px-8">
      {/* Header with navigation beside (centered and responsive) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          What Our Clients Said About Us
        </h2>

        {/* Navigation Buttons beside heading */}
        <div className="flex gap-3">
          <button
            onClick={prevTestimonial}
            className="bg-gray-200 hover:bg-[#487BFF] hover:text-white active:bg-[#487BFF] p-3 rounded-full transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-200 hover:bg-[#487BFF] hover:text-white active:bg-[#487BFF] p-3 rounded-full transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="flex justify-center items-stretch gap-6 flex-wrap md:flex-nowrap transition-all duration-500">
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between 
        w-full sm:w-[85%] md:w-[270px] lg:w-[300px] 
        bg-[#f9f9f9] text-gray-800 p-6 rounded-2xl shadow-md 
        hover:bg-[#487BFF] hover:text-white 
        transition-all duration-300 h-full min-h-[290px]
        active:bg-[#487BFF] active:text-white" // enables hover-like effect on mobile tap
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm opacity-80">{t.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
