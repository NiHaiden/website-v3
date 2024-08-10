export function ProjectCard({projectTitle, projectDescription}: {projectTitle: string; projectDescription: string}) {
    return (
        <div className={"w-full flex flex-col gap-2 border border-white rounded-3xl p-4 drop-shadow-lg text-white"}>
            <div className={"text-2xl font-bold"}>{projectTitle}</div>
            <div className={"text-lg"}>{projectDescription}</div>
        </div>
    );
}