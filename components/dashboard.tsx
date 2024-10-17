import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import HistoryTimeline from "./history-timeline"
import { Typography } from "@mui/material"

export default function DashboardComponentSet() {
    return (
        <div>
            <div className="fixed bg-[var(--blue)] w-[15vw] h-[100vh] "></div>
            <div className="fixed top-[12vh] left-[18vw] h-[84vh] w-[79vw]">
                <div className="w-[12vw] text-4xl text-white bg-[var(--black)] h-[7vh] mb-[4vh] db-HOME">HOME</div>
                <div className="w-full h-[28vh] mb-[3vh] bg-[var(--aoi)]"><History /></div>
                <div className="w-full h-[39vh] flex flex-row">
                    <div className="h-full w-[50vw] mr-[2vw] bg-[var(--aoi)]"></div>
                    <div className="h-full w-[27vw] bg-[var(--aoi)]"></div>
                </div>
            </div>
        </div>
    )
}

export function History() {
    return (
        <Timeline sx={{
            '& .MuiTimelineItem-root:before': {
                flex: 0,
                padding: 0,
            },
        }}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}