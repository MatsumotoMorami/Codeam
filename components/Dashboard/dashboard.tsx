"use client";

import Timeline from 'rsuite/Timeline';
import classNames from 'classnames';
import TimelineItem from 'rsuite/TimelineItem';
import SideNavBar, { expand } from '../sideNavBar';
import TopNavBar from '../topNavBar';
import { useState } from 'react';
import { Container, Header, Navbar, Nav, Content, Footer, Breadcrumb, Sidebar } from 'rsuite';
import { getHeight } from 'rsuite/esm/DOMHelper';

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
    const [activeKey, setActiveKey] = useState('1');
    const [active, setActive] = useState('home')
    const [expand, setExpand] = useState(true);
    const [windowHeight, setWindowHeight] = useState(getHeight(window));
    const navBodyStyle: React.CSSProperties = expand
        ? { height: window.innerHeight - 112, overflow: 'auto' }
        : {};
    return (
        <Container className='frame'>
            <Header>
                <TopNavBar active={active} setActive={setActive} />
            </Header>
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 260 : 56}
                    collapsible>
                    <SideNavBar nbs={navBodyStyle} expanded={expand} setExpand={setExpand} />
                </Sidebar>
            </Container>
        </Container>
    )
}

