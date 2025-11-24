import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
import Website from "./Website_and_App_Development_Service";
// import Business_Consultings from "./Business_Consultings";
// import IT_Solutions from "./IT_&_AI_Solutions";
// import Graphic from "./Graphic_designing";
// import Digital_marketing from "./Digital_marketing";
import Contact from "./Contact";
import Carres from "./Carres";
import GetDemo from "./Getdemo";
import AboutUs from "./About";
import DigitalMarketing from "./Digital_marketing";
import GraphicDesign from "./Graphic_designing";
// import IT_and_Solustion from "./IT_&_AI_Solutions";
import ITAndAISolutions from "./IT_&_AI_Solutions";
import BusinessConsulting from "./Business_Consultings";
import WebsiteAndAppDevelopment from "./Website_and_App_Development_Service";
import ContactHeader from "./Contact";
import CareerHeader from "./Carres";
import CareersPage from "./Carres";
import DemoForm from "./Getdemo";
import DemoPage from "./Getdemo";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="//services/Digital_Marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/Graphic_designing_services"
          element={<GraphicDesign />}
        />
        <Route
          path="/services/Website_and_App_Development"
          element={<WebsiteAndAppDevelopment />}
        />
        <Route
          path="/services/IT_&_AI_Solutions"
          element={<ITAndAISolutions />}
        />
        <Route
          path="/services/Business_Consultings"
          element={<BusinessConsulting />}
        />
        <Route path="/contact" element={<ContactHeader />} />

        <Route path="/hiring" element={<CareersPage />} />
        <Route path="/GetDemo" element={<DemoPage />} />
      </Routes>
    </>
  );
}

export default Router;
