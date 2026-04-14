import { Navbar, Footer } from "@/components/layout";
import { FocusIntroSection } from "@/features/focus-intro";
import { FocusHeroSection } from "@/features/focus-hero";
import { FocusIndustrySection } from "@/features/focus-industry";
import { FocusPillarsSection } from "@/features/focus-pillars";
import { FocusMethodologySection } from "@/features/focus-methodology";
import { FocusFormulasSection } from "@/features/focus-formulas";
import { FocusWhatWeSeekSection } from "@/features/focus-what-we-seek";
import { FocusCtaSection } from "@/features/focus-cta";

export default function EnfoquePage() {
  return (
    <>
      <Navbar />
      <FocusIntroSection />
      <FocusHeroSection />
      <FocusIndustrySection />
      <FocusPillarsSection />
      <FocusMethodologySection />
      <FocusFormulasSection />
      <FocusWhatWeSeekSection />
      <FocusCtaSection />
      <Footer />
    </>
  );
}
