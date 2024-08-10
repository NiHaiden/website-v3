export default function Hero() {
    return (
        <div className={"grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2"}>
            <div className={"lg:bgimg w-full"}>
            </div>
            <div className={"w-full text-nh-darkblue flex lg:justify-center lg:items-center flex-col p-14 gap-3"}>
                <div
                    className={"bg-clip-text drop-shadow-lg text-transparent bg-gradient-to-br from-nh-darkblue to-nh-lightblue font-bold text-8xl"}>Hi,
                    I'm Niklas!
                </div>
                <div className={"font-medium text-2xl"}>Living near the Austrian alps in the city of Vienna, I do
                    software development as a hobby and professionally. Mostly at home in the web dev and JVM
                    world. <br/></div>
            </div>
        </div>
    )
}