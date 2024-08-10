import {
    Timeline,
    TimelineConnector, TimelineContent, TimelineDescription,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    TimelineTime, TimelineTitle
} from "@/components/timeline/timeline";
import React from "react";
import CustomTimeline from "@/components/custom-timeline";


export function TimelineSection() {
    return (
        <div
            className={"lg:m-0 mt-14 w-full bg-gradient-to-tr from-nh-notsodarkblue to-nh-lightblue gap-5 flex flex-col justify-center items-center"}>
            <CustomTimeline/>
        </div>
    )
}

export function TimelineSectionOld() {
    return (
        <div
            className={"lg:m-0 mt-14 w-full bg-gradient-to-tr from-nh-notsodarkblue to-nh-lightblue gap-5 flex flex-col justify-center items-center"}>
            <div className={"text-6xl mt-10 font-bold text-white"}>My timeline</div>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector/>
                    <TimelineHeader>
                        <TimelineTime>2017-2022</TimelineTime>
                        <TimelineIcon/>
                        <TimelineTitle>HTBLUVA St.Pölten</TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <TimelineDescription>Vocational school in the heart of Lower Austria.
                            Started with C and then moved onto Java and deepened our knowledge in this field. We also
                            learned lots of interesting stuff about Linux, Web Development and also how to organize
                            projects and deal with starting your own company. Kickstarted my passion for
                            coding.</TimelineDescription>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector/>
                    <TimelineHeader>
                        <TimelineTime className={""}>2022-2023</TimelineTime>
                        <TimelineIcon/>
                        <TimelineTitle>Mandatory service as EMT @ Samariterbund</TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <TimelineDescription>The 9 month mandatory service consisted of helping elderly patients get to
                            their doctors appointments and back home, helping the main paramdedics in their daily tasks
                            in emergency medical services and various other organizational tasks. </TimelineDescription>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineHeader>
                        <TimelineTime>2024-today</TimelineTime>
                        <TimelineIcon/>
                        <TimelineTitle>Software Engineer at <a href={"https://patentamt.at"}>Austrian Patent Office</a></TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <TimelineDescription>Various duties include the development and deployment of internal tools to
                            help around the organization in their tasks and developing a sucessor to the See-IP System
                            where people can view trademarks and patents.</TimelineDescription>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}