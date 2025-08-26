"use client";

import { useRef, useEffect, useState } from 'react';

const sections = ['about', 'work', 'contact'] as const;
type SectionId = typeof sections[number] | null;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeSectionId: SectionId = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeSectionId = entry.target.id as SectionId;
          }
        });

        // Only update if we found a new active section
        if (activeSectionId) {
          setActiveSection(activeSectionId);
        }
        // Otherwise, keep the previous active section
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1.0],
        rootMargin: '-80px 0px -50% 0px', // Account for header height and focus on center of viewport
      }
    );

    // Separate scroll handler for hero section detection
    const handleScroll = () => {
      if (window.scrollY < 300) {
        // Reset to null when at the very top (hero section)
        setActiveSection(null);
      }
    };

    observerRef.current = observer;

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener for hero section detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}