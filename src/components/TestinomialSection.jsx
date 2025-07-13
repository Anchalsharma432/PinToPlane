import React from 'react'
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const TestinomialSection = () => {
    const testimonials = [
        {
          name: "Robert Fox",
          role: "Business Man",
          image: "/cleanerImg2.png",
          feedback:
            "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.",
        },
        {
          name: "Emily Johnson",
          role: "Teacher",
          image: "/cleanerImg1.png",
          feedback:
            "They cleaned every corner of our house like it was brand new. I love the eco-friendly products they use too!",
        },
        {
          name: "David Smith",
          role: "Engineer",
          image: "/cleanerImg3.png",
          feedback:
            "I've used multiple cleaning services, but this one really stands out for their attention to detail and professionalism.",
        },
        {
          name: "Sofia Lee",
          role: "Freelancer",
          image: "/cleanerImg2.png",
          feedback:
            "Fast, friendly, and super clean. It’s such a relief coming home to a tidy space. Definitely using them again.",
        },
      ];
      const variants = {
        enter: (direction) => ({
          x: direction > 0 ? -300 : 300, // reverse this line
          opacity: 0,
          position: "absolute",
        }),
        center: {
          x: 0,
          opacity: 1,
          position: "static",
        },
        exit: (direction) => ({
          x: direction < 0 ? -300 : 300, // reverse this line too
          opacity: 0,
          position: "absolute",
        }),
      };
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);


  const paginate = (newDirection) => {
    setCurrentIndex([
      (currentIndex + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  const current = testimonials[currentIndex];
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side: Heading + Description + Buttons */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          Feedback About Their Experience With Us
        </h2>
        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
          Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Right Side: Animated Testimonial Card */}
      {/* <div className="relative w-full max-w-xl mx-auto min-h-[200px]"> */}
      <div className="relative w-full max-w-xl mx-auto min-h-[180px] rounded-[18px] overflow-hidden border-r-[7px] border-t-[7px] border-[#44acfc] shadow-xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="border border-blue-400 rounded-2xl p-6 flex items-start shadow-md bg-white"
          >
            <img
              src={current.image}
              alt={current.name}
              className="w-[6rem] h-[8rem] rounded-lg object-cover mr-5"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-md font-semibold text-gray-900">{current.name}</h3>
                  <p className="text-sm text-gray-500">{current.role}</p>
                </div>
                <FaQuoteRight className="text-blue-400 text-[2.5rem]" />
              </div>

              <div className="flex text-yellow-400  mt-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              <p className="text-sm text-gray-700 mt-3 text-left">{current.feedback}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TestinomialSection