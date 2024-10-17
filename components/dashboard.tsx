"use client";

import Timeline from 'rsuite/Timeline';
import TimelineItem from 'rsuite/TimelineItem';
import SideNavBar from './sideNavBar';
import TopNavBar from './topNavBar';
import { useState } from 'react';

export function HistoryTimeline(props) {
    const HistoryData: HistoryDataType[] = [
        {
            time: "2024.10.1 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！"
        },
        {
            time: "2024.10.1 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！"
        },
        {
            time: "2024.10.1 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！"
        },
        {
            time: "2024.10.1 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！"
        }
    ]
    console.log(props);
    return (
        <Timeline endless {...props}>
            <TimelineItem>16:27:41 Your order starts processing</TimelineItem>
            <TimelineItem>16:28:43 Your order to be ready for delivery</TimelineItem>
            <TimelineItem>16:28:45 Your parcel has been out of the library</TimelineItem>
            <TimelineItem>02:34:41 Send to Shanghai Hongkou Company</TimelineItem>
            <TimelineItem>15:05:29 Sending you a piece</TimelineItem>
        </Timeline>
    );
}


export default function DashboardComponentSet() {
    let [active, setActive] = useState("home");
    return (
        <div>
            <TopNavBar appearance="subtle" active={active} setActive={setActive} />
            <SideNavBar></SideNavBar>
            <div className="fixed top-[12vh] left-[18vw] h-[84vh] w-[79vw]">
                <div className="w-[12vw] text-4xl text-white bg-[var(--black)] h-[7vh] mb-[4vh] db-HOME">HOME</div>
                <div className="w-full h-[28vh] mb-[3vh] bg-[var(--aoi)]"><HistoryTimeline isItemActive={Timeline.ACTIVE_FIRST} /></div>

            </div>
        </div>
    )
}

