import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import GetQuote from "./components/GetQuote";
import KnowMore from "./components/KnowMore";
import Contact from "./components/Contact";
import HersoSection from "./components/HersoSection";
import ServiceSection from "./components/ServiceSection";
import CleaningTeam from "./components/CleaningTeam";
import PricingPlans from "./components/PricingPlans";
import TestinomialSection from "./components/TestinomialSection";


function App() {
  return (
    <div className="App">
      <main className="font-sans">
        <Navbar />
        <HersoSection />
        <ServiceSection />
        <GetQuote />
        <CleaningTeam />
        <KnowMore />
        <PricingPlans />
        <TestinomialSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;
