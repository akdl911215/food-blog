// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProceduresSection from "@/components/sections/ProceduresSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ReviewsSection from "@/components/sections/ReviewsSections";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProceduresSection />
      <DoctorsSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
