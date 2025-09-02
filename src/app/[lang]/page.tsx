import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoreValuesSection from "@/components/core-values-section";
import WorkSection from "@/components/work-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import { getDictionary } from './dictionaries'
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Check if the language is supported
  if (!['en', 'pt'].includes(lang)) {
    notFound();
  }
  
  const dict = await getDictionary(lang as 'en' | 'pt');

  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection data={dict.hero} />
      <AboutSection data={dict.about} />
      <CoreValuesSection data={dict.coreValues} />
      <WorkSection data={dict.work} />
      <SkillsSection data={dict.skills} />
      <ContactSection data={dict.contact} />
    </div>
  );
}
