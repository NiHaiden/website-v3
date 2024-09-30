import {ProjectCard} from "@/components/ProjectCard";
import {Ref, RefObject} from "react";

export default function Projects({projectRef}: {projectRef: RefObject<any>} ) {
    return (
        <div ref={projectRef} className={"w-full"}>
            <div className={"w-full h-full flex flex-col gap-6 justify-center items-center bg-gradient-to-br from-nh-darkblue to-nh-carolinablue py-32"}>
                <code
                    className={" text-5xl font-semibold text-white text-center"}>
                    /home/Projects
                </code>
                <div className={"w-4/6 lg:w-1/2 grid grid-cols-1 gap-6 lg:p-4 mb-10 lg:mb-0"}>
                    <ProjectCard projectTitle={"Raven"} projectDescription={"Raven is an experiment of mine to build a personal PaaS platform, similar to Heroku or other services to deploy dockerized apps easily via a web interface or API. Currently work in progress."}/>
                    <ProjectCard link={"https://getaurora.dev"} projectTitle={"Aurora"} projectDescription={"Aurora was born out of the need for a seamless Linux workstation experience with a beautiful desktop and every developer tool preinstalled, paired with unmatched stability. It's now part of Universal-Blue."}/>
                </div>
            </div>
        </div>
    )
}