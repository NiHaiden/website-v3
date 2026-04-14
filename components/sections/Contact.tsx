import Image from "next/image";
import { GithubIcon, MailIcon } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex justify-center items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimg.JPG"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative blur orbs */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-nh-lightblue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-nh-notsodarkblue/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl mx-6 backdrop-blur-2xl bg-black/40 border border-white/[0.15] rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">Contact</h2>
        <div className="text-lg lg:text-xl font-medium leading-relaxed space-y-4 text-white/90">
          <p>
            Want to contact me? You can reach me via e-mail or check out my
            GitHub where I contribute to open source projects in my free time!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="mailto:me@nhaiden.io"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-nh-lightblue to-nh-notsodarkblue px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-nh-lightblue/20 hover:scale-105 transition-all duration-200"
          >
            <MailIcon size={22} />
            me@nhaiden.io
          </a>
          <a
            href="https://github.com/NiHaiden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-medium hover:bg-white/20 hover:scale-105 transition-all duration-200"
          >
            <GithubIcon size={22} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
