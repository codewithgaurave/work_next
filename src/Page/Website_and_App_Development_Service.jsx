// components/WebsiteAndAppDevelopment.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaReact,
  FaApple,
  FaAndroid,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
// import { Link } from "lucide-react"
import { Link } from "react-router-dom";

const WebsiteAndAppDevelopment = () => {
  const projectCardsRef = useRef([]);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Website Development",
      description:
        "A fully responsive e-commerce platform with advanced product filtering, secure payment gateway integration, and real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      features: [
        "Responsive Design",
        "Payment Integration",
        "Admin Dashboard",
        "Inventory Management",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "iOS/Android App",
      description:
        "Cross-platform mobile application for fitness tracking with workout plans, progress analytics, and social sharing features.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Chart.js",
        "Apple Health Kit",
      ],
      features: [
        "Cross-Platform",
        "Real-time Sync",
        "Progress Analytics",
        "Social Features",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "Website Design & Development",
      description:
        "Modern corporate website with CMS integration, multi-language support, and SEO optimization for better search engine ranking.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Strapi CMS",
        "GraphQL",
        "Vercel",
      ],
      features: [
        "CMS Integration",
        "SEO Optimized",
        "Multi-language",
        "Fast Loading",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: "Mobile Application",
      description:
        "Feature-rich food delivery application with real-time order tracking, restaurant management, and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        "Flutter",
        "Dart",
        "Google Maps API",
        "Firebase",
        "REST API",
      ],
      features: [
        "Real-time Tracking",
        "Push Notifications",
        "Multiple Payment Options",
        "Rating System",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Web Application",
      description:
        "Comprehensive healthcare portal for patients and doctors with appointment scheduling, medical records, and telemedicine features.",
      image: "/medical.webp",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "WebRTC", "Docker"],
      features: [
        "Appointment System",
        "Medical Records",
        "Video Consultations",
        "Prescription Management",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      title: "Social Media Platform",
      category: "Mobile & Web App",
      description:
        "Scalable social media platform with real-time messaging, content sharing, and advanced user engagement features.",
      image: "/Social.png",
      technologies: ["React Native", "Socket.io", "MongoDB", "Redis", "AWS S3"],
      features: [
        "Real-time Chat",
        "Content Feed",
        "User Profiles",
        "Analytics Dashboard",
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "React Native", icon: "📱", category: "Mobile" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "Vue.js", icon: "🟢", category: "Frontend" },
    { name: "Node.js", icon: "🟩", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "Flutter", icon: "💙", category: "Mobile" },
    { name: "Swift", icon: "🍎", category: "iOS" },
    { name: "Kotlin", icon: "🤖", category: "Android" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "GraphQL", icon: "📊", category: "API" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      comment:
        "The e-commerce platform they built increased our sales by 150% and provided an exceptional user experience.",
      rating: 5,
      image: "/W2.jpg",
      project: "E-Commerce Platform",
    },
    {
      name: "Mike Chen",
      company: "FitLife Apps",
      comment:
        "Their React Native development delivered a seamless experience across both iOS and Android platforms.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Fitness Tracking App",
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Plus",
      comment:
        "The healthcare portal transformed our patient management system and improved efficiency by 200%.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Healthcare Portal",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 mt-[80px]">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaCode className="text-yellow-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Premium Web & App Development
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Website & App
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-green-600 to-green-500 bg-clip-text mt-4">
              Development
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-xl md:text-xl mb-8 max-w-3xl mx-auto  text-yellow-100 font-semibold leading-relaxed drop-shadow-sm">
            Transform your ideas into stunning digital experiences with our
            expert website design, development, and mobile app creation
            services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Project Today</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Button */}
            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Work
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-green-300 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </header>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Our
              <span className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                Development
              </span>{" "}
              Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions from concept to deployment and
              beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website Development Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaDesktop className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Website Design & Development
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Create stunning, responsive websites that captivate your
                audience and drive results. From corporate sites to complex web
                applications.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Responsive Web Design",
                  "E-commerce Platforms",
                  "CMS Development",
                  "SEO Optimization",
                  "Web Application Development",
                  "Performance Optimization",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <FaRegCheckCircle className="text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
              >
                Learn More{" "}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile App Development Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMobile className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  iOS/Android App Development
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Build powerful mobile applications that provide seamless user
                experiences across all devices and platforms.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Native iOS & Android Apps",
                  "Cross-Platform Development",
                  "UI/UX Design",
                  "App Store Deployment",
                  "Push Notifications",
                  "API Integration",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <FaRegCheckCircle className="text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors"
              >
                Learn More{" "}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section
        id="services"
        className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.18),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[1550px] mx-auto relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_25px_rgba(0,255,180,0.15)]">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-5">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 sm:py-3 rounded-2xl border border-green-300/20 shadow-lg">
              <span className="text-green-300 font-semibold text-sm sm:text-base">
                🚀 Our Portfolio
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green-100 mt-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-green-200/80 max-w-2xl mx-auto mt-4 leading-relaxed pt-2">
              Explore our latest work in website development and mobile app
              creation.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectCardsRef.current[index] = el)}
                className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-green-200/20 transition-all duration-700 translate-y-10 opacity-0 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-green-200/90 text-green-900 font-medium shadow-md backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        className="bg-white/80 text-green-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      >
                        <FaPlay className="text-sm" />
                      </a>
                      <a
                        href={project.githubLink}
                        className="bg-white/80 text-green-800 p-3 rounded-full hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      >
                        <FaCode className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-green-200/80 text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100/10 text-green-200 px-3 py-1 rounded-full text-xs sm:text-sm border border-green-200/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="border-t border-green-200/20 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-green-100 text-xs sm:text-sm"
                        >
                          <FaRegCheckCircle className="text-green-400 mr-2 text-xs" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3 mt-6">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-center py-2 rounded-xl font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-1"
                    >
                      Live Demo
                    </Link>

                    <Link
                      to="/contact"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-green-200 text-center py-2 rounded-xl font-semibold text-sm sm:text-base border border-green-200/30 transition-all"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Stack
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We work with cutting-edge technologies to build fast, scalable,
              and maintainable applications.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="
            group 
            bg-white 
            rounded-2xl 
            p-4 
            text-center 
            shadow-sm 
            hover:shadow-xl 
            border 
            border-slate-200 
            hover:border-blue-400 
            transition-all 
            duration-300 
            hover:-translate-y-2 
            cursor-pointer
          "
              >
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <div className="text-sm sm:text-base font-semibold text-slate-700">
                  {tech.name}
                </div>

                {/* Category */}
                <div className="text-xs text-slate-500 mt-1">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransformBussnation />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Client{" "}
              <span className="bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
                Success
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from businesses we've helped transform with our development
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-300"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonial.company}
                    </div>
                    <div className="text-blue-600 text-xs font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
                <div className="flex text-green-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteAndAppDevelopment;
