// components/ITAndAISolutions.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaRobot,
  FaCloud,
  FaMobile,
  FaServer,
  FaDatabase,
  FaCog,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";

const ITAndAISolutions = () => {
  const serviceCardsRef = useRef([]);
  const [activeService, setActiveService] = useState(0);

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

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaCog className="text-3xl" />,
      title: "Billing & Invoice Software",
      description:
        "Streamline your financial operations with our comprehensive billing and invoicing solutions. Automate invoice generation, payment tracking, and financial reporting to save time and reduce errors in your accounting processes.",
      features: [
        "Automated Invoice Generation",
        "Payment Tracking",
        "Tax Calculation",
        "Multi-Currency Support",
        "Recurring Billing",
        "Financial Reporting",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-indigo-500 to-purple-500",
      results: ["✓ 80% Time Saved", "✓ 99% Accuracy", "✓ Real-time Tracking"],
    },
    {
      id: 2,
      icon: <FaServer className="text-3xl" />,
      title: "Task Management Systems",
      description:
        "Boost team productivity with our intelligent task management solutions. Organize projects, assign tasks, track progress, and collaborate seamlessly with features designed to enhance team efficiency and project success.",
      features: [
        "Project Planning",
        "Task Assignment",
        "Progress Tracking",
        "Team Collaboration",
        "Time Management",
        "Performance Analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-blue-500 to-cyan-500",
      results: [
        "✓ 60% Productivity Boost",
        "✓ Better Collaboration",
        "✓ On-time Delivery",
      ],
    },
    {
      id: 3,
      icon: <FaDatabase className="text-3xl" />,
      title: "Payroll Management",
      description:
        "Simplify payroll processing with our automated payroll management systems. Handle employee salaries, tax deductions, benefits administration, and compliance reporting with precision and ease.",
      features: [
        "Automated Salary Processing",
        "Tax Deduction Management",
        "Benefits Administration",
        "Compliance Reporting",
        "Employee Self-Service",
        "Integration with Accounting",
      ],
      image: "https://dcsgr.com/wp-content/uploads/2021/05/payroll-1.jpg",
      gradient: "from-green-500 to-emerald-500",
      results: [
        "✓ Error-free Processing",
        "✓ Compliance Assurance",
        "✓ Employee Satisfaction",
      ],
    },
    {
      id: 4,
      icon: <FaMobile className="text-3xl" />,
      title: "POS Systems",
      description:
        "Revolutionize your retail operations with our advanced Point of Sale solutions. Process transactions, manage inventory, track sales, and gain valuable business insights with our comprehensive POS software.",
      features: [
        "Transaction Processing",
        "Inventory Management",
        "Sales Analytics",
        "Customer Management",
        "Multi-store Support",
        "Integration Capabilities",
      ],
      image:
        "https://www.accupos.com/wp-content/uploads/2019/09/high-quality-pos.jpg",
      gradient: "from-orange-500 to-red-500",
      results: [
        "✓ Faster Checkout",
        "✓ Better Inventory Control",
        "✓ Sales Growth",
      ],
    },
    {
      id: 5,
      icon: <FaRobot className="text-3xl" />,
      title: "AI Solutions & Chatbots",
      description:
        "Transform customer experience and business operations with our cutting-edge AI solutions. Implement intelligent chatbots, automate processes, and leverage machine learning to drive innovation and efficiency.",
      features: [
        "Intelligent Chatbots",
        "Process Automation",
        "Machine Learning",
        "Predictive Analytics",
        "Natural Language Processing",
        "Custom AI Models",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-purple-500 to-pink-500",
      results: [
        "✓ 24/7 Customer Support",
        "✓ Process Automation",
        "✓ Data-driven Insights",
      ],
    },
    {
      id: 6,
      icon: <FaCloud className="text-3xl" />,
      title: "SaaS Products Development",
      description:
        "Build scalable and robust Software-as-a-Service products with our expert development team. From concept to deployment, we create cloud-native solutions that grow with your business and meet market demands.",
      features: [
        "Cloud Architecture",
        "Scalable Infrastructure",
        "Multi-tenant Design",
        "API Development",
        "Security Implementation",
        "Continuous Deployment",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-teal-500 to-blue-500",
      results: [
        "✓ Scalable Solutions",
        "✓ Market Ready",
        "✓ Future-proof Technology",
      ],
    },
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Retail Chain Inc.",
      comment:
        "The POS system transformed our retail operations. Sales tracking and inventory management have never been easier!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sophia Martinez",
      company: "Tech Startup",
      comment:
        "Their AI chatbot reduced our customer support costs by 70% while improving customer satisfaction significantly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Robert Kim",
      company: "Manufacturing Corp",
      comment:
        "The task management system improved our project completion rate by 45%. Team collaboration is now seamless.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 mt-[80px]">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaBrain className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Cutting-Edge IT & AI Solutions
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              IT & AI Solutions
            </span>
            <span className="blocktext-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-gradient-to-r from-green-500 to-green-300 bg-clip-text mt-4">
              That Transform Businesses
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-yellow-200 leading-relaxed drop-shadow-sm">
            Harness the power of technology and artificial intelligence to
            automate processes, gain insights, and drive unprecedented business
            growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">
                Start Your Digital Transformation
              </span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Button */}
            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Case Studies
            </a>
          </div>

          {/* Trust Indicators */}
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

      {/* Services Section */}
      <section
        id="services"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative"
      >
        {/* Soft Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent)] pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white rounded-2xl shadow-md px-6 py-3 mb-5 border border-gray-100">
              <span className="text-green-700 font-semibold">
                🚀 Advanced Solutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
              Our{" "}
              <span className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Stack
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT and AI solutions crafted for performance,
              security, and scalability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className={`
            group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden 
            opacity-0 translate-y-8 transition-all duration-700
            flex flex-col lg:flex-row border border-gray-100
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
          `}
              >
                {/* Left: Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Hover Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div
                        className={`bg-gradient-to-r ${service.gradient} text-white p-5 rounded-2xl shadow-xl`}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-2xl border border-white/20">
                      <div className="text-sm font-semibold text-green-300">
                        Key Benefit
                      </div>
                      <div className="text-xs opacity-90">
                        {service.results[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center 
                bg-gradient-to-r from-green-900 to-green-600
                hover:from-green-600 hover:to-green-900 text-white
                font-semibold px-6 py-4 rounded-xl transition-all duration-300
                transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      <FaChartLine className="mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TransformBussnation />

      {/* Technology Stack Section */}
      <section className="py-20 bg-#oklch(92.3% 0.003 48.717) text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Expertise
            </h2>
            <p className="text-lg md:text-xl text-green-500 max-w-2xl mx-auto leading-relaxed font-semibold ">
              Leveraging cutting-edge technologies to build robust and scalable
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
              {
                name: "Node.js",
                icon: "🟢",
                color: "from-green-400 to-green-600",
              },
              {
                name: "Python",
                icon: "🐍",
                color: "from-yellow-400 to-yellow-600",
              },
              { name: "AI/ML", icon: "🧠", color: "from-pink-400 to-pink-600" },
              { name: "Cloud", icon: "☁️", color: "from-cyan-400 to-cyan-600" },
              {
                name: "Database",
                icon: "🗃️",
                color: "from-purple-400 to-purple-600",
              },
              {
                name: "API",
                icon: "🔗",
                color: "from-orange-400 to-orange-600",
              },
              {
                name: "Security",
                icon: "🛡️",
                color: "from-red-400 to-red-600",
              },
              {
                name: "Mobile",
                icon: "📱",
                color: "from-teal-400 to-teal-600",
              },
              {
                name: "DevOps",
                icon: "⚙️",
                color: "from-gray-400 to-gray-600",
              },
              {
                name: "Blockchain",
                icon: "⛓️",
                color: "from-indigo-400 to-indigo-600",
              },
              { name: "IoT", icon: "📡", color: "from-lime-400 to-lime-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} bg-opacity-20 rounded-2xl p-6 text-center border border-yellow-900/40 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="text-sm font-semibold text-yellow-100">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Final CTA Section */}

      <Footer />
    </div>
  );
};

export default ITAndAISolutions;
