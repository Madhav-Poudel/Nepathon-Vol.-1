import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import PrizeSection from "@/components/sections/PrizeSection";
import TimelineSection from "@/components/sections/TimelineSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <AmenitiesSection />
      <PrizeSection />
      <TimelineSection />
      <RegistrationSection />
      <SponsorsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
