import {ProjectCard} from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className={"w-full"}>
            <div className={"w-full h-full flex flex-col gap-6 justify-center items-center bg-gradient-to-br from-nh-darkblue to-nh-carolinablue"}>
                <div
                    className={"lg:mt-0 mt-14 text-5xl font-semibold text-white text-center"}>
                    Projects
                </div>
                <div className={"w-4/6 lg:w-1/2 grid grid-cols-1 gap-6 lg:p-4"}>
                    <ProjectCard projectTitle={"Raven"} projectDescription={"Raven is an experiment of mine to build a personal PaaS platform, similar to Heroku or other services to deploy dockerized apps easily via a web interface or API. Currently work in progress."}/>
                    <ProjectCard projectTitle={"Aurora"} projectDescription={"Aurora was born out of the need for a seamless Linux workstation experience with a beautiful desktop and every developer tool preinstalled, paired with unmatched stability. It's now part of Universal-Blue."}/>
                </div>
            </div>
        </div>
    )
}