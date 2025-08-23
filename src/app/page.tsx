import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoreValuesSection from "@/components/core-values-section";
import WorkSection from "@/components/work-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <section className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-6">
        <CoreValuesSection />
      </section>
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
