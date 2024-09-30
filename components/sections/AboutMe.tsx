import {Ref, RefObject} from "react";

export default function AboutMe({aboutMeRef}: {aboutMeRef: RefObject<any>}) {
    return (
        <div ref={aboutMeRef} className={"w-full h-full flex justify-center items-center flex-col gap-3 "}>
            <div className={"w-3/4 flex flex-col gap-3 py-32"}>
                <code
                    className={"text-7xl bg-clip-text bg-gradient-to-br font-semibold text-transparent from-nh-darkblue to-nh-lightblue text-center"}>
                    /home/about-me.md
                </code>
                <div className={"text-left text-nh-darkblue text-2xl font-medium"}>
                    I&#39;ve been obsessed with computers since my early age.
                    What started out with the simple things, like sending an E-Mail or destroying the installed OS on a
                    computer, turned into a passion for life.
                    <br/>
                    During the teenage years I went to vocational school to deepen my knowledge and get a better grasp
                    at the concept of programming and how to write good, efficient code.
                    Over the years I have learned how to create my own little programs and even this website you&#39;re
                    viewing now.
                    <br/>
                    When I&#39;m not in front of the computer hacking NASA, I like to go out into nature and
                    take pictures with my camera.
                    I also very much enjoy going to parties with friends or family.
                </div>
            </div>
        </div>
    )
}