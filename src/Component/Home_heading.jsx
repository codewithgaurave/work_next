import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home_heading() {
  const navigate = useNavigate();

  const items = [
    {
      name: "Digital Marketing",
      img: "/dig.png",
      desc: "Boost your brand’s online presence with performance-driven marketing campaigns. We craft tailored strategies for SEO, social media, email marketing, and paid ads to attract the right audience and maximize ROI while strengthening your brand visibility across platforms.",
    },
    {
      name: "Graphic Designing",
      img: "/Gra3.png",
      desc: "Stand out with visually stunning and impactful graphic designs. From logos, banners, and social media visuals to marketing materials, our creative team ensures your brand identity is memorable, engaging, and consistent across all touchpoints.",
    },
    {
      name: "Web Development",
      img: "/Web.png",
      desc: "Build high-performance, responsive, and scalable websites that deliver seamless user experiences. Our developers combine modern technologies with best practices to ensure fast loading, secure, and visually appealing websites that drive conversions and engagement.",
    },
    {
      name: "AI & IT Solutions",
      img: "/Web2.png",
      desc: "Transform your business operations with intelligent AI and IT solutions. From automation, predictive analytics, and smart software tools to infrastructure optimization, we help you leverage technology for efficiency, insights, and innovation.",
    },
    {
      name: "Business Consulting",
      img: "/Gra.png",
      desc: "Unlock new growth opportunities with expert business consulting services. We analyze your operations, market strategies, and customer journeys to provide actionable insights, improve efficiency, and guide your business towards sustainable growth and profitability.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      {/* MAIN CONTAINER */}
      <div
        className="
        w-full 
        bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F]
        text-white 
        flex flex-col items-center
        text-center 
        relative
        px-4
        pt-[70px]
        sm:pt-[70px]
        lg:pt-[90px]
        xl:pt-[120px]
        min-h-[420px]
        sm:min-h-[580px]
        md:min-h-[520px]
        lg:min-h-[620px]
        xl:min-h-[750px]
        xl:rounded-[42px]
        lg:rounded-[42px]
        sm:rounded-[28px]
        rounded-[28px]
      "
      >
        {/* BACKGROUND ANIMATION */}
        <div className="absolute inset-0 overflow-hidden mt-[40px]">
          {/* Left Top Big Bubble */}
          <div className="absolute -top-32 -left-32 w-89 h-89 bg-[#A8FFE0] rounded-full opacity-20 animate-pulse"></div>

          {/* Right Bottom Big Bubble */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#A8FFE0] rounded-full opacity-20 animate-pulse"></div>

          {/* Small Floating Dots */}
          <span className="floating-dot absolute top-20 left-10 w-3 h-3 bg-white/40 rounded-full"></span>
          <span className="floating-dot absolute top-40 right-12 w-2 h-2 bg-green-300/60 rounded-full"></span>
          <span className="floating-dot absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-teal-200/50 rounded-full"></span>
          <span className="floating-dot absolute bottom-48 right-1/4 w-3 h-3 bg-white/40 rounded-full"></span>
          <span className="floating-dot absolute top-1/3 right-1/2 w-2 h-2 bg-green-200/50 rounded-full"></span>
        </div>

        {/* GLASS GLOW EFFECT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.20),transparent_70%)]"></div>

        {/* MAIN HEADING */}
        <h1
          className="
            font-semibold 
            text-2xl sm:text-3xl md:text-4xl 
            lg:text-[50px] xl:text-[58px]
            leading-tight
            max-w-5xl
            mt-12 md:mt-16 lg:mt-20
            px-3
          "
        >
          <span className="bg-gradient-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
            All-In-One Creative, Tech & Business Services
          </span>
          <br />
          <span className="text-white opacity-90">for Modern Enterprises</span>
        </h1>

        {/* PARAGRAPH */}
        <p
          className="
            max-w-3xl 
            text-sm sm:text-base md:text-lg lg:text-xl
            px-4
            mt-4
            opacity-90
          "
        >
          Stay ahead of the curve with solutions designed for tomorrow —
          intelligent tools and strategies that adapt to your business growth.
        </p>

        {/* PRIMARY CTA BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="
            mt-6
            px-7 py-3.5 
            sm:px-10 sm:py-4
            bg-gradient-to-r from-[#037c5598] to-[#CFFFE9]
            text-black font-semibold
            rounded-full
            shadow-xl shadow-black/40
            text-sm sm:text-lg
            hover:scale-110 hover:shadow-2xl 
            active:scale-95
            transition-all duration-300
            mb-[200px]
            sm:mb-[260px]
            lg:mb-[330px]
            xl:mb-[430px]
            relative z-10
          "
        >
          🚀 Get Start
        </button>

        {/* IMAGE */}
        <img
          src={items[active].img}
          alt="Service"
          className="
    flex 
    absolute 
    bottom-0 
    left-1/2 
    -translate-x-1/2
    object-contain
    filter
    brightness-110
    contrast-125
    drop-shadow-[0px_0px_60px_rgba(31,209,152,0.55)]
    
    transition-all duration-500
    w-[560px] 
    sm:w-[680px] 
    md:w-[850px] 
    lg:w-[1400px]
    xl:w-[1700px]
    h-auto
    md:pb-[170px]  
    lg:pb-[220px]
    xl:pb-[290px]
    sm:pb-[130px]
    translate-y-[50%]
    lg:translate-y-[55%]
    sm:translate-y-[55%]
    xl:translate-y-[54%]
    z-0
  "
        />
      </div>

      {/* BUTTONS */}
      <div
        className="
          w-full 
          flex flex-wrap justify-center 
          gap-3 sm:gap-4 lg:gap-6
          py-8
          sm:mt-[150px] 
          md:mt-[150px] 
          lg:mt-[220px]
          xl:mt-[260px]
          mt-[140px]
          px-4
          relative
          z-20
        "
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              px-6 py-2.5 sm:px-7 sm:py-3 
              rounded-full 
              text-sm sm:text-base font-medium
              transition-all duration-300 shadow-md 
              backdrop-blur-lg 
              ${
                active === i
                  ? "bg-black text-white border-2 border-white scale-105 shadow-xl"
                  : "bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white"
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
        <div
          className="
            max-w-[900] 
            mx-auto 
            text-center 
            text-base sm:text-lg md:text-xl
            py-6 sm:py-4
            rounded-xl
            leading-relaxed
            text-black
            font-medium
            tracking-wide
            shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          "
        >
          <p className="opacity-90 mb-4">{items[active].desc}</p>
        </div>
      </div>
    </>
  );
}

export default Home_heading;
