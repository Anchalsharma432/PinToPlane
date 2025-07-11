import React from 'react'

const GetQuote = () => {
  return (
    <section className="bg-white w-full flex items-center justify-center md:p-10 xl:p-30 lg:p-20 p-5">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Area */}
        <div className="flex-1 text-left">
          <p className="text-gray-900 text-sm md:text-md mb-2">Affordable cleaning solutions</p>
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            High-Quality and  Friendly <br />
            Services at Fair Prices
          </h1>
          <p className="text-gray-900 text-sm md:text-md mb-6">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
          <button className="bg-[#44acfc] hover:bg-[#3499e6] text-white text-sm font-semibold py-2 px-4 rounded shadow-md transition duration-300">
            Get a quote
          </button>
        </div>

        {/* Image Area */}
        <div className="flex-1 relative flex flex-col items-end gap-4">
          {/* Back image */}
          <div className="w-full max-w-xs rounded-[22px] overflow-hidden border-r-[10px] border-t-[10px] border-[#44acfc] shadow-xl">
            <img
              src="/getQuote1.png" // put in public/ folder
              alt="Cleaner working"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlapping front image */}
          <div className="absolute bottom-[-30px] right-[240px] w-40 hidden md:block md:w-56 lg:w-60 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white">
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