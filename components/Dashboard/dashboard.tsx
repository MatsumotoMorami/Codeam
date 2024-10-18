"use client";

import Timeline from 'rsuite/Timeline';
import TimelineItem from 'rsuite/TimelineItem';
import SideNavBar from '../sideNavBar';
import TopNavBar from '../topNavBar';
import { useState } from 'react';
import { Container, Header, Navbar, Nav, Content, Footer, Breadcrumb, Sidebar } from 'rsuite';

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
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState('1');
    const [active, setActive] = useState('home')
    return (
        <Container>
            <TopNavBar active={active} setActive={setActive}></TopNavBar>
            <Container>
                <SideNavBar onExpand={setExpanded} expand={expanded} />
                <Container className='m-[1vw]'>{/* content is here */}
                    <Container className='h-[30vh] bg-black'>

                    </Container>
                    <Container></Container>
                </Container>
            </Container>
        </Container>
    )
}

