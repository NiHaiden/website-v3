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
  KotlinPlain,
  PostgresqlPlain,
  KubernetesPlain,
  TypescriptPlain,
} from "devicons-react";
import SpringIcon from "@/components/SpringIcon";
import TailwindIcon from "@/components/TailwindIcon";
import ReactIcon from "@/components/icons/ReactIcon";

/* ─── Data ──────────────────────────────────────────── */

const skills = [
  { name: "Java", icon: <JavaPlain size={32} color="#fff" /> },
  { name: "React", icon: <ReactIcon size={32} color="#fff" /> },
  { name: "TypeScript", icon: <TypescriptPlain size={32} color="#fff" /> },

  { name: "Kotlin", icon: <KotlinPlain size={32} color="#fff" /> },
  { name: "Spring", icon: <SpringIcon size={32} color="#fff" /> },
  { name: "PostgreSQL", icon: <PostgresqlPlain size={32} color="#fff" /> },
  { name: "Kubernetes", icon: <KubernetesPlain size={32} color="#fff" /> },
  { name: "Tailwind", icon: <TailwindIcon size={32} color="#fff" /> },

];

const experience = [
  {
    period: "2025 – present",
    role: "Part-time Student — Software Design & Cloud Computing",
    org: "FH Joanneum",
    orgLink: "https://www.fh-joanneum.at",
    desc: "Studying subjects such as Mathematics for Informatics, Data Structures & Algorithms, and Informatics.",
  },
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
      <div className="w-full max-w-2xl glass-heavy rounded-3xl p-10 sm:p-14 flex flex-col items-center text-center gap-10">
        {/* ── Identity ── */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.svg"
            width={56}
            height={56}
            alt="Niklas Haiden"
            className="mb-1"
          />
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            Niklas Haiden
          </h1>
          <p className="text-lg sm:text-xl text-white/50 font-medium">
            Full Stack Engineer · Vienna, Austria
          </p>
        </div>

        {/* ── About ── */}
        <div className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg space-y-3 text-left">
          <p>
            I&apos;ve been obsessed with computers since my early age. What
            started out with the simple things, like sending an E-Mail or
            destroying the installed OS on a computer, turned into a passion for
            life.
          </p>
          <p>
            During the teenage years I went to vocational school to deepen my
            knowledge and get a better grasp at the concept of programming and
            how to write good, efficient code. Over the years I have learned how
            to create my own little programs and even this website you&apos;re
            viewing now.
          </p>
          <p>
            When I&apos;m not in front of the computer hacking NASA, I like to
            go out into nature and take pictures with my camera. I also very much
            enjoy going to parties with friends or family.
          </p>
        </div>

        {/* ── Skills ── */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              title={s.name}
              className="text-white/50 hover:text-white hover:scale-110 transition-all duration-200 cursor-default"
            >
              {s.icon}
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
                My journey
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
