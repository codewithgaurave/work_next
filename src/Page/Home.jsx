import React from "react";
import Home_heading from "../Component/Home_heading";
import TestimonialCarousel from "../Component/Home_TestimonialCarousel";
import Footer from "../Component/Footer";
import Services from "../Component/Services";

function Home() {
  return (
    <>
      <Home_heading />
      <Services />
      <TestimonialCarousel />
      <Footer />
    </>
  );
}

export default Home;
