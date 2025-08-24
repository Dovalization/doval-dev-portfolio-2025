import { Linkedin, Mail, GitHub } from "react-feather";
import Link from "next/link";
export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="font-bold">Let&rsquo;s work together</h2>
        <p className="max-w-prose text-lg leading-relaxed">
          Currently open to full-time product engineering roles where I can
          shape both user experience and technical architecture. Available for
          immediate start.
        </p>

        <div className="flex flex-wrap justify-center gap-4 font-mono font-bold">
          <Link
            href="mailto:doval.guilherme94@gmail.com"
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <Mail
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Email me
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

        <article className="from-dark-secondary to-gray-medium border-gray-medium/20 flex max-w-prose flex-col gap-4 rounded-lg border bg-gradient-to-br p-8 text-left shadow-lg">
          <h3 className="text-light-primary text-center font-bold">
            What I&rsquo;m looking for
          </h3>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Product Engineering roles
              </strong>
              where I can shape both UX and technical architecture
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Teams that value systems thinking
              </strong>
              and user-centered design principles
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Complex technical challenges
              </strong>
              that require balancing performance, usability, and scale
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Collaborative environments
              </strong>
              with opportunities to mentor and learn from cross-functional teams
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
