import React from 'react'
import { useState } from "react";
const PricingPlans = () => {
    const [billing, setBilling] = useState("monthly");

  const prices = {
    monthly: ["59.00", "69.00", "99.00"],
    yearly: ["599.00", "699.00", "999.00"]
  };
  return (
    <div className="bg-blue-500 pt-16 pb-8 px-4 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm uppercase">Our Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Choose From Our Lowest <br className="hidden md:block" /> Plans and Prices
            </h2>
    
            {/* Toggle */}
            <div className="mt-6 flex justify-center">
              <div className="bg-white rounded-full p-1 flex space-x-1 shadow-inner">
                <button
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                    billing === "monthly" ? "bg-blue-500 text-white" : "text-blue-500"
                  }`}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                    billing === "yearly" ? "bg-blue-500 text-white" : "text-blue-500"
                  }`}
                  onClick={() => setBilling("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
    
          {/* Cards */}
          <div className="relative z-10 mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
            {/* Basic Package */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="font-semibold text-lg">BASIC PACKAGE</h3>
              <p className="text-3xl font-bold text-blue-500 mt-4">
                ${prices[billing][0]}<span className="text-sm font-normal">/{billing === "monthly" ? "Monthly" : "Yearly"}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm list-[circle] text-left">
                <li>Dusting of all surfaces</li>
                <li>Sweeping and mopping floors</li>
                <li>Vacuuming carpets and rugs</li>
                <li>Cleaning of kitchen surfaces</li>
                <li>Cleaning of bathroom surfaces</li>
                <li>Emptying trash bins</li>
              </ul>
              <button className="mt-6 border px-6 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition">
                Book Now
              </button>
            </div>
    
            {/* Enterprise Package */}
            <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center">
              <h3 className="font-semibold text-lg">ENTERPRISE PACKAGE</h3>
              <p className="text-3xl font-bold text-blue-500 mt-4">
                ${prices[billing][1]}<span className="text-sm font-normal">/{billing === "monthly" ? "Monthly" : "Yearly"}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm list-[circle] text-left">
                <li>All services in the Basic Plan</li>
                <li>Detailed dusting</li>
                <li>Wiping down of kitchen appt</li>
                <li>Cleaning inside the microwave</li>
                <li>Changing bed linens</li>
                <li>Spot cleaning walls and doors</li>
              </ul>
              <button className="mt-6 border px-6 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition">
                Book Now
              </button>
            </div>
    
            {/* Premium Package */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="font-semibold text-lg">PREMIUM PACKAGE</h3>
              <p className="text-3xl font-bold text-blue-500 mt-4">
                ${prices[billing][2]}<span className="text-sm font-normal">/{billing === "monthly" ? "Monthly" : "Yearly"}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm list-[circle] text-left">
                <li>All services in the Clean Plan</li>
                <li>Deep cleaning of kitchen appt</li>
                <li>baseboards, door frames, & vents</li>
                <li>Organization of closets pantries</li>
                <li>Carpet, upholstery spot cleaning</li>
                <li>Detailed bathroom cleaning</li>
              </ul>
              <button className="mt-6 border px-6 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
  )
}

export default PricingPlans