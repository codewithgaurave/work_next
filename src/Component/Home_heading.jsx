import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

// ⭐ IMPORT ALL JSON ANIMATIONS
import codingAnim from "../assets/Coding.json";
import digitalAnim from "../assets/Digital.json";
import graAnim from "../assets/Gra.json";
import itAnim from "../assets/IT.json";
import bussAnim from "../assets/Buss.json";

function Home_heading() {
  const navigate = useNavigate();

  // ⭐ Animation Mapping
  const animationMap = {
    coding: codingAnim,
    digital: digitalAnim,
    gra: graAnim,
    it: itAnim,
    buss: bussAnim,
  };

  // ⭐ All Services
  const items = [
    {
      name: "Digital Marketing",
      anim: "digital",
      type: "json",
      desc: "Boost your brand’s visibility with data-driven digital marketing strategies designed to attract the right audience, increase engagement, and deliver measurable business growth.",
    },
    {
      name: "Graphic Designing",
      anim: "gra",
      type: "json",
      desc: "Transform your ideas into powerful designs that enhance recognition, build trust, and connect your brand with the right audience.",
    },
    {
      name: "Web Development",
      anim: "coding",
      type: "json",
      desc: "Build high-performance, responsive, scalable websites for amazing user experience.",
    },
    {
      name: "AI & IT Solutions",
      anim: "it",
      type: "json",
      desc: "Transform business operations with intelligent AI-powered solutions.",
    },
    {
      name: "Business Consulting",
      anim: "buss",
      type: "json",
      desc: "Expert guidance to help your business grow faster, make smarter decisions, and achieve long-term success.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      {/* TOP SECTION */}
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
          min-h-[550px]
          rounded-[28px] sm:rounded-[28px] lg:rounded-[42px]
        "
      >
        {/* MAIN HEADING */}
        <h1
          className="
            font-semibold 
            text-2xl sm:text-3xl md:text-4xl 
            lg:text-[50px] xl:text-[58px]
            leading-tight
            max-w-5xl
            mt-16
          "
        >
          <span className="bg-gradient-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
            All-In-One Creative, Tech & Business Services
          </span>
          <br />
          <span className="text-white opacity-90">for Modern Enterprises</span>
        </h1>

        {/* PARAGRAPH */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 opacity-90">
          Stay ahead with solutions designed for tomorrow — intelligent tools
          and strategies.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="
            mt-6
            px-7 py-3.5 
            bg-gradient-to-r from-[#037c5598] to-[#CFFFE9]
            text-black font-semibold
            rounded-full
            shadow-xl shadow-black/40
            text-sm sm:text-lg
            hover:scale-110 
            transition-all duration-300
            mb-[200px]
            sm:mb-[250px]
            lg:mb-[300px]
            relative z-10
          "
        >
          🚀 Get Start
        </button>

        {/* ⭐ JSON ANIMATION SHOW */}
        <Lottie
          animationData={animationMap[items[active].anim]}
          loop={true}
          className="
            flex absolute bottom-0 left-1/2 -translate-x-1/2
            w-[380px] sm:w-[450px] md:w-[500px] lg:w-[650px] xl:w-[700px]
            pb-[200px]
            translate-y-[65%]
           sm:translate-y-[62%]
           lg:translate-y-[59%]
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
          mt-[120px]
          sm:mt-[200px]
          lg:mt-[250px]
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
              px-6 py-2.5 
              rounded-full 
              text-sm sm:text-base font-medium
              transition-all duration-300 shadow-md 
              backdrop-blur-lg 
              ${
                active === i
                  ? "bg-black text-white border-2 border-white scale-105"
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
            max-w-[900px] 
            mx-auto 
            text-center 
            text-base sm:text-lg md:text-xl
            py-6
            rounded-xl
            leading-relaxed
            text-black 
            font-medium
            shadow-md
          "
        >
          <p className="opacity-90 mb-4">{items[active].desc}</p>
        </div>
      </div>
    </>
  );
}

export default Home_heading;
