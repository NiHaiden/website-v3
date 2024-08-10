import Image from "next/image";
import Hero from "@/components/sections/Hero";
import {TimelineSection} from "@/components/sections/TimelineSection";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import {Contact} from "@/components/sections/contact";
import CustomTimeline from "@/components/custom-timeline";

export default function Home() {
    return (
        <main>
            <div className={""}>
                <Hero/>
            </div>
            <div className={"w-full lg:h-screen h-fit pt-64 grid lg:grid-cols-2 gap-14 lg:gap-0 grid-cols-1"}>
                <AboutMe/>
                <Skills/>
            </div>
            <div className={"w-full h-screen grid lg:grid-cols-2 grid-cols-1"}>
                <Projects/>
                <Skills/>
            </div>
            <div className={"w-full h-screen bgimg flex justify-center items-center"}>
                <Contact/>
                <CustomTimeline/>
            </div>
        </main>
    );
}
