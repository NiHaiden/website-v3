"use client";

import Image from "next/image";
import {
  MailIcon,
  GithubIcon,
  DownloadIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  ArrowUpRightIcon,
  DatabaseIcon,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import JavaPlain from "devicons-react/lib/icons/JavaPlain";
import {
  DockerPlain,
  Html5Plain,
  KotlinPlain,
  SwiftPlain,
  TypescriptPlain,
} from "devicons-react";
import SpringIcon from "@/components/SpringIcon";
import TailwindIcon from "@/components/TailwindIcon";
import ReactIcon from "@/components/icons/ReactIcon";

/* ─── Data ──────────────────────────────────────────── */

const skills = [
  { name: "Java", icon: <JavaPlain size={22} color="#fff" /> },
  { name: "React", icon: <ReactIcon size={22} color="#fff" /> },
  { name: "TypeScript", icon: <TypescriptPlain size={22} color="#fff" /> },
  { name: "HTML / CSS", icon: <Html5Plain size={22} color="#fff" /> },
  { name: "Kotlin", icon: <KotlinPlain size={22} color="#fff" /> },
  { name: "Spring", icon: <SpringIcon size={22} color="#fff" /> },
  { name: "SQL", icon: <DatabaseIcon size={22} color="#fff" /> },
  { name: "Tailwind", icon: <TailwindIcon size={22} color="#fff" /> },
  { name: "Docker", icon: <DockerPlain size={22} color="#fff" /> },
  { name: "Swift", icon: <SwiftPlain size={22} color="#fff" /> },
];

const experience = [
  {
    period: "2024 – present",
    role: "Software Engineer",
    org: "Austrian Patent Office",
    orgLink: "https://patentamt.at",
    desc: "Development and deployment of internal tools and building a successor to the See-IP system for viewing trademarks and patents.",
  },
  {
    period: "2022 – 2023",
    role: "Emergency Medical Technician",
    org: "Samariterbund",
    desc: "Nine-month mandatory service — patient transport, assisting paramedics in emergency medical services, and organisational duties.",
  },
  {
    period: "2017 – 2022",
    role: "Student",
    org: "HTBLUVA St. Pölten",
    desc: "Vocational school focused on software engineering. Started with C, moved to Java, explored Linux, web development, and project management.",
  },
];

const projects = [
  {
    name: "Aurora",
    desc: "A beautiful KDE desktop experience powered by Universal-Blue — the ultimate workstation for everyone.",
    link: "https://getaurora.dev",
  },
  {
    name: "Raven",
    desc: "A personal PaaS platform to deploy dockerised apps easily via a web interface or API. Work in progress.",
  },
  {
    name: "Shelly Plug Exporter",
    desc: "A small web app to export Shelly Plugs to Prometheus with a nice GUI. Coming soon.",
  },
];

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl glass-heavy rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center gap-8">
        {/* ── Identity ── */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.svg"
            width={56}
            height={56}
            alt="Niklas Haiden"
            className="mb-1"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Niklas Haiden
          </h1>
          <p className="text-base sm:text-lg text-white/50 font-medium">
            Software Engineer · Vienna, Austria
          </p>
        </div>

        {/* ── About ── */}
        <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed max-w-lg">
          I&apos;ve been building things with computers since childhood — from
          accidentally breaking operating systems to shipping software
          professionally. Passionate about the web, the JVM, and occasionally
          escaping into the Austrian Alps with a camera.
        </p>

        {/* ── Skills ── */}
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="glass-subtle rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-white/70 flex items-center gap-2 hover:bg-white/[0.08] hover:text-white transition-colors cursor-default"
            >
              <span className="opacity-60">{s.icon}</span>
              {s.name}
            </span>
          ))}
        </div>

        {/* ── Action buttons ── */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {/* Experience modal */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="glass rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors cursor-pointer">
                <BriefcaseIcon size={16} className="text-white/50" />
                Experience
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Experience</DialogTitle>
                <DialogDescription>My professional timeline</DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6 space-y-5">
                {experience.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-[5.5rem] shrink-0 text-xs font-mono text-white/35 pt-0.5 leading-snug">
                      {item.period}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold leading-snug">
                        {item.role}
                        <span className="text-white/40 font-normal">
                          {" "}
                          @{" "}
                        </span>
                        {item.orgLink ? (
                          <a
                            href={item.orgLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-300/80 hover:text-sky-300 transition-colors underline underline-offset-2 decoration-sky-300/30"
                          >
                            {item.org}
                          </a>
                        ) : (
                          <span className="text-white/60">{item.org}</span>
                        )}
                      </div>
                      <p className="text-xs text-white/45 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Projects modal */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="glass rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors cursor-pointer">
                <FolderOpenIcon size={16} className="text-white/50" />
                Projects
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Projects</DialogTitle>
                <DialogDescription>Things I&apos;ve built</DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6 space-y-3">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="glass-subtle rounded-xl p-4 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">
                          {p.name}
                        </h3>
                        <p className="text-xs text-white/45 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-white/30 hover:text-sky-300 transition-colors mt-0.5"
                        >
                          <ArrowUpRightIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* ── Links ── */}
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href="mailto:me@nhaiden.io"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:scale-[1.02] transition-all"
          >
            <MailIcon size={16} /> Contact me
          </a>
          <a
            href="https://github.com/NiHaiden"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href="https://niklas.tech/NiklasHaiden_Resume.pdf"
            target="_blank"
            className="glass rounded-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors"
          >
            <DownloadIcon size={16} /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}
