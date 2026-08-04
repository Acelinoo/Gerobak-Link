import CinematicHero from "../components/CinematicHero";
import BentoFeatures from "../components/BentoFeatures";
import ProjectShowcase from "../components/ProjectShowcase";
import CtaBlock from "../components/CtaBlock";

import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <CinematicHero />
        <BentoFeatures />
        <ProjectShowcase />
        <CtaBlock />
      </main>
    </PageTransition>
  );
}
