import { Linkedin, Mail, GitHub, Download } from "react-feather";
import Link from "next/link";
import { ContactData } from "@/app/types";

export default function ContactSection({
  data: contactData,
}: {
  data: ContactData;
}) {
  return (
    <section id="contact" className="scroll-mt-12 pb-16 sm:px-6">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 text-center sm:px-6">
        <h2 className="font-bold">{contactData.title}</h2>
        <p className="max-w-prose text-center text-lg leading-relaxed sm:text-left sm:text-xl">
          {contactData.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 font-mono font-bold">
          <Link
            href={`mailto:${contactData.email}`}
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <Mail
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Email me
          </Link>
          <Link
            href="/guilherme-doval-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-orange-secondary hover:text-orange-primary group flex items-center gap-2 underline transition-colors duration-200"
          >
            <Download
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Download CV
          </Link>
          <Link
            href={contactData.social.linkedin}
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
            href={contactData.social.github}
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
            {contactData.lookingFor.title}
          </h3>
          <ul className="list-disc space-y-3 pl-5">
            {contactData.lookingFor.items.map((item, index) => (
              <li key={index}>
                <strong className="text-light-primary mr-1 inline-block">
                  {item.title}
                </strong>
                {item.description}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
