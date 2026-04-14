"use client";

import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { projects } from "@/app/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-2xl glass-heavy rounded-3xl p-10 sm:p-14"
        style={{ viewTransitionName: "main-card" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <TransitionLink
            href="/"
            className="glass rounded-xl p-2.5 hover:bg-white/[0.12] transition-colors"
          >
            <ArrowLeftIcon size={18} />
          </TransitionLink>
          <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
        </div>

        {/* Project list */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-subtle rounded-xl p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold mb-1.5">{p.name}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">
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
                    <ArrowUpRightIcon size={18} />
                  </a>
                )}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white/25 hover:text-sky-300 transition-colors mt-3 font-mono"
                >
                  {p.link.replace("https://", "")}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
