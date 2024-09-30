import {RefObject} from "react";

export default function Hero({heroRef}: {heroRef: RefObject<any>}) {
    return (
        <div ref={heroRef} className={"grid lg:grid-cols-1 lg:grid-rows-1 grid-cols-1 grid-rows-1"}>
            <div
                className={"bgimg flex justify-center items-center min-h-[100vh] bg-top lg:bg-center lg:h-screen w-full"}>
                <div className={"w-full text-white flex lg:justify-center lg:items-center flex-col p-14 gap-3"}>
                    <div
                        className={"lg:w-1/2 w-full text-white drop-shadow-lg font-extrabold text-5xl lg:text-8xl flex flex-col lg:flex-row justify-start items-start"}>
                        <span>Hi, I am</span>
                        <code>/home/niklas!</code>
                    </div>
                    <div className={"w-full lg:w-1/2 font-medium text-xl lg:text-4xl"}>Living near the Austrian alps in
                        the city of Vienna, I
                        do
                        software development as a hobby and professionally. Mostly at home in the web dev and JVM
                        world. <br/></div>
                </div>
            </div>
        </div>
    )
}