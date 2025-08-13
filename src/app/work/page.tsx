import MetaSection from "@/components/meta-section";

/* eslint-disable react/no-unescaped-entities */
export default function WorkPage() {
  return (
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title="Work"
          subtitle="Here are some projects that showcase my approach to building fast, human-centered systems. Each one taught me something new about balancing user needs with technical constraints."
        />

        {/* Case Study 1 */}
        <section className="mb-20">
          <div className="bg-dark-secondary border border-gray-medium/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-primary/10 transition-all duration-300">
            <div className="px-8 py-12 border-b border-gray-medium/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-16 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-light-primary">
                    Horizon Chase 2 Marketing Site & CMS
                  </h2>
                  <p className="text-lg text-gray-light max-w-3xl">
                    High-performance, multilingual marketing site with fast
                    iteration capabilities for non-developer content editors.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Problem
                  </h3>
                  <p className="text-gray-light">
                    Needed a high-performance, multilingual marketing site with
                    fast iteration for non-dev content editors. The previous
                    site was slow to load and difficult for the marketing team
                    to update without developer intervention.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Approach
                  </h3>
                  <p className="text-gray-light">
                    Built with Next.js + Prismic headless CMS, created a custom
                    component library for consistent branding, implemented
                    comprehensive image optimization pipeline, and set up
                    preview builds for content validation.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Result
                  </h3>
                  <p className="text-gray-light">
                    Achieved LCP &lt; 2.0s across all pages, saw +38% organic
                    traffic growth in 90 days, and enabled the marketing team to
                    update content independently without developer help.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-medium/30 pt-6">
                <h4 className="font-medium mb-3 text-orange-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Prismic CMS
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Image Optimization
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    i18n
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2 */}
        <section className="mb-20">
          <div className="bg-dark-secondary border border-gray-medium/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-primary/10 transition-all duration-300">
            <div className="px-8 py-12 border-b border-gray-medium/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-16 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-light-primary">
                    Aquiris Web Platform Revamp
                  </h2>
                  <p className="text-lg text-gray-light max-w-3xl">
                    Unified architecture for multiple game marketing pages with
                    scalable component library and automated deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Problem
                  </h3>
                  <p className="text-gray-light">
                    Fragmented, slow-to-update marketing pages for multiple
                    games. Each game had its own site with inconsistent
                    branding, poor performance, and manual deployment processes
                    that caused delays.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Approach
                  </h3>
                  <p className="text-gray-light">
                    Created a unified Next.js architecture with a scalable
                    component library, implemented consistent design system
                    across all game sites, and set up automated deployments with
                    preview environments.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Result
                  </h3>
                  <p className="text-gray-light">
                    Enabled faster content updates, significantly improved Core
                    Web Vitals scores (CLS and LCP), and established consistent
                    branding across all game properties.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-medium/30 pt-6">
                <h4 className="font-medium mb-3 text-orange-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Component Library
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    CI/CD
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Performance Optimization
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Design System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 3 */}
        <section className="mb-20">
          <div className="bg-dark-secondary border border-gray-medium/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-primary/10 transition-all duration-300">
            <div className="px-8 py-12 border-b border-gray-medium/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-16 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-light-primary">
                    Internal Tools Workflow Automation
                  </h2>
                  <p className="text-lg text-gray-light max-w-3xl">
                    Custom queue management, RBAC, and audit tooling to
                    eliminate manual workflow bottlenecks and improve team
                    autonomy.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Problem
                  </h3>
                  <p className="text-gray-light">
                    Manual workflows caused significant delays and errors in
                    project handoffs. Teams were blocked waiting for approvals,
                    and there was no clear visibility into process status or
                    bottlenecks.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Approach
                  </h3>
                  <p className="text-gray-light">
                    Built custom queue management system with role-based access
                    control (RBAC), implemented comprehensive audit tooling for
                    transparency, and created automated notification systems for
                    status updates.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/30">
                  <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    Result
                  </h3>
                  <p className="text-gray-light">
                    Achieved 60% faster project handoffs, dramatically improved
                    accuracy by eliminating manual errors, and gave teams more
                    autonomy with clear visibility into process status.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-medium/30 pt-6">
                <h4 className="font-medium mb-3 text-orange-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    PostgreSQL
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    RBAC
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Queue Management
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Audit Logging
                  </span>
                  <span className="bg-orange-primary/20 text-orange-primary border border-orange-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                    Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smaller Projects Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-light-primary">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  E-commerce Performance Audit
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                Comprehensive performance analysis and optimization
                recommendations for a high-traffic e-commerce site.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Performance
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Web Vitals
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Optimization
                </span>
              </div>
            </div>

            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  Component Library Design System
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                Scalable design system with React components, documentation, and
                automated testing for consistency.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  React
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Storybook
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Design System
                </span>
              </div>
            </div>

            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  API Gateway & Microservices
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                Scalable API architecture with authentication, rate limiting,
                and comprehensive monitoring.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Node.js
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Docker
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Microservices
                </span>
              </div>
            </div>

            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  Real-time Dashboard
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                Live analytics dashboard with WebSocket connections and
                interactive data visualizations.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  WebSockets
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  D3.js
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Real-time
                </span>
              </div>
            </div>

            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  Mobile-First PWA
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                Progressive web app with offline capabilities, push
                notifications, and native-like performance.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  PWA
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Service Workers
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Mobile
                </span>
              </div>
            </div>

            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-primary rounded-full flex-shrink-0 group-hover:bg-orange-secondary transition-colors"></div>
                <h3 className="text-lg font-semibold text-light-primary">
                  Accessibility Audit & Remediation
                </h3>
              </div>
              <p className="text-gray-light text-sm mb-4 leading-relaxed">
                WCAG 2.1 AA compliance audit and implementation of accessibility
                improvements across web platform.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  WCAG
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  A11y
                </span>
                <span className="bg-gray-medium/30 text-gray-light px-2 py-1 rounded text-xs">
                  Compliance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-orange-primary/10 via-orange-secondary/5 to-cream/5 border border-orange-primary/20 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4 text-light-primary">
            Interested in Working Together?
          </h2>
          <p className="text-gray-light mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and help teams build
            better, faster, more human-centered systems.
          </p>
          <a
            href="/contact"
            className="bg-orange-primary text-dark-primary px-8 py-3 rounded-lg font-medium hover:bg-orange-secondary transition-colors inline-block shadow-lg hover:shadow-orange-primary/30"
          >
            Let's Talk About Your Project
          </a>
        </section>
      </div>
    </div>
  );
}
