import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { WhoAmISection } from "./components/WhoAmISection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-32">
      <HeroSection />
      <WhoAmISection />
      <ExperienceSection />
      {/* Projects */}
      {/* Latest Code */}
      {/* Reach Out */}
    </main>
  );
}
