import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";




export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate();

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "ar", name: "العربية" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1294) {
        setOpenService(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openDrawer]);

  // Close search and language when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearch && !event.target.closest(".search-container")) {
        setShowSearch(false);
      }
      if (showLanguage && !event.target.closest(".language-container")) {
        setShowLanguage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch, showLanguage]);

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const searchMappings = {
      "digital marketing": "/services/Digital_Marketing",
      marketing: "/services/Digital_Marketing",
      "graphic design": "/services/Graphic_designing_services",
      design: "/services/Graphic_designing_services",
      "web development": "/services/Website_and_App_Development",
      "app development": "/services/Website_and_App_Development",
      website: "/services/Website_and_App_Development",
      "it solutions": "/services/IT_&_AI_Solutions",
      "ai solutions": "/services/IT_&_AI_Solutions",
      "business consulting": "/services/Business_Consultings",
      consulting: "/services/Business_Consultings",
      about: "/about",
      careers: "/Careers",
      demo: "/GetDemo",
      home: "/",
    };

    const matchedRoute = Object.keys(searchMappings).find(
      (key) => query.includes(key) || key.includes(query)
    );

    if (matchedRoute) {
      navigate(searchMappings[matchedRoute]);
    } else {
      navigate("/contact");
    }

    setSearchQuery("");
    setShowSearch(false);
  };

  // Language selection functionality
  const handleLanguageSelect = (language, code) => {
    if (window.changeLanguageByButton) {
      window.changeLanguageByButton(code);
    }
    setSelectedLanguage(language);
    setShowLanguage(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200 font-[Poppins] transition-all duration-500 ${
          isScrolled ? "py-2" : "py-0"
        }`}
      >
        <div className="w-full mx-auto pr-4 sm:pr-6 lg:pr-5 xl:pr:30 h-20 flex items-center justify-between">
          {/* LOGO - Left side with larger size */}
          <NavLink to="/" className="shrink-0 z-60 group hidden sm:block">
            <img
              src="/Main2.png"
              alt="logo"
              className="h-30 lg:h-28 xl:h-33  w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
          </NavLink>
          <NavLink
            to="/"
            className="shrink-0 z-60 group sm:hidden flex justify-center pl-[30px]"
          >
            <img
              src="/logo3.png"
              alt="/logo3.png"
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          {/* CENTER NAV LINKS - Hidden below 1294px */}
          <ul className="hidden xl:flex items-center justify-center flex-1 max-w-2xl xl:gap-3 lg:gap-1 text-[13px] xl:text-[17px] font-semibold text-gray-900">
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "oklch(72.3% 0.219 149.579)" : "inherit",
                })}
                className="relative group px-4 py-3 transition-all duration-300 hover:text-[#012017da]"
                to="/"
              >
                Home
                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-linear-to-r from-[#013026] to-[#027A55] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                <span className="absolute -inset-2 bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "oklch(72.3% 0.219 149.579)" : "inherit",
                })}
                className="relative group px-4 py-3 transition-all duration-300 hover:text-[#012017da]"
                to="/about"
              >
                About
                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-linear-to-r from-[#013026] to-[#027A55] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                <span className="absolute -inset-2 bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpenService(true)}
              onMouseLeave={() => setOpenService(false)}
            >
              <div className="flex items-center gap-2 px-4 py-3 transition-all duration-300 hover:text-[#012017da]">
                Services
                <ChevronDown
                  size={18}
                  className={`transition-all duration-500 ${
                    openService ? "rotate-180 text-[#027A55]" : "text-gray-600"
                  }`}
                />
                <span className="absolute -inset-2 bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </div>

              {/* Enhanced Dropdown with better animation */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 py-4 mt-2 transition-all duration-500 ${
                  openService
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                }`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>

                <ul className="flex flex-col gap-2 px-3 text-gray-700 text-[15px]">
                  {[
                    {
                      path: "/services/Digital_Marketing",
                      name: "Digital Marketing",
                    },
                    {
                      path: "/services/Graphic_designing_services",
                      name: "Graphic Designing",
                    },
                    {
                      path: "/services/Website_and_App_Development",
                      name: "Web & App Development",
                    },
                    {
                      path: "/services/IT_&_AI_Solutions",
                      name: "IT & AI Solutions",
                    },
                    {
                      path: "/services/Business_Consultings",
                      name: "Business Consulting",
                    },
                  ].map((service) => (
                    <li key={service.path}>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive
                            ? "oklch(72.3% 0.219 149.579)"
                            : "inherit",
                        })}
                        to={service.path}
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 hover:text-[#012017da] transition-all duration-300 group/item"
                        onClick={() => setOpenService(false)}
                      >
                        <span className="w-2 h-2 bg-linear-to-r from-[#013026] to-[#027A55] rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></span>
                        {service.name}
                        <ChevronDown
                          size={14}
                          className="ml-auto -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300 text-[#027A55]"
                        />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "oklch(72.3% 0.219 149.579)" : "inherit",
                })}
                className="relative group px-3 py-3 transition-all duration-300 hover:text-[#012017da]"
                to="/contact"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-linear-to-r from-[#013026] to-[#027A55] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                <span className="absolute -inset-2 bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "oklch(72.3% 0.219 149.579)" : "inherit",
                })}
                className="relative group px-3 py-3 transition-all duration-300 hover:text-[#012017da]"
                to="/Project"
              >
                Project
                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-linear-to-r from-[#013026] to-[#027A55] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                <span className="absolute -inset-2 bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </NavLink>
            </li>
          </ul>

          {/* RIGHT BUTTONS - Hidden below 1294px */}
          <div className="hidden xl:flex items-center gap-4 ml-8">
            {/* Search Button */}
            <div className="relative search-container">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2.5 bg-gray-100 hover:bg-linear-to-r hover:from-[#013026]/10 hover:to-[#027A55]/10 rounded-xl transition-all duration-300 group"
              >
                <Search
                  size={18}
                  className="text-gray-700 group-hover:text-[#012017da] transition-colors duration-300"
                />
              </button>

              {/* Search Dropdown */}
              {showSearch && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 p-4 z-50">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search services, pages..."
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#027A55] focus:outline-none transition-all duration-300 text-sm"
                      autoFocus
                    />
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </form>
                </div>
              )}
            </div>

            {/* Language Selection Button */}
            <div
              className="relative language-container"
              onMouseEnter={() => setShowLanguage(true)}
              onMouseLeave={() => setShowLanguage(false)}
            >
              <button className="p-2.5 bg-gray-100 hover:bg-linear-to-r hover:from-[#013026]/10 hover:to-[#027A55]/10 rounded-xl transition-all duration-300 group">
                <Globe
                  size={18}
                  className="text-gray-700 group-hover:text-[#012017da] transition-colors duration-300"
                />
              </button>

              {/* Language Dropdown */}
              {showLanguage && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 py-2 z-50">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.name, language.code)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-linear-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 hover:text-[#012017da] transition-all duration-300 ${
                        selectedLanguage === language.name
                          ? "bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 text-[#012017da]"
                          : "text-gray-700"
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>


            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "oklch(72.3% 0.219 149.579)" : "white",
              })}
              to="/Careers"
              className="relative px-6 py-2.5 bg-linear-to-r from-[#013026] to-[#027A55] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 font-semibold text-sm group overflow-hidden"
            >
              <span className="relative z-10">Careers</span>
              <span className="absolute inset-0 bg-linear-to-r from-[#027A55] to-[#013026] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 rounded-xl border-2 border-transparent bg-linear-to-r from-[#013026] to-[#027A55] bg-clip-padding group-hover:from-[#027A55] group-hover:to-[#013026] transition-all duration-500"></span>
            </NavLink>

            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "oklch(72.3% 0.219 149.579)" : "black",
              })}
              to="/GetDemo"
              className="relative px-6 py-2.5 border-2 border-[#012017da] 
             text-[#012017da] 
             group hover:text-white 
             transition-all duration-500 font-semibold text-sm 
             rounded-xl overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white">
                Get Demo
              </span>

              <span
                className="absolute inset-0 bg-linear-to-r from-[#013026] to-[#027A55] 
                 scale-0 group-hover:scale-100 
                 transition-transform duration-500 
                 origin-center rounded-lg"
              ></span>
            </NavLink>
          </div>

          {/* MOBILE SEARCH & BUTTONS - Visible below 1294px */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Get Started Button - Hidden below 640px */}
            <NavLink
              to="/GetDemo"
              className="hidden sm:block px-4 py-2 bg-gradient-to-r from-[#013026] to-[#027A55] text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </NavLink>
            {/* Mobile Search Bar - Full width below 1294px */}
            <div className="flex-1 max-w-xs">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-8 pr-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#027A55] focus:outline-none transition-all duration-300 text-sm max-[450px]:hidden"
                  />
                  <Search
                    size={16}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </form>
            </div>

            {/* Mobile Language Selection */}
            <div className="relative language-container">
              <button
                onClick={() => setShowLanguage(!showLanguage)}
                className="p-2 bg-gray-100 hover:bg-linear-to-r hover:from-[#013026]/10 hover:to-[#027A55]/10 rounded-lg transition-all duration-300 group"
              >
                <Globe
                  size={16}
                  className="text-gray-700 group-hover:text-[#012017da] transition-colors duration-300"
                />
              </button>

              {/* Mobile Language Dropdown */}
              {showLanguage && (
                <div className="absolute top-full right-0 mt-2 w-28 bg-white/98 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-200 py-1 z-50">
                  {[
                    { code: "en", name: "English" },
                    { code: "hi", name: "हिंदी" },
                    { code: "ar", name: "العربية" },
                  ].map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.name, language.code)}
                      className={`w-full text-left px-2 py-1.5 text-xs hover:bg-linear-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 hover:text-[#012017da] transition-all duration-300 ${
                        selectedLanguage === language.name
                          ? "bg-linear-to-r from-[#013026]/5 to-[#027A55]/5 text-[#012017da]"
                          : "text-gray-700"
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setOpenDrawer(true)}
              className="relative p-2.5 bg-gray-100 hover:bg-linear-to-r hover:from-[#013026]/10 hover:to-[#027A55]/10 rounded-xl transition-all duration-300 group"
            >
              <Menu
                size={22}
                className="text-gray-700 group-hover:text-[#012017da] transition-colors duration-300"
              />
              <span className="absolute inset-0 border-2 border-transparent bg-linear-to-r from-[#013026] to-[#027A55] bg-clip-padding rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER - Now slides down from TOP */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          openDrawer ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-all duration-500 ${
            openDrawer ? "opacity-70" : "opacity-0"
          }`}
          onClick={() => setOpenDrawer(false)}
        ></div>

        {/* Drawer Content - Now from TOP */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 flex flex-col max-h-[85vh] rounded-b-3xl ${
            openDrawer ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* HEADER - Fixed at top */}
          <div className="flex-shrink-0 p-6 flex justify-between items-center border-b border-gray-200 bg-gradient-to-r from-white to-gray-50/50">
            <div className="flex items-center gap-3">
              <img
                src="/logo4.png"
                alt="logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setOpenDrawer(false)}
              className="p-2.5 bg-gray-100 hover:bg-gradient-to-r hover:from-[#013026]/10 hover:to-[#027A55]/10 rounded-xl transition-all duration-300 group"
            >
              <X
                size={22}
                className="text-gray-700 group-hover:text-[#012017da] transition-colors duration-300"
              />
            </button>
          </div>

          {/* SCROLLABLE CONTENT AREA */}
          <div className="flex-1 overflow-y-auto">
            {/* MENU ITEMS */}
            <div className="p-6 flex flex-col gap-2">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "oklch(72.3% 0.219 149.579)" : "inherit",
                  })}
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpenDrawer(false)}
                  className="group relative px-4 py-4 text-gray-700 font-semibold text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-[#012017da] transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#013026] to-[#027A55] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ChevronDown
                      size={18}
                      className="-rotate-90 text-[#027A55]"
                    />
                  </span>
                </NavLink>
              ))}

              {/* Services Accordion */}
              <div className="relative">
                <details className="group">
                  <summary className="cursor-pointer flex justify-between items-center px-4 py-4 text-gray-700 font-semibold text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 transition-all duration-300 list-none">
                    <span className="group-hover:text-[#012017da] transition-colors duration-300">
                      Services
                    </span>
                    <ChevronDown
                      size={20}
                      className="text-gray-500 group-open:rotate-180 group-hover:text-[#027A55] transition-all duration-500"
                    />
                  </summary>

                  <div className="ml-6 mt-2 flex flex-col gap-1 border-l-2 border-gradient-to-b from-[#013026] to-[#027A55]">
                    {[
                      {
                        path: "/services/Digital_Marketing",
                        name: "Digital Marketing",
                      },
                      {
                        path: "/services/Graphic_designing_services",
                        name: "Graphic Designing",
                      },
                      {
                        path: "/services/Website_and_App_Development",
                        name: "Web & App Development",
                      },
                      {
                        path: "/services/IT_&_AI_Solutions",
                        name: "IT & AI Solutions",
                      },
                      {
                        path: "/services/Business_Consultings",
                        name: "Business Consulting",
                      },
                    ].map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={() => setOpenDrawer(false)}
                        className="px-4 py-3 text-gray-600 font-medium text-base rounded-lg hover:bg-gradient-to-r hover:from-[#013026]/5 hover:to-[#027A55]/5 hover:text-[#012017da] transition-all duration-300 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#013026] to-[#027A55] rounded-full"></span>
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              <Link
                to="/GetDemo"
                onClick={() => setOpenDrawer(false)}
                className="w-full py-3.5 bg-gradient-to-r from-[#013026] to-[#027A55] text-white font-semibold rounded-xl text-center transition-all duration-500 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#027A55] to-[#013026] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
              <Link
                to="/Careers"
                onClick={() => setOpenDrawer(false)}
                className="w-full py-3.5 border-2 border-[#012017da] text-[#012017da] font-semibold rounded-xl text-center transition-all duration-500 hover:bg-gradient-to-r hover:from-[#013026] hover:to-[#027A55] hover:text-white hover:border-transparent hover:scale-105"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
