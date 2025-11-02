import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Content Creator",
    text: "Their thumbnail designs completely changed the look of my YouTube channel. Each one perfectly captures the vibe of my videos — eye-catching yet professional!",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Sharma",
    title: "Marketing Manager",
    text: "Working with them on our website redesign was an absolute pleasure. The UI/UX feels smooth and intuitive — our clients noticed the difference immediately!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohan Gupta",
    title: "Startup Founder",
    text: "From color schemes to layout, their website design nailed everything. My brand looks more premium now, and conversions have improved too!",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Isha Patel",
    title: "YouTuber & Influencer",
    text: "They completely understood my brand aesthetic. Every thumbnail they created felt lively and on point — super reliable and creative team!",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Aditya Verma",
    title: "Freelance Developer",
    text: "Their UI/UX design for my client project was simply next-level. Smooth transitions, neat layouts, and a premium finish — highly recommended!",
    img: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    name: "Neha Kapoor",
    title: "Brand Consultant",
    text: "They built a visually stunning website for my client. I loved how they balanced creativity and usability — exactly what good design should be!",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
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
