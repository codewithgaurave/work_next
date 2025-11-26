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

      {/* RIGHT SIDE SOCIAL MEDIA */}
      <div
        className="
          fixed right-0 top-1/2 -translate-y-1/2
          flex flex-col gap-4 pr-2
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
      </div>
    </>
  );
}
