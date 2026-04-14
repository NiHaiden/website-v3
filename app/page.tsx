import Hero from "@/components/sections/Hero";
import { TimelineSection } from "@/components/sections/TimelineSection";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="w-full grid lg:grid-cols-2 grid-cols-1">
          <AboutMe />
          <TimelineSection />
        </div>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1">
          <Projects />
          <Skills />
        </div>
        <Contact />
      </main>
    </>
  );
}
