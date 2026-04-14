import { Navbar, Footer } from "@/components/layout";
import { ProjectsIntroSection } from "@/features/projects-intro";
import { ProjectsCuratorshipSection } from "@/features/projects-curatorship";
import { ProjectsCardsSection } from "@/features/projects-cards";
import { ProjectsWhatWeShowSection } from "@/features/projects-what-we-show";
import { ProjectsNotVitrinaSection } from "@/features/projects-not-vitrina";
import { ProjectsEachWaySection } from "@/features/projects-each-way";
import { ProjectsCtaSection } from "@/features/projects-cta";

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <ProjectsIntroSection />
      <ProjectsCuratorshipSection />
      <ProjectsCardsSection />
      <ProjectsWhatWeShowSection />
      <ProjectsNotVitrinaSection />
      <ProjectsEachWaySection />
      <ProjectsCtaSection />
      <Footer />
    </>
  );
}
