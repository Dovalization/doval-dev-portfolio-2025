import { Linkedin, Mail, GitHub } from "react-feather";
import Link from "next/link";
export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-light max-w-prose text-lg leading-relaxed">
          I’m interested in product engineering roles where I can shape both
          user experience and technical architecture. Always open to discussing
          new projects and opportunities.
        </p>

        <div className="flex justify-center gap-4 font-mono">
          <Link
            href="mailto:doval.guilherme94@gmail.com"
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <Mail
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            doval.guilherme94@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/dovalization"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <Linkedin
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/dovalization"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <GitHub
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            GitHub
          </Link>
        </div>

        <article className="from-dark-secondary to-gray-medium border-gray-medium/20 max-w-prose rounded-lg border bg-gradient-to-br p-8 text-left shadow-lg">
          <h3 className="mb-4 text-lg font-semibold">What I’m Looking For</h3>
          <ul className="space-y-4 text-slate-400">
            <li>
              • Product Engineering roles where I can shape UX and technical
              architecture
            </li>
            <li>
              • Teams that value systems thinking and user-centered design
            </li>
            <li>
              • Projects focused on reducing cognitive friction and improving
              workflows
            </li>
            <li>
              • Opportunities to mentor and collaborate with cross-functional
              teams
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
