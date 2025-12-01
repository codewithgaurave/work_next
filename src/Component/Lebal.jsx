import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function SidebarText() {
  return (
    <>
      {/* LEFT BUTTON 2 */}
      <Link
        to="/GetDemo"
        className="
          hidden sm:block
          fixed
          left-[-42px]
          top-1/2      

          -translate-y-1/2
          -rotate-90 origin-center
          px-6 py-3
          bg-green-600
          text-white font-bold tracking-wide
          shadow-lg shadow-emerald-800/40
          border border-white/20 rounded-lg
          hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/50
          transition-all duration-300 cursor-pointer z-50
        "
      >
        Get Demo
      </Link>

      {/* RIGHT SIDE SOCIAL MEDIA */}
      <div
        className="
          hidden sm:flex
          fixed right-0 top-1/2 -translate-y-1/2
          flex-col gap-4 pr-2
          z-50
        "
      >
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

        <a
          href="https://wa.me/9197431175515"
          target="_blank"
          className="
            bg-green-500
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaWhatsapp />
        </a>

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

        <a
          href="https://www.tiktok.com/@worknestconnect?lang=en"
          target="_blank"
          className="
            bg-black
            p-3 rounded-full text-white text-xl
            shadow-lg hover:scale-110 transition-all
          "
        >
          <FaTiktok />
        </a>
      </div>
    </>
  );
}
