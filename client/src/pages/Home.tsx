import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { RegistroBrInfo } from "@/components/RegistroBrInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProjectShowcase />
        <RegistroBrInfo />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
