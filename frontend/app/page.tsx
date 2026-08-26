import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import RegistrationRoadmap from "@/components/RegistrationRoadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <RegistrationRoadmap />
      <Footer />
    </main>
  );
}

