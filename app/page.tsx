"use client";

import Hero from "@/components/sections/Hero";
import {TimelineSection} from "@/components/sections/TimelineSection";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import {Contact} from "@/components/sections/contact";
import {useRef} from "react";
import Navbar from "@/components/Navbar";

export default function Home() {

    const heroRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Navbar heroRef={heroRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} projectsRef={projectRef}
                    contactRef={contactRef}/>
            <main className={"w-full h-full flex flex-col"}>
                <div className={"h-fit"}>
                    <Hero heroRef={heroRef}/>
                </div>
                <div className={"w-full lg:h-screen h-fit grid lg:grid-cols-2 gap-14 lg:gap-0 grid-cols-1"}>
                    <AboutMe aboutMeRef={aboutMeRef}/>
                    <TimelineSection/>
                </div>
                <div className={"w-full h-fit lg:mb-0 mb-24 grid lg:grid-cols-2 grid-cols-1"}>
                    <Projects projectRef={projectRef}/>
                    <Skills skillsRef={skillsRef}/>
                </div>
                <div className={"w-full h-dvh bgimg flex justify-center items-center py-32"}>
                    <Contact contactRef={contactRef}/>
                </div>
            </main>
        </>
    );
}
