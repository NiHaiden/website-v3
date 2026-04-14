import {
  MailIcon,
  GithubIcon,
  DownloadIcon,
  ArrowUpRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";
import SkillsGrid from "@/components/SkillsGrid";

const experience = [
  {
    period: "2024 – present",
    role: "Software Engineer",
    org: "Austrian Patent Office",
    orgLink: "https://patentamt.at",
    description:
      "Development and deployment of internal tools and building a successor to the See-IP system for viewing trademarks and patents.",
  },
  {
    period: "2022 – 2023",
    role: "Emergency Medical Technician",
    org: "Samariterbund",
    description:
      "Nine-month mandatory service — patient transport, assisting paramedics in emergency medical services, and organisational duties.",
  },
  {
    period: "2017 – 2022",
    role: "Student",
    org: "HTBLUVA St. Pölten",
    description:
      "Vocational school focused on software engineering. Started with C, moved to Java, and explored Linux, web development, and project management.",
  },
];

const projects = [
  {
    name: "Aurora",
    description:
      "A beautiful KDE desktop experience powered by Universal-Blue — the ultimate workstation for everyone.",
    link: "https://getaurora.dev",
  },
  {
    name: "Raven",
    description:
      "A personal PaaS platform to deploy dockerised apps easily via a web interface or API.",
  },
  {
    name: "Shelly Plug Exporter",
    description:
      "A small web app to export Shelly Plugs to Prometheus with a nice GUI.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Navbar ──────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-30">
        <div className="mx-auto max-w-5xl px-6 pt-4">
          <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
            <a href="#" className="hover:scale-105 transition-transform">
              <Image src="/logo.svg" width={36} height={36} alt="Logo" />
            </a>
            <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/80">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a
                href="#experience"
                className="hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
            </div>
            <a
              href="https://niklas.tech/NiklasHaiden_Resume.pdf"
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <DownloadIcon size={15} /> CV
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-3">
              Niklas Haiden
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-medium mb-8">
              Software Engineer · Vienna, Austria
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Building things for the web and the JVM, living near the Austrian
              alps, and occasionally breaking Linux installs since childhood.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:me@nhaiden.io"
                className="glass rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <MailIcon size={16} /> me@nhaiden.io
              </a>
              <a
                href="https://github.com/NiHaiden"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="https://niklas.tech/NiklasHaiden_Resume.pdf"
                target="_blank"
                className="glass rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <DownloadIcon size={16} /> Resume
              </a>
            </div>
          </div>
        </section>

        {/* ── Content panel ─────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6 pb-24 space-y-0">
          <div className="glass-heavy rounded-3xl overflow-hidden">
            {/* About */}
            <div id="about" className="px-8 sm:px-12 pt-10 pb-10 scroll-mt-24">
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-4">
                About
              </h2>
              <div className="text-white/80 leading-relaxed space-y-4 text-[15px]">
                <p>
                  I&apos;ve been obsessed with computers since my early age —
                  what started out sending an e-mail or destroying the installed
                  OS turned into a passion for life.
                </p>
                <p>
                  During my teenage years I went to vocational school to deepen
                  my knowledge of programming and writing good, efficient code.
                  Over the years I&apos;ve learned to create my own programs —
                  and this very website you&apos;re viewing now.
                </p>
                <p>
                  When I&apos;m not in front of the computer, I like to go out
                  into nature, take pictures with my camera, or enjoy time with
                  friends and family.
                </p>
              </div>
            </div>

            <div className="divider" />

            {/* Experience */}
            <div
              id="experience"
              className="px-8 sm:px-12 pt-10 pb-10 scroll-mt-24"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-6">
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6">
                    <div className="w-28 sm:w-32 shrink-0 text-xs font-mono text-white/40 pt-0.5">
                      {item.period}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[15px] leading-snug">
                        {item.role}{" "}
                        <span className="text-white/50 font-normal">@ </span>
                        {item.orgLink ? (
                          <a
                            href={item.orgLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50"
                          >
                            {item.org}
                          </a>
                        ) : (
                          <span className="text-white/70">{item.org}</span>
                        )}
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" />

            {/* Projects */}
            <div
              id="projects"
              className="px-8 sm:px-12 pt-10 pb-10 scroll-mt-24"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-6">
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="glass-subtle rounded-xl p-5 hover:bg-white/[0.06] transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-[15px] mb-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-white/55 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 mt-0.5 text-white/30 hover:text-sky-300 transition-colors"
                        >
                          <ArrowUpRightIcon size={18} />
                        </a>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-sky-300 transition-colors mt-3 font-mono"
                      >
                        <ExternalLinkIcon size={12} /> {project.link.replace("https://", "")}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" />

            {/* Skills */}
            <div
              id="skills"
              className="px-8 sm:px-12 pt-10 pb-10 scroll-mt-24"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-6">
                Skills
              </h2>
              <SkillsGrid />
            </div>

            <div className="divider" />

            {/* Contact */}
            <div className="px-8 sm:px-12 pt-10 pb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-4">
                Get in touch
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                Interested in working together or just want to say hello? Drop
                me a line or find me on GitHub.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:me@nhaiden.io"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] transition-all"
                >
                  <MailIcon size={16} /> Send an email
                </a>
                <a
                  href="https://github.com/NiHaiden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-subtle rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.08] transition-colors"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-white/25 pt-8 pb-4">
            © {new Date().getFullYear()} Niklas Haiden
          </div>
        </div>
      </main>
    </>
  );
}
