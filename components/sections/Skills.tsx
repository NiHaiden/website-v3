import {Globe, Server} from "lucide-react";
import JavaPlain from 'devicons-react/lib/icons/JavaPlain';
export default function Skills() {
    return (
        <div className={"w-full h-full flex flex-col gap-6 justify-center items-center"}>
            <div className={"w-2/4 flex flex-col gap-4"}>
                <div
                    className={"text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue"}>My Techstack
                </div>
                <div className={"grid grid-cols-1 gap-4 text-white"}>
                    <div
                        className={"bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue p-4 drop-shadow-lg rounded-3xl flex flex-col gap-2"}>
                        <div className={"text-3xl flex flex-row gap-2 items-center"}><Globe />Web Development</div>
                        <ul>
                            <li>NodeJS</li>
                            <li>React, NextJS</li>
                            <li>HTML, CSS, Java-/Typescript</li>
                            <JavaPlain color={"#fff"} size={48}/>
                        </ul>
                    </div>
                    <div
                        className={"bg-gradient-to-br from-nh-notsodarkblue to-nh-carolinablue p-4 drop-shadow-lg rounded-3xl flex flex-col gap-2"}>
                        <div className={"text-3xl flex flex-row gap-2 items-center"}><Server /> Backend</div>
                        <ul>
                            <li>Java / Kotlin</li>
                            <li>Spring Framework</li>
                            <li>PostgreSQL, MySQL, MSSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}