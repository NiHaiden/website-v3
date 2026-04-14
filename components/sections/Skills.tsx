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
  { name: "Java", icon: <JavaPlain color="#fff" size={40} /> },
  { name: "React", icon: <ReactIcon color="#fff" size={40} /> },
  { name: "HTML / CSS", icon: <Html5Plain color="#fff" size={40} /> },
  { name: "Typescript", icon: <TypescriptPlain color="#fff" size={40} /> },
  { name: "Kotlin", icon: <KotlinPlain color="#fff" size={40} /> },
  {
    name: "Spring Framework",
    icon: <SpringIcon color="#fff" size={40} />,
  },
  {
    name: "PostgreSQL / MySQL / MSSQL",
    icon: <DatabaseIcon color="#fff" size={40} />,
  },
  { name: "TailwindCSS", icon: <TailwindIcon color="#fff" size={40} /> },
  { name: "Docker", icon: <DockerPlain color="#fff" size={40} /> },
  {
    name: "Swift (learning)",
    icon: <SwiftPlain color="#fff" size={40} />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-[80vh] lg:min-h-screen flex flex-col justify-center items-center py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative blur orbs */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-nh-lightblue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-nh-carolinablue/10 rounded-full blur-[100px] pointer-events-none" />

      <code className="relative z-10 text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue text-center mb-10">
        /home/Tech-Skills
      </code>

      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 flex flex-row items-center gap-3 text-white"
            >
              <span className="shrink-0">{skill.icon}</span>
              <span className="font-medium text-sm lg:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
