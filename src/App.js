import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import GetQuote from "./components/GetQuote";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaStar } from "react-icons/fa6";

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
        <h2 className="text-left text-xl font-bold text-black mb-4">
          Quality cleaning at a fair price.
        </h2>
        <h1 className="text-left text-5xl font-bold text-black leading-tight mb-6">
          Specialized, efficient,
          <br /> and thorough cleaning <br />
          services
        </h1>
        <p className="text-xl text-left text-gray-600 mb-8">
          We provide performing cleaning tasks using the least <br />
          amount of time, energy, and money.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#44acfc] text-white px-6 py-2 rounded shadow hover:bg-blue-500">
            Get Start Now
          </button>
          <button
            variant="outline"
            className="border border-[#44acfc] text-[#44acfc] px-6 py-2 rounded hover:bg-[#f0faff]"
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
      <div className="flex justify-between items-start mb-10">
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
      <div className="flex justify-between items-start text-center mb-10">
        <h2 className="text-3xl text-left font-bold text-gray-900">
          Effective Cleaning Requires <br /> an Expert Cleaning Team
        </h2>
        <p className="text-left pl-6 text-sm text-gray-600 max-w-md ">
          <strong className="text-black text-md">Expert Team</strong> <br />
          We have professional expert cleaning staff ensuring top-notch
          cleanliness and hygiene for your space.
        </p>
        
      </div>
      <hr className="mt-6 border-gray-300 w-24 mx-auto" />

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

function App() {
  return (
    <div className="App">
      <main className="font-sans">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <GetQuote />
        <CleaningTeam />
      </main>
    </div>
  );
}

export default App;
