import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Palette,
  MonitorSmartphone,
  Cpu,
  LineChart,
} from "lucide-react";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // ⭐ AUTO PLAY CONTROL

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      icon: (
        <TrendingUp size={90} strokeWidth={1.5} className="text-green-300" />
      ),
      services: [
        "SEO optimization for ranking growth",
        "Social media brand building",
        "High-performance Google Ads",
        "Meta Ads for ROI-focused marketing",
      ],
      color: "from-green-300 to-emerald-500",
    },
    {
      id: 2,
      title: "Graphic Designing",
      icon: <Palette size={90} strokeWidth={1.5} className="text-green-300" />,
      services: [
        "Premium logo & branding kit",
        "Elegant business cards",
        "Professional pitch decks",
        "Creative brochures & flyers",
      ],
      color: "from-green-300 to-emerald-500",
    },
    {
      id: 3,
      title: "Website & App Development",
      icon: (
        <MonitorSmartphone
          size={90}
          strokeWidth={1.5}
          className="text-green-300"
        />
      ),
      services: [
        "Custom website development",
        "Fast & responsive design",
        "iOS / Android app development",
        "Business automation tools",
      ],
      color: "from-green-300 to-emerald-500",
    },
    {
      id: 4,
      title: "IT & AI Solutions",
      icon: <Cpu size={90} strokeWidth={1.5} className="text-green-300" />,
      services: [
        "Smart AI-powered solutions",
        "Billing & management software",
        "Task automation systems",
        "Custom SaaS product development",
      ],
      color: "from-green-300 to-emerald-500",
    },
    {
      id: 5,
      title: "Business Consulting",
      icon: (
        <LineChart size={90} strokeWidth={1.5} className="text-green-300" />
      ),
      services: [
        "Business setup & structure",
        "PRO & legal process support",
        "Strategic market guidance",
        "Basic HR policy framework",
      ],
      color: "from-green-300 to-emerald-500",
    },
  ];

  // ⭐ AUTO SLIDER EFFECT
  useEffect(() => {
    setIsVisible(true);

    if (!isAutoPlay) return; // USER CLICKED → STOP AUTO SLIDER

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white">
      <div className=" xl:max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-bold text-center mb-4 
          text-transparent bg-clip-text bg-gradient-to-r 
          from-green-300 to-emerald-400 tracking-wide"
        >
          Our Services
        </h2>

        <p className="text-xl text-center text-green-200/70 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
          Smart, modern & result-driven services crafted to grow your business.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveService(index);
                setIsAutoPlay(false); //
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                border border-green-400/20 backdrop-blur-sm
                ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.color} text-black shadow-xl scale-105`
                    : "text-green-200 hover:bg-green-300/10"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Main Content Box */}
        <div
          className="rounded-3xl p-10 border border-green-400/20 
          bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F]
          backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,100,0.15)] transition-all"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE */}
            <div
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="mb-6">{services[activeService].icon}</div>

              <h3
                className="text-4xl font-bold mb-4 text-transparent bg-clip-text 
                bg-gradient-to-r from-green-700 to-emerald-400"
              >
                {services[activeService].title}
              </h3>

              <p className="text-green-200/80 text-lg leading-relaxed">
                Expert {services[activeService].title.toLowerCase()} designed
                for growth-focused businesses.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div
              className={`transition-all duration-500 delay-150 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid gap-4">
                {services[activeService].services.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 rounded-xl border 
                    border-green-400/30 backdrop-blur-sm shadow-lg 
                    hover:bg-green-400/20 transition-all duration-300 group"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mr-4 bg-gradient-to-r ${services[activeService].color}`}
                    ></div>

                    <span className="text-green-200/90 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
