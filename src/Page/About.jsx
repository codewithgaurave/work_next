import { useState, useEffect, useCallback } from "react";
import Footer from "../Component/Footer";
import Services from "../Component/Services";
import AboutWorknest from "../Component/Our_About";
import { Navigate, useNavigate } from "react-router-dom";
import TransformBussnation from "../Component/TransformBussnation";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  // Memoized services data to prevent recreation on every render
  const services = useCallback(
    () => [
      {
        id: 1,
        icon: "🌐",
        title: "Web Development",
        services: ["Frontend", "Backend", "Full Stack"],
        color: "from-purple-500 to-pink-500",
      },
      {
        id: 2,
        icon: "📱",
        title: "Mobile Development",
        services: ["iOS", "Android", "Cross Platform"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 3,
        icon: "🎨",
        title: "UI/UX Design",
        services: ["Wireframing", "Prototyping", "Visual Design"],
        color: "from-green-500 to-emerald-500",
      },
      {
        id: 4,
        icon: "📈",
        title: "Digital Marketing",
        services: ["SEO", "Social Media", "Content Marketing"],
        color: "from-yellow-500 to-orange-500",
      },
    ],
    []
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const Navigate = useNavigate();
  // Memoized border color function
  const getBorderColor = useCallback((colorString) => {
    if (colorString.includes("purple")) return "#a855f7";
    if (colorString.includes("blue")) return "#3b82f6";
    if (colorString.includes("green")) return "#10b981";
    return "#f59e0b";
  }, []);

  // Memoized stats data
  const statsData = useCallback(
    () => [
      { number: "50+", label: "Projects" },
      { number: "25+", label: "Clients" },
      { number: "15+", label: "Experts" },
      { number: "98%", label: "Success" },
    ],
    []
  );

  // Memoized features data
  const featuresData = useCallback(
    () => [
      {
        icon: "⚡",
        title: "Fast Delivery",
        description: "Quick turnaround times without compromising on quality",
      },
      {
        icon: "🎯",
        title: "Expert Team",
        description: "Highly skilled professionals with years of experience",
      },
      {
        icon: "💎",
        title: "Premium Quality",
        description: "Top-notch services that exceed client expectations",
      },
      {
        icon: "🛡️",
        title: "Reliable Support",
        description: "24/7 customer support and maintenance services",
      },
      {
        icon: "🚀",
        title: "Innovation",
        description: "Staying ahead with latest technologies and trends",
      },
      {
        icon: "💰",
        title: "Cost Effective",
        description: "Competitive pricing with exceptional value",
      },
    ],
    []
  );

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <header className="relative bg-[#01291F] text-white overflow-hidden mt-[60px]">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,209,152,0.15),_transparent_70%)]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 text-center">
          {/* Soft Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-green-400 mr-2 sm:mr-3 text-base sm:text-lg animate-pulse drop-shadow-md">
                  ✨
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold text-sm sm:text-base drop-shadow-sm tracking-wide">
                Know More About Us
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
              About Us
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text mt-2 sm:mt-4">
              Your Vision, Our Expertise
            </span>
          </h1>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed drop-shadow-sm">
              Welcome to{" "}
              <span className="text-green-300 font-semibold">
                WorknestConnect
              </span>
              , your one-stop destination for Digital Marketing, Graphic
              Designing, Web & App Development, IT & AI Solutions, and Business
              Consulting.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
              We empower businesses with modern digital solutions, combining
              creativity, technology, and strategic thinking to help you grow
              your brand and achieve measurable success.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
              Our team of experts ensures tailor-made strategies that fit your
              unique requirements, guaranteeing exceptional results with a
              modern, innovative approach.
            </p>
          </div>
        </div>

        {/* Floating Glow Dots - Optimized for mobile */}
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-48 h-48 sm:w-72 sm:h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        {/* Small floating dots - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-6 h-6 bg-green-400/40 rounded-full animate-float shadow-lg"></div>
        <div
          className="hidden sm:block absolute top-40 right-32 w-8 h-8 bg-yellow-400/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-40 left-1/4 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 right-16 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 left-20 w-20 h-20 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Float Animation */}
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
        </style>
      </header>

      {/* Our Component */}
      <AboutWorknest />

      {/* Mission Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* LEFT: Text Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-['Playfair_Display'] text-white drop-shadow-lg">
                Our Mission & Vision
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-green-600 mb-6 sm:mb-8 rounded-full shadow-lg"></div>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 mb-6">
                At{" "}
                <span className="text-green-500 font-semibold">
                  WorknestConnect
                </span>
                , we are committed to transforming businesses through innovative
                digital solutions. Our mission is to empower organizations with
                cutting-edge technology and creative strategies that drive
                growth and success.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {statsData().map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-5 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-100 mt-1 sm:mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
              {services()
                .slice(0, 4)
                .map((service, index) => (
                  <div
                    key={service.id}
                    className={`relative bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 backdrop-blur-md hover:shadow-xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${500 + index * 200}ms`,
                      borderLeft: `4px solid ${getBorderColor(service.color)}`,
                    }}
                    onClick={() => setActiveService(service.id - 1)}
                  >
                    <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-green-500 drop-shadow-md">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      {service.services.length} Services Available
                    </p>

                    {/* Decorative gradient circle for premium look */}
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-tr from-green-400 to-green-300 rounded-full opacity-30 pointer-events-none"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 font-['Playfair_Display'] text-gray-900">
            Why Choose WorknestConnect?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuresData().map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-300 
                  backdrop-blur-sm cursor-pointer
                  transform transition-all duration-200 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-90"
                  }
                  hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 hover:rounded-t-[10px]
                  hover:bg-gray-100
                `}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-indigo-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<TransformBussnation/>
      <Footer />
    </div>
  );
};

export default AboutUs;
