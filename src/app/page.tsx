import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoreValuesSection from "@/components/core-values-section";
import WorkSection from "@/components/work-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
