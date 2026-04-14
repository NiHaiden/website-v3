"use client";

import React, { useEffect, useState } from "react";
import { DownloadIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 text-white transition-all duration-300 ${
        scrolled
          ? "bg-nh-darkblue/80 backdrop-blur-2xl shadow-2xl shadow-nh-darkblue/20"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-4 lg:px-8 flex-col md:flex-row items-center">
        {/* Desktop nav */}
        <div className="hidden lg:flex w-full font-medium text-white flex-row items-center justify-between">
          <a href="#hero" className="transition-transform hover:scale-105">
            <Image
              src="/logo.svg"
              width={scrolled ? 44 : 52}
              height={scrolled ? 44 : 52}
              alt="Niklas Haiden logo"
              className="transition-all duration-300"
            />
          </a>

          <div className="flex flex-row gap-10 text-lg items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-nh-lightblue transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-nh-lightblue after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            target="_blank"
            href="https://niklas.tech/NiklasHaiden_Resume.pdf"
            className="inline-flex gap-2 items-center bg-gradient-to-br from-nh-lightblue to-nh-notsodarkblue px-5 py-2.5 rounded-xl shadow-lg hover:shadow-nh-lightblue/25 hover:scale-105 transition-all duration-200"
          >
            <DownloadIcon size={18} /> Get my CV
          </a>
        </div>

        {/* Mobile header */}
        <div className="w-full flex flex-row justify-between items-center lg:hidden">
          <a href="#hero">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              alt="Niklas Haiden logo"
            />
          </a>
          <div className="flex flex-row gap-3 items-center">
            <a
              target="_blank"
              title="Download my CV"
              href="https://niklas.tech/NiklasHaiden_Resume.pdf"
            >
              <DownloadIcon size={26} />
            </a>
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              <div className="relative w-7 h-7">
                <MenuIcon
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${
                    navbarOpen
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <XIcon
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${
                    navbarOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu — pure CSS transition */}
        <div
          className={`w-full lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            navbarOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 p-8 text-center text-lg rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setNavbarOpen(false)}
                className="py-2 hover:text-nh-lightblue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
