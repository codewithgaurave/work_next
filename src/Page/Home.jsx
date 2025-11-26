import React from "react";
import Home_heading from "../Component/Home_heading";
import TestimonialCarousel from "../Component/Home_TestimonialCarousel";
import Footer from "../Component/Footer";
import Services from "../Component/Services";
import TransformBussnation from "../Component/TransformBussnation";

function Home() {
  return (
    <>
      <Home_heading />
      <Services />
      <TransformBussnation />
      <TestimonialCarousel />
      <Footer />
    </>
  );
}

export default Home;
