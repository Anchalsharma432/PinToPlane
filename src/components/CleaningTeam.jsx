import React from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";
const CleaningTeam = () => {
    const experts = [
      {
        name: "Kartik Sharma",
        gender: "He",
        image: "/cleanerImg1.png",
      },
      {
        name: "Ashu Sharma",
        gender: "He",
        image: "/cleanerImg1.png",
      },
      {
        name: "Anchal Sharma",
        gender: "She",
        image: "/cleanerImg2.png",
      },
    ];
  return (
    <section className="md:p-10 xl:p-30 lg:p-20 p-5 max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex md:flex-row flex-col justify-between items-start text-center mb-10 pb-5 border-b border-[#44acfc]">
            <h2 className=" md:text-5xl text-xl text-left font-bold text-gray-900">
              Effective Cleaning Requires <br /> an Expert Cleaning Team
            </h2>
            <p className="text-left md:pl-6 pl-0 text-sm text-gray-600 max-w-md md:pt-0 pt-2">
              <strong className="text-black text-md">Expert Team</strong> <br />
              We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space.
            </p>
            
          </div>
          
    
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-[#EAF3FC] rounded-xl border border-gray-200 shadow-md overflow-hidden text-center"
              >
                {/* Image on top */}
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-auto  object-cover rounded-t-xl"
                />
    
                {/* Text content below */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {expert.name}
                  </h3>
    
                  <div className="flex justify-center mt-2 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
    
                  <p className="mt-2 text-sm text-gray-600 px-2">
                    {expert.gender} is an expert cleaning staff member who provides
                    thorough cleaning with precision,
                  </p>
    
                  <div className="flex justify-center space-x-4 mt-4 text-gray-700 text-lg">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>)
}

export default CleaningTeam