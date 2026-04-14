"use client";

import { DatabaseIcon } from "lucide-react";
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

const skills = [
  { name: "Java", icon: <JavaPlain color="currentColor" size={20} /> },
  { name: "React", icon: <ReactIcon color="currentColor" size={20} /> },
  { name: "HTML / CSS", icon: <Html5Plain color="currentColor" size={20} /> },
  { name: "TypeScript", icon: <TypescriptPlain color="currentColor" size={20} /> },
  { name: "Kotlin", icon: <KotlinPlain color="currentColor" size={20} /> },
  { name: "Spring", icon: <SpringIcon color="currentColor" size={20} /> },
  { name: "SQL", icon: <DatabaseIcon color="currentColor" size={20} /> },
  { name: "Tailwind CSS", icon: <TailwindIcon color="currentColor" size={20} /> },
  { name: "Docker", icon: <DockerPlain color="currentColor" size={20} /> },
  { name: "Swift", icon: <SwiftPlain color="currentColor" size={20} /> },
];

export default function SkillsGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="glass-subtle rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 flex items-center gap-2 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <span className="text-white/50">{skill.icon}</span>
          {skill.name}
        </span>
      ))}
    </div>
  );
}
