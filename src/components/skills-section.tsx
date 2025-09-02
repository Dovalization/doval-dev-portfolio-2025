import {
  Code,
  Monitor,
  Server,
  Settings,
  Layers,
  Feather,
  Activity,
} from "react-feather";
import { SkillsData } from "@/data/schemas";

const iconMap = {
  Code,
  Monitor,
  Server,
  Settings,
  Layers,
  Feather,
  Activity,
};

interface SkillsSectionProps {
  data: SkillsData;
}

export default function SkillsSection({ data: skillsData }: SkillsSectionProps) {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 sm:px-6">
      <h2 className="text-center font-bold">{skillsData.title}</h2>
      <p className="mx-auto max-w-prose text-lg leading-relaxed sm:text-xl">
        {skillsData.description}
      </p>
      <div className="columns-1 gap-6 space-y-8 md:columns-2 lg:columns-3">
        {skillsData.sections.map(({ key, title, icon, items }) => {
          const Icon = iconMap[icon as keyof typeof iconMap];
          return (
            <div
              key={key}
              className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-4 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-orange-secondary flex h-8 w-8 items-center justify-center rounded-full">
                  <Icon
                    className="text-dark-primary h-4 w-4"
                    strokeWidth={2.5}
                  />
                </div>
                <strong className="text-lg font-bold">{title}</strong>
              </div>
              <div className="grid gap-2 font-mono">
                {items.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border px-3 py-2"
                  >
                    <div className="text-light-primary text-sm leading-tight font-medium">
                      {tech.name}
                    </div>
                    <p className="text-gray-light mt-0.5 text-xs leading-snug">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
