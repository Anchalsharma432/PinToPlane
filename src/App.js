import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
const HeroSection = () => {
  return (
    <section
  className="w-full min-h-screen bg-white flex items-center justify-between px-8 py-20"
  style={{
    backgroundImage: "url('/heroImage.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-xl bg-white bg-opacity-0 p-6 rounded">
    <h2 className="text-3xl font-semibold text-gray-600 mb-4">
      Quality cleaning at a fair price.
    </h2>
    <h1 className="text-5xl font-bold text-black leading-tight mb-6">
      Specialized, efficient,<br /> and thorough cleaning services
    </h1>
    <p className="text-gray-600 mb-8">
      We provide performing cleaning tasks using the least amount of time, energy, and money.
    </p>
    <div className="flex gap-4">
      <button className="bg-[#44acfc] text-white px-6 py-2 rounded shadow hover:bg-blue-500">
        Get Start Now
      </button>
      <button variant="outline" className="border border-[#44acfc] text-[#44acfc] px-6 py-2 rounded hover:bg-[#f0faff]">
        View all Services
      </button>
    </div>
  </div>
</section>

  );
};

const ServicesSection = () => {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">
            We Always Provide The Best Service
          </h2>
        </div>
        <div className="max-w-md text-gray-600">
          <h3 className="font-semibold mb-2 text-lg">Services</h3>
          <p>
            While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Office Cleaning",
            image: "/office-cleaning.png",
          },
          {
            title: "Spring Cleaning",
            image: "/spring-cleaning.png",
          },
          {
            title: "House Cleaning",
            image: "/house-cleaning.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border p-4 text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.
            </p>
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
        <Navbar/>
      <HeroSection />
      <ServicesSection />
    </main>
    </div>
  );
}

export default App;
