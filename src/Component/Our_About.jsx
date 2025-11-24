import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    icon: "🎯",
    services: [
      "SEO",
      "Social Media Management",
      "Content Marketing Strategy",
      "Google Ads",
      "Meta Ads",
      "YouTube and Snapchat ads",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Graphic Designing Services",
    icon: "🎨",
    services: [
      "Logo (All Types)",
      "Business cards",
      "Employee ID Cards",
      "Social media Graphics",

      "Digital and Print Ad Design",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Website & App Development Service",
    icon: "💻",
    services: [
      "Website Designs and Development",
      "IOS/Android Application development",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "IT & AI Solutions",
    icon: "🤖",
    services: [
      "Billing Softwares",
      "Task Management Softwares",
      "Payroll Management Softwares",
      "Invoice and Billing Softwares",
      "Pos Softwares",
      "AI solution and Chatbots",
      "Saas Products Development",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Business Consultings",
    icon: "📊",
    services: [
      "Business Setup Support",
      "PRO Services",
      "Market Entry Guidance",
      "HR Policy Basics",
      "IT Setup & Advisory",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function AboutWorknest() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Company Brief */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-[#08301c] bg-clip-text text-transparent">
            About WorknestConnect
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            WorknestConnect is a forward-thinking digital and IT solutions company. We empower businesses with innovative marketing strategies, creative graphic designs, custom websites & mobile applications, and AI-powered solutions. Our mission is to help your business grow efficiently and stay ahead in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-200"
            >
              <div
                className={`text-6xl mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
