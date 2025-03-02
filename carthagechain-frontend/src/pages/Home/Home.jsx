import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection"
import NewParadigmSection from "../../components/NewParadigmSection/NewParadigmSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import CoreComponents from "../../components/CoreComponents/CoreComponents";
import './Home.css';

const HomePage = () => {

  return (
    <div className="home-page">
      
      <main className="home-content">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <NewParadigmSection />
        <CoreComponents />       
        <TestimonialsSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default HomePage;