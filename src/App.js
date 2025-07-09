import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import GetQuote from "./components/GetQuote";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";
import KnowMore from "./components/KnowMore";


const HeroSection = () => {
  return (
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
  );
};

const ServicesSection = () => {
  return (
    <section className="md:p-10 xl:p-35 lg:p-20 p-5 bg-white">
      <div className="flex md:flex-row flex-col justify-between items-start mb-10">
        <div>
          <h2 className="text-left text-3xl font-bold text-black mb-2">
            We Always Provide The <br />
            Best Service
          </h2>
        </div>
        <p className="text-left max-w-md text-gray-600 text-sm">
          <strong className="font-semibold text-md text-black">Services</strong><br/>
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
  );
};

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

const CleaningTeam = () => {
  return (
    <section className="md:p-10 xl:p-30 lg:p-20 p-5max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start text-center mb-10 pb-5 border-b border-[#44acfc]">
        <h2 className="text-3xl text-left font-bold text-gray-900">
          Effective Cleaning Requires <br /> an Expert Cleaning Team
        </h2>
        <p className="text-left pl-6 text-sm text-gray-600 max-w-md ">
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
    </section>
  );
};

const TestimonialSection = () => {
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
          <button className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition">
            <FaChevronLeft />
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Right Side: Testimonial Card */}
      <div className="border border-blue-400 rounded-2xl p-6 flex items-start shadow-md w-full max-w-xl mx-auto">
        {/* Image */}
        <img
          src="/cleanerImg2.png" // Replace with your image path in public folder
          alt="Robert Fox"
          className="w-20 h-20 rounded-lg object-cover mr-5"
        />

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-md font-semibold text-gray-900">Robert Fox</h3>
              <p className="text-sm text-gray-500">Business Man</p>
            </div>
            <FaQuoteRight className="text-blue-400 text-2xl" />
          </div>

          {/* Stars */}
          <div className="flex text-yellow-400 mt-2">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Testimonial */}
          <p className="text-sm text-gray-700 mt-3">
            Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.
          </p>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <main className="font-sans">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <GetQuote />
        <CleaningTeam />
        <KnowMore />
        <TestimonialSection />
      </main>
    </div>
  );
}

export default App;
