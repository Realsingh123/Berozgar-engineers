import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Digital Marketer, Mumbai",
    text: "The website they built for our agency truly elevated our online presence. The animations, layout, and responsiveness were spot on — professional yet modern!",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian male
  },
  {
    name: "Sneha Reddy",
    title: "Fashion Blogger, Hyderabad",
    text: "Their team perfectly understood my brand tone. The portfolio site they designed reflects my personality — elegant, colorful, and smooth to navigate!",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian female
  },
  {
    name: "Rohit Singh",
    title: "Startup Founder, Bengaluru",
    text: "We needed a modern landing page for our SaaS product, and they absolutely nailed it. The conversions improved drastically after launch. Great job!",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian male
  },
  {
    name: "Aditi Chauhan",
    title: "YouTuber & Content Strategist, Delhi",
    text: "They handled my entire YouTube brand revamp — from thumbnails to channel design. Every piece felt fresh, lively, and 100% on-brand!",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian female
  },
  {
    name: "Kunal Verma",
    title: "Freelance App Developer, Pune",
    text: "The UI/UX mockups they delivered made my client presentation stand out. Clean, minimal, and very user-friendly. Worth every rupee!",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian male
  },
  {
    name: "Neha Kapoor",
    title: "Brand Consultant, Gurgaon",
    text: "I was amazed by how smoothly the project went. They combined creativity with strong communication — the final design was stunning and functional!",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian female
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
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
    <section
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      id="Testimonials"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-40"></div>

      {/* Header */}
      <div className="relative flex flex-col items-center text-center z-10 mb-16">
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          What Our <span className="text-blue-600">Clients Say</span> About Us
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl">
          Hear from Indian creators, founders, and professionals who trusted us
          with their digital transformation.
        </p>

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative flex justify-center items-stretch gap-6 flex-wrap md:flex-nowrap transition-all duration-500 z-10">
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between bg-white border border-gray-100 shadow-md rounded-2xl p-8 w-full sm:w-[80%] md:w-[290px] lg:w-[320px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
          >
            {/* Quote Icon */}
            <div className="absolute top-5 right-5 text-blue-100 group-hover:text-blue-300 transition-all">
              <Quote size={32} />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
