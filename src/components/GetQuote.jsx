import React from 'react'

const GetQuote = () => {
  return (
    <section className="bg-white w-full min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Area */}
        <div className="flex-1">
          <p className="text-gray-700 text-sm mb-2">Affordable cleaning solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            High-Quality and Friendly <br />
            Services at Fair Prices
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
          <button className="bg-[#44acfc] hover:bg-[#3499e6] text-white font-semibold py-3 px-6 rounded shadow-md transition duration-300">
            Get a quote
          </button>
        </div>

        {/* Image Area */}
        <div className="flex-1 relative flex flex-col items-end gap-4">
          {/* Back image */}
          <div className="w-full max-w-xs rounded-xl overflow-hidden">
            <img
              src="/getQuote1.png" // put in public/ folder
              alt="Cleaner working"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlapping front image */}
          <div className="absolute bottom-[-30px] right-[240px] w-40 sm:w-48 md:w-56 lg:w-60 rounded-xl overflow-hidden shadow-lg border border-white bg-white">
            <img
              src="/getQuote1.png" // put in public/ folder
              alt="Smiling cleaner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetQuote