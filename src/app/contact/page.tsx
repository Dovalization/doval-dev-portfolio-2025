import MetaSection from "@/components/meta-section";

// Content data (to be replaced by CMS)
const contactData = {
  meta: {
    title: "Let's Work Together",
    subtitle:
      "I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.",
  },
  contactInfo: [
    {
      type: "Email",
      href: "mailto:hello@guilherme.dev",
      label: "hello@guilherme.dev",
      icon: "mail",
    },
    {
      type: "LinkedIn",
      href: "https://linkedin.com/in/guilherme-dev",
      label: "linkedin.com/in/guilherme-dev",
      icon: "check",
    },
    {
      type: "GitHub",
      href: "https://github.com/guilherme-dev",
      label: "github.com/guilherme-dev",
      icon: "github",
    },
  ],
  lookingFor: [
    {
      title: "Product Engineering Roles",
      text: "Full-stack positions where I can shape both user experience and technical architecture.",
    },
    {
      title: "Consulting Projects",
      text: "Design system development, technical architecture, and user experience optimization.",
    },
    {
      title: "Collaborative Opportunities",
      text: "Open source projects, speaking engagements, and knowledge sharing initiatives.",
    },
  ],
  responseTime:
    "I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out directly via email.",
} as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title={contactData.meta.title}
          subtitle={contactData.meta.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-light-primary">
                Get In Touch
              </h2>
              <div className="space-y-6">
                {contactData.contactInfo.map((item) => (
                  <div key={item.type} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {/* Simple inline icons, could be replaced by lucide-react */}
                      {item.icon === "mail" && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      )}
                      {item.icon === "check" && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {item.icon === "github" && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-light-primary">
                        {item.type}
                      </h3>
                      <a
                        href={item.href}
                        className="text-gray-light hover:text-orange-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-light-primary">{`What I'm Looking For`}</h2>
              <div className="space-y-4">
                {contactData.lookingFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-orange-primary pl-6 bg-dark-secondary p-4 rounded-r-lg"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-light-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent text-light-primary placeholder-gray-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent text-light-primary placeholder-gray-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-light-primary mb-2"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent text-light-primary placeholder-gray-light"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-light-primary mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent text-light-primary"
                >
                  <option value="">Select project type</option>
                  <option value="full-time">Full-time Role</option>
                  <option value="consulting">Consulting Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent resize-none text-light-primary placeholder-gray-light"
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-primary text-white font-medium rounded-lg hover:bg-orange-secondary transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-dark-secondary border border-gray-medium/30 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-light-primary">
                Response Time
              </h3>
              <p className="text-gray-light text-sm">
                {contactData.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
