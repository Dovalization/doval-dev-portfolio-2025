"use client";

import React from "react";
import { User, Minimize2, Unlock, Layout, Target } from "react-feather";
import { useInViewAnimation } from "@/lib/useInViewAnimation";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "Solve real problems",
    text: "Ground decisions in observed user needs. Reduce complexity so people focus on what matters.",
    icon: Target,
  },
  {
    title: "Champion the user",
    text: "Every choice serves the person using the product, not the system. Empathy guides the work.",
    icon: User,
  },
  {
    title: "Build for experience",
    text: "How it feels matters as much as what it does. Experience drives trust and adoption.",
    icon: Layout,
  },
  {
    title: "Lower cognitive load",
    text: "Predictable flows support momentum. Remove distractions and decision fatigue.",
    icon: Minimize2,
  },
  {
    title: "Enable autonomy",
    text: "Technology should empower, not control. Give people freedom to act independently.",
    icon: Unlock,
  },
];

export default function CoreValuesSection() {
  const { ref, isInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 sm:px-6">
      <div
        ref={ref}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {coreValues.map((valueEntry, index) => {
          const Icon = valueEntry.icon;
          return (
            <div
              key={index}
              className={cn(
                "from-dark-secondary to-gray-medium border-gray-medium/20 group relative flex flex-col items-center gap-2 rounded-lg border bg-gradient-to-br px-4 py-6 pt-14 text-center shadow-2xl transition-all duration-250 ease-in-out text-shadow-sm hover:scale-105 hover:shadow-2xl",
                {
                  "animate-in fade-in-0 slide-in-from-bottom-4": isInView,
                  "translate-y-4 opacity-0": !isInView,
                },
              )}
              style={{
                animationDelay: isInView ? `${index * 150}ms` : undefined,
                animationFillMode: "both",
              }}
            >
              <div className="bg-orange-secondary group-hover:bg-orange-primary absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-250 ease-in-out group-hover:scale-110">
                <Icon
                  className="text-dark-primary h-8 w-8 transition-transform duration-250 ease-in-out group-hover:scale-110"
                  strokeWidth={2.5}
                />
              </div>
              <strong className="text-light-primary text-lg font-bold">
                {valueEntry.title}
              </strong>
              <p className="text-light-primary text-sm">{valueEntry.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
