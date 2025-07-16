import React from 'react'

const HersoSection = () => {
  return (
    <div id="home">
    <section
      className="md:p-10 xl:p-30 lg:p-20 p-5 w-full max-h-[800px] bg-white flex justify-between"
      style={{
        backgroundImage: "url('/heroImage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-xl rounded">
        <h2 className="text-left md:text-xl text-sm font-bold text-black mb-4">
          Quality cleaning at a fair price.
        </h2>
        <h1 className="text-left md:text-5xl text-xl font-bold text-black leading-tight mb-6">
          Specialized, efficient,
          <br /> and thorough cleaning <br />
          services
        </h1>
        <p className="md:text-xl text-sm text-left text-gray-600 mb-8">
          We provide performing cleaning tasks using the least <br />
          amount of time, energy, and money.
        </p>
        <div className="flex gap-4 md:text-xl text-md">
          <button className="bg-[#44acfc] text-white px-6 py-2 rounded shadow hover:bg-blue-500 md:text-xl text-sm">
            Get Start Now
          </button>
          <button
            variant="outline"
            className="border border-[#44acfc] text-[#44acfc] px-6 py-2 rounded hover:bg-[#f0faff] md:text-xl text-sm"
          >
            View all Services
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HersoSection