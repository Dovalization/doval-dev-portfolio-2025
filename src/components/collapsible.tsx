"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface ProjectSection {
  title: string;
  body: string;
}

interface CollapsibleProps {
  project: {
    title: string;
    description: string;
    sections: ProjectSection[];
    banner: { url: string; alt: string };
    logo: { url: string; alt: string; size?: "small" | "medium" | "large" };
    stack: string[];
    liveUrl?: string;
  };
}

export default function Collapsible({ project }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      className={cn(
        "bg-dark-secondary overflow-hidden rounded-lg outline-4 outline-transparent transition-all duration-300",
        {
          "shadow-xl outline-transparent": isOpen,
          "hover:outline-orange-secondary shadow-md": !isOpen,
        },
      )}
    >
      {/* Banner Section */}
      <figure
        className={cn(
          "group relative min-h-96 cursor-pointer after:absolute after:inset-0 after:bg-transparent after:transition-colors after:duration-300 hover:after:bg-black/50",
          {
            "after:bg-black/50": isOpen,
          },
        )}
        onClick={toggleCollapsible}
      >
        <Image
          src={project.banner.url}
          alt={project.banner.alt}
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          className={cn(
            "absolute inset-0 z-10 flex translate-y-20 items-center justify-center transition-all duration-150 ease-in-out group-hover:translate-y-0 group-hover:scale-125 group-hover:opacity-100",
            {
              "translate-y-0 scale-125 opacity-100": isOpen,
              "opacity-0": !isOpen,
            },
          )}
        >
          <Image
            src={project.logo.url}
            alt={project.logo.alt}
            width={project.logo.size === "small" ? 150 : 250}
            height={project.logo.size === "small" ? 150 : 250}
          />
        </div>
      </figure>

      {/* Content Section */}
      <div
        className={cn(
          "to-gray-medium from-dark-secondary flex flex-col gap-8 bg-gradient-to-br shadow-2xl transition-normal duration-200 ease-in-out",
          {
            "max-h-screen p-8": isOpen,
            "max-h-0 p-0 px-8": !isOpen,
          },
        )}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-light-primary text-3xl font-bold">
            {project.title}
          </h3>
          {/* First paragraph from first section as intro */}
          <hr className="border-orange-secondary max-w-8 border-2" />
          <p className="text-light-primary text-md max-w-3xl font-semibold">
            {project.description}
          </p>
        </div>
        <div
          className={cn("grid gap-8", {
            "md:grid-cols-2": project.sections.length === 2,
            "md:grid-cols-3": project.sections.length === 3,
            "md:grid-cols-2 lg:grid-cols-4": project.sections.length === 4,
            "md:grid-cols-2 lg:grid-cols-3": project.sections.length > 4,
          })}
        >
          {project.sections.map((section, index) => (
            <div key={index}>
              <strong className="text-light-primary flex items-center gap-2 text-lg font-bold">
                {section.title}
              </strong>
              <p className="text-light-primary">{section.body}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-orange-secondary border-orange-secondary/30 rounded-full border-2 px-3 py-1 font-mono text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
