import {ArrowLeft, ArrowRight} from "lucide-react";

export function ProjectCard({link, projectTitle, projectDescription}: {link?: string, projectTitle: string; projectDescription: string}) {
    return (
        <div className={"w-full flex flex-col gap-2 border border-white rounded-3xl p-4 drop-shadow-lg text-white"}>
            <div className={"text-2xl font-bold"}>{projectTitle}</div>
            <div className={"text-lg"}>{projectDescription}</div>
            {link && (
                <div className={"flex justify-end text-xl"}>
                    <a className={"flex flex-row items-center gap-2 underline"} href={link}>Link to Project <ArrowRight/></a>
                </div>
            )}
            {!link && (
                <div className={"flex justify-end text-xl"}>
                    Coming soon.
                </div>
            )}
        </div>
    );
}