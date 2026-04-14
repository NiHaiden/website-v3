"use client";

import Image from "next/image";
import {
  MailIcon,
  GithubIcon,
  DownloadIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  DatabaseIcon,
} from "lucide-react";
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
import TransitionLink from "@/components/TransitionLink";

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

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-2xl glass-heavy rounded-3xl p-10 sm:p-14 flex flex-col items-center text-center gap-10"
        style={{ viewTransitionName: "main-card" }}
      >
        {/* ── Identity ── */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.svg"
            width={56}
            height={56}
            alt="Niklas Haiden"
            className="mb-1"
          />
        {/* ── Social links ── */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:me@nhaiden.io"
            title="Email"
            className="text-white/40 hover:text-white transition-colors"
          >
            <MailIcon size={20} />
          </a>
          <a
            href="https://github.com/NiHaiden"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-white/40 hover:text-white transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://niklas.tech/NiklasHaiden_Resume.pdf"
            target="_blank"
            title="Download Resume"
            className="text-white/40 hover:text-white transition-colors"
          >
            <DownloadIcon size={20} />
          </a>
        </div>

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
              className="text-white/50 hover:text-white hover:scale-110 transition-all duration-200 cursor-default drop-shadow-[0_0_8px_rgba(64,165,254,0.4)] hover:drop-shadow-[0_0_12px_rgba(64,165,254,0.6)]"
            >
              {s.icon}
            </span>
          ))}
        </div>

        {/* ── Actions ── */}
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          <TransitionLink
            href="/journey"
            className="glass rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors"
          >
            <BriefcaseIcon size={16} className="text-white/50" />
            My journey
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className="glass rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/[0.12] transition-colors"
          >
            <FolderOpenIcon size={16} className="text-white/50" />
            Projects
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
