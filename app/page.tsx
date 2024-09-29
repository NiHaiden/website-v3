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
        <main className={"w-full h-full flex flex-col"}>
            <div className={"h-fit"}>
                <Hero/>
            </div>
            <div className={"w-full lg:h-screen h-fit grid lg:grid-cols-2 gap-14 lg:gap-0 grid-cols-1"}>
                <AboutMe/>
                <TimelineSection/>
            </div>
            <div className={"w-full h-fit lg:mb-0 mb-24 grid lg:grid-cols-2 grid-cols-1"}>
                <Projects/>
                <Skills/>
            </div>
            <div className={"w-full h-screen bgimg flex justify-center items-center py-32"}>
                <Contact/>
            </div>
        </main>
    );
}
