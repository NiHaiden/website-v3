import {DatabaseIcon, Globe, Server} from "lucide-react";
import JavaPlain from 'devicons-react/lib/icons/JavaPlain';
import {
    DockerOriginal, DockerPlain,
    Html5Original,
    Html5Plain,
    KotlinPlain,
    NodejsPlain,
    ReactOriginal, ReactrouterPlain,
    SpringOriginal, SpringOriginalWordmark, SwiftPlain, TailwindcssPlainWordmark,
    TypescriptPlain
} from "devicons-react";
import SpringIcon from "@/components/SpringIcon";
import TailwindIcon from "@/components/TailwindIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import {RefObject} from "react";

const skills = [
    {
        name: "Java",
        icon: <JavaPlain color={"#fff"} size={48}/>,
    },
    {
        name: "React",
        icon: <ReactIcon color={"#fff"} size={48}/>
    },
    {
        name: "HTML / CSS",
        icon: <Html5Plain color={"#fff"} size={48}/>
    },
    {
        name: "Typescript",
        icon: <TypescriptPlain color={"#fff"} size={48}/>
    },
    {
        name: "Kotlin",
        icon: <KotlinPlain color={"#fff"} size={48}/>
    },
    {
        name: "Spring Framework",
        icon: <SpringIcon color={"#fff"} size={48}/>
    },
    {
        name: "PostgreSQL / MySQL / MSSQL",
        icon: <DatabaseIcon color={"#fff"} size={48}/>
    },
    {
        name: "TailwindCSS",
        icon: <TailwindIcon color={"#fff"} size={48}/>
    },
    {
        name: "Docker",
        icon: <DockerPlain color={"#fff"} size={48}/>
    },
    {
        name: "Swift (currently learning)",
        icon: <SwiftPlain color={"#fff"} size={48}/>
    }
]

export default function Skills({skillsRef}: {skillsRef: RefObject<any>}) {
    return (
        <div ref={skillsRef} className={"w-full h-full flex flex-col gap-6 justify-center items-center py-32"}>
            <div className={"lg:w-2/4 w-full lg:p-0 p-5 flex flex-col gap-4 lg:mt-10 items-center justify-center"}>
                <code
                    className={"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue"}>
                    <div>/home/Tech-Skills</div>
                </code>
                <div className={"grid grid-cols-2 gap-4 text-white"}>
                    {skills.map(((skill, index) => (
                        <div key={index}
                             className={"bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue p-4 drop-shadow-lg rounded-3xl flex flex-row items-center gap-2"}>
                            <div className={`${skill.name ? "flex flex-row gap-2 items-center" : ""}`}>
                                <span>{skill.icon}</span>
                                <span className={`${skill.name ? "block w-full" : "hidden"}`}>{skill.name}</span>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}