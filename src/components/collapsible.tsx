"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface CollapsibleProps {
  project: {
    title: string;
    description: string;
    problem: string;
    approach: string;
    result: string;
    banner: { url: string; alt: string };
    logo: { url: string; alt: string };
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
            width={250}
            height={250}
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
        <div className="flex items-center justify-start gap-4">
          <div
            className={`bg-orange-secondary h-16 w-2 flex-shrink-0 rounded-full`}
          ></div>
          <div>
            <h2 className="text-light-primary mb-2 text-3xl font-bold">
              {project.title}
            </h2>
            {/* First paragraph summarizing problem/intro */}
            <p className="text-md text-light-primary max-w-3xl">
              {project.problem.split(".")[0]}.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
              <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
              Problem
            </h3>
            <p className="text-gray-light">{project.problem}</p>
          </div>
          <div>
            <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
              <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
              Approach
            </h3>
            <p className="text-gray-light">{project.approach}</p>
          </div>
          <div>
            <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
              <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
              Result
            </h3>
            <p className="text-gray-light">{project.result}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-gray-light border-gray-light/30 rounded-full border px-3 py-1 text-sm font-medium"
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
