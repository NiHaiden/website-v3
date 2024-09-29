export default function CustomTimeline() {
    return (
        <div className="w-3/4 p-6 sm:p-10 flex items-center justify-center text-white">
            <div
                className="after:absolute after:inset-y-0 after:w-px after:bg-white relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                <div className="grid gap-1 text-sm relative">
                    <div
                        className="aspect-square w-3 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"/>
                    <div className="text-lg font-bold">2017-2022</div>
                    <div className="text-lg text-white">
                        <span className={"font-bold text-xl"}>HTBLUVA St.Pölten</span> <br/>
                        Vocational school in the heart of Lower Austria.
                        Started with C and then moved onto Java and deepened our knowledge in this field. We also
                        learned lots of interesting stuff about Linux, Web Development and also how to organize
                        projects and deal with starting your own company. Kickstarted my passion for
                        coding.
                    </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                    <div
                        className="aspect-square w-3 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"/>
                    <div className="text-lg font-bold">2022-2023</div>
                    <div className="text-lg text-white">
                        <span className={"font-bold text-xl"}>Mandatory service as EMT @ Samariterbund</span> <br/>
                        The 9 month mandatory service consisted of helping elderly patients get to
                        their doctors appointments and back home, helping the main paramdedics in their daily tasks
                        in emergency medical services and various other organizational tasks.
                    </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                    <div
                        className="aspect-square w-3 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"/>
                    <div className="text-lg font-bold">2024-today</div>
                    <div className="text-lg text-white">
                        <span className={"font-bold text-xl"}>Software Engineer at <a className={"underline"} href={"https://patentamt.at"}>Austrian Patent Office</a></span> <br/>
                        Various duties include the development and deployment of internal tools to
                        help around the organization in their tasks and developing a sucessor to the See-IP System
                        where people can view trademarks and patents.
                    </div>
                </div>
            </div>
        </div>
    )
}