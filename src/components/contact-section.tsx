import { Linkedin, Mail, GitHub } from "react-feather";
import Link from "next/link";
export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="font-bold">Let&rsquo;s work together</h2>
        <p className="max-w-prose text-left text-xl leading-relaxed">
          {
            "I help teams build technology that people rely on by understanding how users actually think and work. If you're tackling complex interface challenges or want to improve how stakeholders and developers collaborate, let's talk."
          }
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
                Organizations building complex interfaces
              </strong>
              that need both technical performance and intuitive user experience
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Companies tackling ambitious product visions
              </strong>
              that require balancing user psychology with technical constraints
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Growing companies
              </strong>
              where technical decisions need to serve both business goals and
              user needs
            </li>
            <li>
              <strong className="text-light-primary mr-1 inline-block">
                Teams building tools
              </strong>
              where user adoption depends on understanding usability best
              practices
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
