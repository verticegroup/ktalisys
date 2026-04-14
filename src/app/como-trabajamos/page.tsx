import { Navbar, Footer } from "@/components/layout";
import { WorkIntroSection } from "@/features/work-intro";
import { WorkBeforeSection } from "@/features/work-before";
import { WorkPrinciplesSection } from "@/features/work-principles";
import { WorkStepsSection } from "@/features/work-steps";
import { WorkConfusionSection } from "@/features/work-confusion";
import { WorkDoDontSection } from "@/features/work-do-dont";
import { WorkRelationsSection } from "@/features/work-relations";
import { WorkCtaSection } from "@/features/work-cta";

export default function ComoTrabajamosPage() {
  return (
    <>
      <Navbar />
      <WorkIntroSection />
      <WorkBeforeSection />
      <WorkPrinciplesSection />
      <WorkStepsSection />
      <WorkConfusionSection />
      <WorkDoDontSection />
      <WorkRelationsSection />
      <WorkCtaSection />
      <Footer />
    </>
  );
}
