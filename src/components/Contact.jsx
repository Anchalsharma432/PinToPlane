import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (<section className="bg-white w-full flex items-center justify-center md:p-10 xl:p-30 lg:p-20 p-5">
      <div className=" bg-white p-10 flex flex-col md:flex-row gap-10 items-stretch">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-end space-y-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-left">Find us</h2>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
        <div className="text-white text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#44acfc]">
            <FaPhone />
          </div>
          <div className='text-left'>
            <h4 className="font-bold text-lg">Call Us</h4>
            <p className="text-gray-700  md:text-md text-sm">+(08) 255 201 888</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
        <div className="text-white text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#44acfc]">
            <FaEnvelope />
          </div>
          <div className='text-left'>
            <h4 className="font-bold text-lg">Email Now</h4>
            <p className="text-gray-700  md:text-md text-sm">Hello@procleaning.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
        <div className="text-white text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#44acfc]">
            <FaLocationDot />
          </div>
          <div className='text-left'>
            <h4 className="font-bold text-lg">Address</h4>
            <p className="text-gray-700  md:text-md text-sm">7510, Brand Tower, New York, USA</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-between space-y-2 text-left">
      <p className="text-gray-600  md:text-md text-sm">
          Contact Info</p>
        <h2 className="text-3xl font-semibold text-gray-900 mt-0">Keep In Touch</h2>
        <p className="text-gray-600 md:text-md text-sm">
          We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-md md:text-md text-sm mt-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg  shadow-md md:text-md text-sm"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-lg  shadow-md md:text-md text-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-[#44acfc] md:text-md text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>)
}

export default Contact