import { useState } from "react";
import Footer from "../Component/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: null,
    qualification: "",
    address: "",
    district: "",
    state: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      resume: null,
      qualification: "",
      address: "",
      district: "",
      state: "",
      country: "",
    });
  };
  return (
    <div class main>
      <header className="relative bg-[#01291F] text-white overflow-hidden mt-[80px] ">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaEnvelope className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Reach Out to Our Team
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Contact Us
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl  text-green-400">
              Let’s Build Something Amazing Together
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-yellow-100 leading-relaxed drop-shadow-sm">
            Have a project, question, or idea? Get in touch with us and our team
            will help you turn it into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Contact Our Team</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="/services/Digital_Marketing"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Services
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </header>

      <section className="min-h-screen bg-white px-4 relative overflow-hidden " id="contact" >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200 shadow-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-700 font-semibold text-sm">
                  We're Hiring!
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Start Your{" "}
                <span className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                  Career
                </span>{" "}
                Journey With Us
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join WorknestConnect and be part of an innovative team that's
                shaping the future of digital solutions. We're looking for
                passionate individuals ready to make an impact.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Fast Growing Company
                  </h3>
                  <p className="text-gray-600">
                    Join a rapidly expanding team with global reach
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">💼</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Career Growth
                  </h3>
                  <p className="text-gray-600">
                    Clear progression paths and skill development
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Global Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Work with clients and teams from around the world
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  50+
                </div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  200+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  15+
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            {/* Floating Animation Container */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-200 rounded-full opacity-60 animate-float"></div>
            <div
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-12 w-12 h-12 bg-cyan-300 rounded-full opacity-60 animate-float"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl p-8  border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 via-green-500 to-purple-200 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50"></div>

              <div className="relative z-10">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-3">
                    Apply Now
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-hover:text-green-600 transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-green:text-blue-600 transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Mobile & Resume */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-green:text-purple-600 transition-colors">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:green-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-green:text-cyan-600 transition-colors">
                        Upload Resume *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          name="resume"
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-green-900 file:to-green-500 file:text-white hover:file:from-green-600 hover:file:to-blue-600 transition-all duration-300 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-gray-300"
                          accept=".pdf,.doc,.docx"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 group-hover:text-yellow-600 transition-colors">
                      Qualification *
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-gray-300"
                    >
                      <option value="" className="bg-white">
                        Select your qualification
                      </option>
                      <option value="10th" className="bg-white">
                        10th Grade
                      </option>
                      <option value="12th" className="bg-white">
                        12th Grade
                      </option>
                      <option value="Diploma" className="bg-white">
                        Diploma
                      </option>
                      <option value="B.Tech" className="bg-white">
                        B.Tech
                      </option>
                      <option value="BCA" className="bg-white">
                        BCA
                      </option>
                      <option value="Other" className="bg-white">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 group-hover:green-600 transition-colors">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-green-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 resize-none hover:border-gray-300"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  {/* Location Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-hover:text-green-600 transition-colors">
                        District *
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="District"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="State"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-gray-300"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-green-900 to-green-500 text-white font-bold rounded-xl hover:from-green-500 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map start */}

      <Footer />
    </div>
  );
}
