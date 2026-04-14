import { Navbar, Footer } from "@/components/layout";
import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ServicesSection } from "@/features/services";
import { ProfileSection } from "@/features/profile";
import { ProcessSection } from "@/features/process";
import { VisionSection } from "@/features/vision";
import { ExperienceSection } from "@/features/experience";
import { CtaSection } from "@/features/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProfileSection />
      <ProcessSection />
      <VisionSection />
      <ExperienceSection />
      <CtaSection />
      <Footer />
    </>
  );
}
