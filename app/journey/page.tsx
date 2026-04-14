"use client";

import { ArrowLeftIcon } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { experience } from "@/app/data";

export default function JourneyPage() {
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
          <h1 className="text-2xl sm:text-3xl font-bold">My journey</h1>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-white/[0.1]">
          <div className="space-y-8">
            {experience.map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-[calc(1.5rem+4.5px)] top-1.5 w-[9px] h-[9px] rounded-full bg-sky-400 shadow-lg shadow-sky-400/40" />

                <div className="text-xs font-mono text-white/35 mb-1">
                  {item.period}
                </div>
                <div className="text-sm sm:text-base font-semibold leading-snug mb-1">
                  {item.role}
                  <span className="text-white/40 font-normal"> @ </span>
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
                <p className="text-xs sm:text-sm text-white/45 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
