import React from 'react'

const ServiceSection = () => {
  return (
    <section className="md:p-10 xl:p-35 lg:p-20 p-5 bg-white">
      <div className="flex md:flex-row flex-col justify-between items-start mb-10">
        <div>
          <h2 className="text-left  md:text-5xl text-xl font-bold text-black mb-2">
            We Always Provide The <br />
            Best Service
          </h2>
        </div>
        <p className="text-left max-w-md text-gray-600 md:text-md text-sm">
          <strong className="font-semibold  md:text-lg text-md text-black">Services</strong><br/>
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Office Cleaning",
            image: "/kitchenService.png",
          },
          {
            title: "Spring Cleaning",
            image: "/livingService.png",
          },
          {
            title: "House Cleaning",
            image: "/cleanerImg3.png",
          },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-4 text-left">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-68 object-cover rounded mb-8"
            />
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
            <button
              variant="outline"
              className="border border-black text-black px-4 mt-5 py-2 rounded shadow hover:bg-[#44acfc] hover:text-white hover:border-[#44acfc]"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection