// components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Digital Marketing", link: "/services/Digital_Marketing" },
    { name: "Graphic Designing", link: "/services/Graphic_designing_services" },
    { name: "Web & App Development", link: "/services/Website_and_App_Development" },
    { name: "IT & AI Solutions", link: "/services/IT_&_AI_Solutions" },
    { name: "Business Consulting", link: "/services/Business_Consultings" },
  ];

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/hiring" },
    { name: "Get Demo", link: "/GetDemo" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Soft Glowing Light Blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Logo + Text + Social */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Logo + Paragraph */}
          <div className="flex items-start gap-6">
            {/* Logo */}

            {/* Text with icon box */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2 overflow-auto object-cover ">
                <img
                  src="/Footer.png"
                  alt=""
                  className="w-80 mb-4"
                />
              </div>

              <p className="text-gray-200 max-w-sm leading-relaxed">
                Digital Marketing, Graphic Designing, Website & App Development,
                IT & AI Solutions, Business Consulting — all under one roof.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {[
                  {
                    icon: <FaFacebook />,
                    link: "https://www.facebook.com/share/1FYPKKECea/",
                    bg: "bg-blue-500",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/worknestconnect",
                    bg: "bg-pink-500",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://www.x.com/Worknestconnect",
                    bg: "bg-sky-500",
                  },
                  {
                    icon: <FaYoutube />,
                    link: "https://www.youtube.com/@worknestconnect",
                    bg: "bg-red-600",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className={`${item.bg} p-3 rounded-full hover:scale-125 transform transition-all duration-300 shadow-lg`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-gray-200">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-200">
                {navigation.map((nav, idx) => (
                  <li key={idx}>
                    <Link
                      to={nav.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Contact Info
              </h4>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-green-400" />{" "}
                  info@worknestconnect.com
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-green-400" /> +974 3117 5515
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-green-400" /> Address: To
                  be confirmed
                </li>
                <li className="text-gray-400 mt-4">
                  Website: www.worknestconnect.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-900/40 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} WorknestConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
