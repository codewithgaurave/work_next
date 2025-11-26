import React, { useState } from "react";
import Footer from "../Component/Footer";
import { Dialog } from "primereact/dialog";
import { Navigate, useNavigate } from "react-router-dom";

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    address: "",
    cv: null,
    qualificationDoc: null,
  });

  const Navigate = useNavigate();
  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLE FILES
  const handleFile = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  // SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM DATA →", formData);

    alert("Form submitted! Check console.");
  };

  const departments = [
    {
      id: "digital",
      title: "Digital Marketing",
      icon: "📱",
      description:
        "Drive growth through innovative digital strategies and campaigns",
      openings: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "design",
      title: "Graphic Design",
      icon: "🎨",
      description:
        "Create stunning visual experiences that captivate audiences",
      openings: 3,
      color: "from-blue-500 to-teal-400",
    },
    {
      id: "development",
      title: "Web & App Development",
      icon: "💻",
      description: "Build cutting-edge digital solutions and platforms",
      openings: 7,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: "ai",
      title: "AI & IT Solutions",
      icon: "🤖",
      description: "Develop intelligent systems and software solutions",
      openings: 4,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "consulting",
      title: "Business Consulting",
      icon: "📊",
      description: "Guide businesses toward success and growth",
      openings: 2,
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior SEO Specialist",
      department: "digital",
      type: "Full-time",
      location: "Remote",
      experience: "3-5 years",
      salary: "₹6-8 LPA",
      description:
        "We're looking for an experienced SEO specialist to drive our organic growth strategies and improve search engine rankings for our clients.",
      requirements: [
        "Proven experience in SEO strategy and implementation",
        "Expertise in keyword research and analytics tools",
        "Strong understanding of technical SEO",
        "Experience with link building and content optimization",
      ],
      skills: [
        "SEO",
        "Google Analytics",
        "SEMrush",
        "Content Strategy",
        "Technical SEO",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "design",
      type: "Full-time",
      location: "Hybrid",
      experience: "2-4 years",
      salary: "₹5-7 LPA",
      description:
        "Join our creative team to design intuitive and beautiful user experiences for web and mobile applications.",
      requirements: [
        "Portfolio demonstrating UI/UX design skills",
        "Proficiency in Figma, Adobe Creative Suite",
        "Understanding of user-centered design principles",
        "Experience with prototyping and wireframing",
      ],
      skills: [
        "Figma",
        "UI/UX Design",
        "Prototyping",
        "Wireframing",
        "User Research",
      ],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "development",
      type: "Full-time",
      location: "Remote",
      experience: "3-6 years",
      salary: "₹8-12 LPA",
      description:
        "We need a skilled full stack developer to build and maintain web applications using modern technologies.",
      requirements: [
        "Experience with React, Node.js, and MongoDB",
        "Knowledge of RESTful APIs and microservices",
        "Understanding of cloud platforms (AWS/Azure)",
        "Familiarity with DevOps practices",
      ],
      skills: ["React", "Node.js", "MongoDB", "AWS", "REST APIs"],
    },
    {
      id: 4,
      title: "AI Solutions Architect",
      department: "ai",
      type: "Full-time",
      location: "On-site",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      description:
        "Lead the design and implementation of AI solutions for our enterprise clients.",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with machine learning frameworks",
        "Knowledge of NLP and computer vision",
        "Previous experience in AI solution architecture",
      ],
      skills: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "NLP",
        "Cloud AI Services",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing Manager",
      department: "digital",
      type: "Full-time",
      location: "Hybrid",
      experience: "4-7 years",
      salary: "₹9-13 LPA",
      description:
        "Manage and oversee all digital marketing campaigns to drive brand awareness and lead generation.",
      requirements: [
        "Proven experience in digital marketing management",
        "Expertise in Google Ads, Meta Ads, and analytics",
        "Strong leadership and team management skills",
        "Experience with marketing automation tools",
      ],
      skills: [
        "Google Ads",
        "Meta Ads",
        "Team Management",
        "Analytics",
        "Marketing Strategy",
      ],
    },
    {
      id: 6,
      title: "Business Development Consultant",
      department: "consulting",
      type: "Full-time",
      location: "On-site",
      experience: "3-5 years",
      salary: "₹7-10 LPA",
      description:
        "Help clients develop growth strategies and improve their business operations.",
      requirements: [
        "Experience in business consulting or development",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Knowledge of market research and analysis",
      ],
      skills: [
        "Business Strategy",
        "Market Research",
        "Client Management",
        "Analytics",
        "Presentation Skills",
      ],
    },
  ];

  const filteredJobs =
    activeTab === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* // alopy button demo */}
      <Dialog
        header="Apply for Job"
        visible={openForm}
        style={{ width: "90vw", maxWidth: "600px" }}
        onHide={() => setOpenForm(false)}
        draggable={false}
        className="customDialog rounded-2xl"
        breakpoints={{ "960px": "90vw", "640px": "95vw" }}
      >
        <form
          onSubmit={handleSubmit}
          className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-5 
      p-5 
      bg-white/80 
      backdrop-blur-xl 
      rounded-2xl 
      shadow-2xl 
      border border-gray-300
    "
        >
          {/* NAME */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-800 font-semibold text-sm">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Enter name"
              required
            />
          </div>

          {/* FULL NAME */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-800 font-semibold text-sm">
              Full Name
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-800 font-semibold text-sm">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Enter email"
              required
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-800 font-semibold text-sm">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="number"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* QUALIFICATION */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-gray-800 font-semibold text-sm">
              Highest Qualification
            </label>
            <input
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Ex: B.Tech, M.Tech"
              required
            />
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-gray-800 font-semibold text-sm">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white w-full"
              placeholder="Enter address"
              required
            />
          </div>

          {/* CV UPLOAD */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-gray-800 font-semibold text-sm">
              Upload CV
            </label>
            <input
              name="cv"
              onChange={handleFile}
              type="file"
              className="p-3 rounded-xl border border-gray-300 bg-white w-full"
              required
            />
          </div>

          {/* QUALIFICATION DOC */}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
        md:col-span-2 
        mt-2 
        bg-emerald-700 
        w-full 
        text-white 
        py-3 
        rounded-xl 
        text-lg 
        font-semibold 
        shadow-lg 
        hover:bg-emerald-800 
        transition
         
      "
          >
            Submit Application
          </button>
        </form>
      </Dialog>

      {/* aplly daliye bax end  */}
      {/* Hero Section */}
      <section className="relative bg-[#01291F] text-white overflow-hidden text-white overflow-hidden mt-[80px] py-24">
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large bubbles */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-90 h-90 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          {/* Small floating dots */}
          <span className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-40 right-12 w-3 h-3 bg-green-300/60 rounded-full animate-float"></span>
          <span className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-300/50 rounded-full animate-float"></span>
          <span className="absolute bottom-48 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-1/3 right-1/2 w-2 h-2 bg-green-200/50 rounded-full animate-float"></span>
        </div>

        {/* Glass Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="w-4 h-4 bg-green-400 rounded-full animate-ping absolute -top-1 -right-1"></span>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Join Our Career Opportunities
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            Build Your Career With <br />
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              WorknestConnect
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-yellow-100 drop-shadow-sm">
            Join our innovative team and help shape the future of digital
            solutions. We're building cutting-edge platforms that transform
            businesses worldwide. Grow with us and make an impact!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => Navigate("/contact")}
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-green-400 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Explore Open Positions</span>
            </button>

            <a
              href="#services"
              className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-green-300 font-semibold px-8 py-4 rounded-2xl border-2 border-green-400 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Learn About Our Culture</span>
            </a>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-white mt-[40px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                200+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                5★
              </div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>
      {/* Departments Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center mb-4 text-green-800">
            Our Departments
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore opportunities across our diverse departments and find where
            your skills fit best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveTab(dept.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{dept.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {dept.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Open Positions Section */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#04271e] via-[#062f23] to-[#01291F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step in your career and help us build innovative
            solutions for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setOpenForm(true)}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Apply for This Job
            </button>
            <button
              onClick={() => Navigate("/contact")}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Our HR Team
            </button>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section id="benefits" className="py-16  bg-[#ffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-green-800">
            Why Join WorknestConnect?
          </h2>
          <p className="text-black text-center max-w-2xl mx-auto mb-12 text-xl font-semibold">
            We offer a comprehensive benefits package and a supportive work
            environment to help you thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Competitive Salary
              </h3>
              <p className="text-gray-600">
                We offer industry-leading compensation packages with performance
                bonuses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Flexible Work
              </h3>
              <p className="text-gray-600">
                Remote, hybrid, or on-site - choose what works best for your
                lifestyle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Learning & Growth
              </h3>
              <p className="text-gray-600">
                Access to training, conferences, and mentorship programs for
                career development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Comprehensive health insurance, gym memberships, and wellness
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareersPage;
