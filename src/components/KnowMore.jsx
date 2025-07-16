import React from 'react'

const KnowMore = () => {
  return (
    <div id="about">
    <section className="bg-white w-full flex items-center justify-center md:p-10 xl:p-30 lg:p-20 p-5">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Area */}
        <div className="flex-1 relative flex flex-col items-start gap-4">
          {/* Back image */}
          <div className="w-full max-w-xs rounded-[22px] overflow-hidden border-l-[10px] border-t-[10px] border-[#44acfc] shadow-xl">
            <img
              src="/getQuote1.png" // put in public/ folder
              alt="Cleaner working"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlapping front image */}
          <div className="absolute bottom-[-30px] left-[240px] w-40 sm:w-48 md:w-56 lg:w-60 hidden md:block rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white">
            <img
              src="/getQuote1.png" // put in public/ folder
              alt="Smiling cleaner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Welcome To Our<br />
          Pro-cleaning Company!
          </h1>
          <p className="text-gray-900 text-sm md:text-md mb-6">
          We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!"
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mt-6">
  {[
    "Vetted professionals",
    "Next day availability",
    "Standard cleaning tasks",
    "Affordable Prices",
    "Best Quality",
    "Affordable Prices",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-50"
    >
      <span className="text-[#44acfc] text-lg">✔️</span>
      <span className="text-sm font-semibold text-gray-800">{item}</span>
    </div>
  ))}
</div>

          <button className="bg-[#44acfc] hover:bg-[#3499e6] text-white text-sm font-semibold py-2 px-4 mt-5 rounded shadow-md transition duration-300">
            Get a quote
          </button>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default KnowMore