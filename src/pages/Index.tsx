import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameModeSection from "@/components/GameModeSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import Phrase from "@/components/Phrase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameModeSection />
      <Phrase />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
