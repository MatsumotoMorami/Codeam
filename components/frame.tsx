"use client";

import Timeline from 'rsuite/Timeline';
import TimelineItem from 'rsuite/TimelineItem';
import SideNavBar from './sideNavBar-Dashboard';
import TopNavBar from './topNavBar';
import { useEffect, useState } from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import { motion } from "framer-motion";

export function HistoryTimeline({ expand }) {
    interface HistoryDataType {
        id: number,
        operator: string,
        location: string,
        action: string,
        date: string,
        team: string,
        object?: string
    }
    const HistoryData: HistoryDataType[] = [
        {
            id: 1,
            operator: "Morami",
            location: "Wiki页面",
            action: "编辑",
            object: "明日方舟页面",
            team: "MoramiStudio",
            date: "2024.10.10 12:34:56"
        },
        {
            id: 2,
            operator: "Mitori",
            location: "文件管理页面",
            action: "上传",
            object: "page.tsx",
            team: "Pujimimu",
            date: "2024.10.10 12:34:56"
        },
        {
            id: 3,
            operator: "Morami",
            location: "房间里",
            action: "睡觉",
            team: "Kungao",
            date: "2024.10.10 12:34:56"
        },
        {
            id: 4,
            operator: "Morami",
            location: "房间里",
            action: "起床",
            team: "Kungao",
            date: "2024.10.10 12:34:56"
        },
        {
            id: 5,
            operator: "Morami",
            location: "房间里",
            action: "睡觉",
            team: "Kungao",
            date: "2024.10.10 12:34:56"
        }
    ]
    return (
        <Timeline>
            {HistoryData.map(item => (
                <TimelineItem key={item.id}>
                    <motion.div className='relative'>
                        {item.operator + ' 在 ' + item.location + ' ' + item.action + (item.object ? ('了' + item.object) : '')}
                        <motion.span className='text-gray-400 absolute right-[5%]'
                            initial="hidden"
                            variants={{
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1,
                                    transition: { duration: 0.2 }
                                }
                            }}
                            animate={!expand ? "visible" : "hidden"}
                        >
                            {"From " + item.team}
                        </motion.span>
                    </motion.div>
                    <motion.div>{item.date}</motion.div>
                </TimelineItem>
            ))}
        </Timeline>
    );
}



export default function Frame({ children, expand, setExpand }) {
    const [activeKey, setActiveKey] = useState('1');
    const [active, setActive] = useState('home');
    const [windowHeight, setWindowHeight] = useState(0);
    const [navBodyStyle, setNavBodyStyle] = useState({ height: 0, overflow: 'auto' });

    useEffect(() => {
        const handleResize = () => {
            const newHeight = window.innerHeight - 60; // 计算新的高度
            setWindowHeight(window.innerHeight);
            setNavBodyStyle({ height: newHeight, overflow: 'auto' }); // 更新样式
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 立即调用一次，获取初始高度
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container>
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' }}
                width={expand ? 260 : 56}
                collapsible>
                <SideNavBar nbs={navBodyStyle} expanded={expand} setExpand={setExpand} />
            </Sidebar>
            <Container>
                <Header className='header'>
                    <TopNavBar active={active} setActive={setActive} />
                </Header>
                <Content>
                    {children}
                </Content>
            </Container>
            <Footer></Footer>
        </Container>
    );
}
