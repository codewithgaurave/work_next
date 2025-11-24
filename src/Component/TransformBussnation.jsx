import React from "react";
import { FaRocket } from "react-icons/fa";

function TransformBussnation() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white relative overflow-hidden">
        {/* Floating Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-36 h-36 bg-green-400 rounded-full opacity-20 animate-float-medium shadow-xl"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-green-400 rounded-full opacity-20 animate-float-slow shadow-xl" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-float-fast shadow-xl" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10 font-semibold">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-[#ffff] mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Let's create something extraordinary together. Your success story starts here.
          </p>

          <a
            href="/contact"
            className="inline-flex i bg-gradient-to-r from-green-900 to-green-600 hover:from-green-600 hover:to-green-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-blue-500/20"
          >
            Start Your Journey Now
            <FaRocket className="ml-3 text-[#3a2407] animate-bounce" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default TransformBussnation;
