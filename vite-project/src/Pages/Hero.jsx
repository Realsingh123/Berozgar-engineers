import React from "react";

const avatars = [
  {
    src: "https://randomuser.me/api/portraits/women/65.jpg", // Replace with your desired image
    style: "top-0 left-1/2 -translate-x-1/2 bg-[#F6F3F2]",    // top left avatar
    emoji: "😍",
    emojiStyle: "absolute -top-5 -right-8 bg-black text-2xl px-2 py-1 rounded-full text-white shadow"
  },
  {
    src: "https://randomuser.me/api/portraits/women/12.jpg", // Replace with your desired image
    style: "top-0 right-0 bg-[#FFC470]",
    emoji: null
  },
  {
    src: "https://randomuser.me/api/portraits/women/89.jpg", // Replace with your desired image
    style: "top-28 left-10 bg-[#D9FCFC]",
    emoji: null
  },
  {
    src: "https://randomuser.me/api/portraits/men/44.jpg", // Replace with your desired image
    style: "bottom-0 left-1/2 -translate-x-1/2 bg-[#FAF9FC]",
    emoji: null
  }
];

const emojiBubbles = [
  {
    emoji: "✏️",
    style: "absolute top-20 right-36 bg-[#7C61EB] text-2xl rounded-full w-16 h-16 flex items-center justify-center"
  },
  {
    emoji: "💪",
    style: "absolute top-44 right-52 bg-black text-2xl rounded-full w-12 h-12 flex items-center justify-center text-white"
  },
  {
    emoji: "👩‍💻",
    style: "absolute bottom-0 right-32 bg-[#E1FF50] text-2xl rounded-2xl w-24 h-16 flex items-center justify-center"
  },
  {
    emoji: "👑",
    style: "absolute bottom-2 right-0 bg-[#FFD875] text-2xl rounded-full w-16 h-16 flex items-center justify-center"
  }
];

const HeroBrand = () => {
  return (
    <section className="w-full min-h-[60vh] flex justify-center items-center bg-white px-2 py-10">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between items-center min-h-[460px]">
        {/* Left section */}
        <div className="md:w-1/2 w-full pl-2 pt-8 md:pt-0">
            <h1 className="font-bold text-4xl md:text-5xl text-black mb-4 leading-tight" style={{ letterSpacing: "-1.5px" }}>
            Building your digital world,<br />
            <span className="block text-blue-600">One pixel at a time</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            We care about our work and we care about our clients.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-56 md:w-64 h-12 px-4 rounded-full border border-gray-200 focus:outline-none text-base"
            />
            <button
              type="submit"
              className="h-12 px-7 bg-[#487BFF] text-white rounded-full text-base font-semibold shadow hover:bg-[#3763e2] transition"
            >
              Lets Talk
            </button>
          </form>
        </div>
        {/* Right section */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mt-14 md:mt-0 min-h-[420px]">
    
          <div className="relative w-[420px] h-[400px]">
    
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="relative w-36 h-36 rounded-[40px] overflow-hidden bg-[#F6F3F2] flex items-center justify-center">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="object-cover w-full h-full" />
                <span className="absolute -top-5 -right-8 bg-black text-2xl px-2 py-1 rounded-full text-white shadow">😍</span>
              </div>
            </div>
        
            <div className="absolute top-0 right-0">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden bg-[#FFC470] flex items-center justify-center">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" className="object-cover w-full h-full" />
              </div>
            </div>
    
            <div className="absolute top-28 left-10">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden bg-[#D9FCFC] flex items-center justify-center">
                <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden bg-[#FAF9FC] flex items-center justify-center">
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" className="object-cover w-full h-full" />
              </div>
            </div>

            <span className="absolute top-20 right-36 bg-[#7C61EB] text-2xl rounded-full w-16 h-16 flex items-center justify-center shadow">✏️</span>
            <span className="absolute top-44 right-52 bg-black text-2xl rounded-full w-12 h-12 flex items-center justify-center text-white shadow">💪</span>
            <span className="absolute bottom-0 right-32 bg-[#E1FF50] text-2xl rounded-2xl w-24 h-16 flex items-center justify-center shadow">👩‍💻</span>
            <span className="absolute bottom-2 right-0 bg-[#FFD875] text-2xl rounded-full w-16 h-16 flex items-center justify-center shadow">👑</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBrand;
