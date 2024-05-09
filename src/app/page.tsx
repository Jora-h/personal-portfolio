import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { LatestCodeSection } from "./components/LatestCodeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ReachOutSection } from "./components/ReachOutSection";
import { WhoAmISection } from "./components/WhoAmISection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-32">
      <HeroSection />
      <WhoAmISection />
      <ExperienceSection />
      <ProjectsSection />
      <LatestCodeSection />
      <ReachOutSection />
    </main>
  );
}
