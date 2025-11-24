// components/TestimonialCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const scrollStep = 1.2; // smoother speed
  const [isPaused, setIsPaused] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1);

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "TechCorp",
      rating: 5,
      comment: "Their team transformed our online presence!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      company: "MarketingPro",
      rating: 4,
      comment: "Excellent digital marketing services!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Carol Williams",
      company: "BizSolutions",
      rating: 5,
      comment: "Our traffic and sales increased dramatically!",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "David Lee",
      company: "Innovatech",
      rating: 5,
      comment: "Highly recommend their expert team!",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Eva Brown",
      company: "BrandMasters",
      rating: 4,
      comment: "Professional and reliable marketing solutions.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Frank Wilson",
      company: "TechWave",
      rating: 5,
      comment: "Amazing results in just a few months!",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];

  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        if (carouselRef.current && !isPaused) {
          carouselRef.current.scrollLeft += scrollStep * scrollDirection;

          if (
            carouselRef.current.scrollLeft >=
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
          ) {
            setScrollDirection(-1);
          } else if (carouselRef.current.scrollLeft <= 0) {
            setScrollDirection(1);
          }
        }
      }, 16); // 60fps smooth
    };

    startScroll();
    return () => clearInterval(intervalRef.current);
  }, [isPaused, scrollDirection]);

  return (
    <section className="py-20 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-green-600">Clients</span> Say
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Real feedback from businesses who trust our premium digital
            services.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-hidden scroll-smooth"
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="
                min-w-[23%] bg-white p-6 rounded-2xl border 
                border-gray-300 shadow-md hover:shadow-xl 
                transition-all duration-300 flex-shrink-0
                hover:scale-[1.03]
              "
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-xl object-cover border"
                />
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
