import React, { useState } from "react";
import { FaRocket, FaTimes } from "react-icons/fa";

function TransformBussnation() {
  const [model, setModel] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thank you ${formData.name}! Your demo request has been submitted.`);

    setModel(false);

    setFormData({
      name: "",
      fullName: "",
      email: "",
      mobile: "",
      qualification: "",
      cv: null,
      image: null,
    });
  };

  return (
    <div>
      {/* Main Section */}
      <section className="py-20 bg-gradient-to-b from-[#01291F] via-[#0F4F3C] to-[#01291F] text-white relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-36 h-36 bg-green-400 rounded-full opacity-20 animate-float-medium shadow-xl"></div>
          <div
            className="absolute top-32 right-20 w-48 h-48 bg-green-400 rounded-full opacity-20 animate-float-slow shadow-xl"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-float-fast shadow-xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10 font-semibold">
          <h2 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl md:text-2xl text-[#fff] mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your success story
            starts here.
          </p>

          {/* Button */}
          <button
            onClick={() => setModel(true)}
            className="inline-flex items-center bg-gradient-to-r from-green-900 to-green-600 hover:from-green-600 hover:to-green-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Start Your Journey Now
            <FaRocket className="ml-3 text-[#3a2407] animate-bounce" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {model && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center p- z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] sm:mt-[200px] mt-[100px] overflow-y-auto animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold">Request a Demo</h2>

              <button
                onClick={() => setModel(false)}
                className="text-white hover:text-emerald-200 transition p-1 rounded-full hover:bg-white/10"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Email & Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      name="Adress"
                      value={formData.Message}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransformBussnation;
