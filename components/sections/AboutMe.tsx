export default function AboutMe() {
    return (
        <div className={"w-full h-full flex justify-center items-center flex-col gap-3"}>
            <div className={"w-3/4 flex flex-col gap-3"}>
                <div
                    className={"text-7xl bg-clip-text bg-gradient-to-br font-semibold text-transparent from-nh-darkblue to-nh-lightblue text-center"}>About
                    me
                </div>
                <div className={"text-left text-nh-darkblue text-2xl font-medium"}>
                    I've been obsessed with computers since my early age.
                    What started out with the simple things, like sending an E-Mail or destroying the installed OS on a
                    computer, turned into a passion for life.
                    <br/>
                    During the teenage years I went to vocational school to deepen my knowledge and get a better grasp
                    at the concept of programming and how to write good, efficient code.
                    Over the years I have learned how to create my own little programs and even this website you're
                    viewing now.
                    <br/>
                    When I'm not in front of the computer hacking NASA, I like to go out into nature and
                    take pictures with my camera.
                    I also very much enjoy going to parites with friends or family.
                </div>
            </div>
        </div>
    )
}