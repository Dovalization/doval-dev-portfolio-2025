import { Linkedin, Mail, GitHub } from "react-feather";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto flex max-w-prose flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-bold">Let's Work Together</h2>
        <p className="text-gray-light text-lg leading-relaxed">
          I'm interested in product engineering roles where I can shape both
          user experience and technical architecture. Always open to
          discussing new projects and opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:doval.guilherme94@gmail.com"
            className="from-dark-secondary to-gray-medium border-gray-medium/20 hover:border-orange-secondary/50 hover:from-orange-secondary/10 hover:to-orange-secondary/5 group flex items-center gap-3 rounded-lg border bg-gradient-to-br px-4 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Mail
              size={20}
              className="text-orange-secondary transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-light-primary text-sm font-medium">
              doval.guilherme94@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/dovalization"
            target="_blank"
            rel="noopener noreferrer"
            className="from-dark-secondary to-gray-medium border-gray-medium/20 hover:border-orange-secondary/50 hover:from-orange-secondary/10 hover:to-orange-secondary/5 group flex items-center gap-3 rounded-lg border bg-gradient-to-br px-4 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Linkedin
              size={20}
              className="text-orange-secondary transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-light-primary text-sm font-medium">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/dovalization"
            target="_blank"
            rel="noopener noreferrer"
            className="from-dark-secondary to-gray-medium border-gray-medium/20 hover:border-orange-secondary/50 hover:from-orange-secondary/10 hover:to-orange-secondary/5 group flex items-center gap-3 rounded-lg border bg-gradient-to-br px-4 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <GitHub
              size={20}
              className="text-orange-secondary transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-light-primary text-sm font-medium">
              GitHub
            </span>
          </a>
        </div>

        <article className="from-dark-secondary to-gray-medium border-gray-medium/20 max-w-2xl rounded-lg border bg-gradient-to-br p-8 text-left shadow-lg">
          <h3 className="mb-4 text-lg font-semibold">What I'm Looking For</h3>
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