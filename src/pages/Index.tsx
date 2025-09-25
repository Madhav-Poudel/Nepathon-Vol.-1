import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import PrizeSection from "@/components/sections/PrizeSection";
import TimelineSection from "@/components/sections/TimelineSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import BackToTop from "@/components/ui/BackToTop";

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
    <FAQSection />
  <ContactSection />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
