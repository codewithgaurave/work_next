import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function SidebarText() {
  return (
    <>
      {/* LEFT BUTTON 1 */}
      <Link
        to="/contact"
        className="
          fixed left-[-45px] top-[40%] -translate-y-1/2
          -rotate-90 origin-center
          px-6 py-3
          bg-red-600
          text-white font-bold tracking-wide
          shadow-lg shadow-emerald-800/40
          border border-white/20 rounded-lg
          hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/50
          transition-all duration-300 cursor-pointer z-50
        "
      >
        Contact Us
      </Link>

      {/* LEFT BUTTON 2 */}
      <Link
        to="/GetDemo"
        className="
          fixed left-[-42px] top-[60%] -translate-y-1/2
          -rotate-90 origin-center
          px-6 py-3
          bg-red-600
          text-white font-bold tracking-wide
          shadow-lg shadow-emerald-800/40
          border border-white/20 rounded-lg
          hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/50
          transition-all duration-300 cursor-pointer z-50
        "
      >
        Demo Now
      </Link>

      {/* RIGHT SIDE SOCIAL MEDIA BAR */}
      <div
        className="
          fixed right-0 top-1/2 -translate-y-1/2
          flex flex-col gap-4 pr-2
          z-50
        "
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/worknestconnect/"
          target="_blank"
          className="
            bg-gradient-to-br from-pink-600 to-purple-600
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1FYPKKECea/"
          target="_blank"
          className="
            bg-blue-600
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaFacebookF />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919743117515"
          target="_blank"
          className="
            bg-green-500
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaWhatsapp />
        </a>

        {/* Twitter */}
        <a
          href="https://www.x.com/Worknestconnect"
          target="_blank"
          className="
            bg-sky-500
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaTwitter />
        </a>
      </div>
    </>
  );
}
