import { Accordion, Button, Checkbox, CheckboxGroup, Col, Container, Divider, Drawer, Grid, List, Placeholder, Row, Stack } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";
import { motion, useAnimationControls } from "framer-motion"
import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import { HistoryTimeline } from "@/components/frame";
import WordCloud from "@/components/WordCloud";

export default function VisualizationComponentSet({ expand }) {
    return (
        <motion.div animate={{
            paddingLeft: expand ? '200px' : '0px',
            paddingRight: '3vw',
            paddingTop: '10vh'
        }} transition={{ duration: 0.2 }}>
            <VisualizationTitle></VisualizationTitle>
            {
                //词云  
                //
                //时间线进入列表
                //团队贡献一览（时间线贡献 词条贡献 issue贡献等）
                //思维导图进入列表
                //
            }
            <VisualizationGrid expand={expand} />
        </motion.div>
    )
}

function VisualizationGrid({ expand }) {
    let [timelineOpen, setTimelineOpen] = useState(false);
    let [contributionsOpen, setContributionsOpen] = useState(false);
    let [entryOpen, setEntryOpen] = useState(false);
    let timelineRef = useRef(null);
    let mindmapRef = useRef(null);
    const wordData = [
        { name: '计算机', value: 150 },
        { name: '编程', value: 120 },
        { name: '算法', value: 100 },
        { name: '数据结构', value: 90 },
        { name: '软件工程', value: 80 },
        { name: '人工智能', value: 110 },
        { name: '机器学习', value: 95 },
        { name: '深度学习', value: 85 },
        { name: '大数据', value: 75 },
        { name: '云计算', value: 70 },
        { name: '网络安全', value: 65 },
        { name: '数据库', value: 80 },
        { name: '操作系统', value: 70 },
        { name: 'Python', value: 100 },
        { name: 'Java', value: 90 },
        { name: 'JavaScript', value: 85 },
        { name: 'C++', value: 75 },
        { name: 'Go', value: 60 },
        { name: '网络', value: 65 },
        { name: '硬件', value: 55 },
        { name: '软件', value: 100 },
        { name: '开发', value: 120 },
        { name: '测试', value: 50 },
        { name: '部署', value: 45 },
        { name: '维护', value: 40 },
        { name: '架构', value: 60 },
        { name: '设计模式', value: 50 },
        { name: '面向对象', value: 55 },
        { name: '函数式编程', value: 45 },
        { name: '区块链', value: 50 },
        { name: '物联网', value: 40 },
        { name: '虚拟现实', value: 35 },
        { name: '增强现实', value: 30 },
        { name: '云原生', value: 40 },
        { name: '微服务', value: 45 },
        { name: '容器化', value: 35 },
        { name: 'DevOps', value: 50 },
        { name: '敏捷开发', value: 40 },
        { name: '项目管理', value: 35 },
        { name: '版本控制', value: 40 },
        { name: 'Git', value: 45 },
        { name: 'GitHub', value: 40 },
        { name: '代码', value: 80 },
        { name: '程序', value: 75 },
        { name: '技术', value: 70 },
        { name: '创新', value: 30 },
        { name: '安全', value: 60 }
    ]
    const timelineData = [
        {
            id: 1,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 2,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 3,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 4,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 5,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 6,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 7,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 8,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 9,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 10,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 11,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 12,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 13,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 14,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
        {
            id: 15,
            header: "游戏公告",
            content: "感谢大家一直以来对《明日方舟》的关注与支持，很高兴和大家再次见面。在本期制作组通讯发布之际，SideStory「追迹日落以西」已经开启了一段时间，希望大家可以在本次活动中玩的开心。",
            buttonOnClick: () => { }
        },
    ]
    const mindmapData = [
        {
            id: 1,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 2,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 3,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 4,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 5,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 6,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 7,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
        {
            id: 8,
            header: "思维导图",
            content: "42，作为现在玩家的主c空降核弹，肯定是要想办法限制的。此前rua牛一直尝试限制42，只是都收效甚微。但是，不要忘了，在卡西米尔活动中，有着凋零腐败这两个萨卡兹boss。想想泥岩和熔岩的天赋是什么？一个是萨卡兹对其伤害减少，一个是优先攻击萨卡兹且伤害上升。如果rua牛和大黄可以想到的话，我想大概会把这作为一个词条来进行限制吧。（虽然真限制的话泥岩熔泉这些也会被大幅影响)",
            buttonOnClick: () => { }
        },
    ]
    return (
        <motion.div className="flex flex-row w-full">
            <WordCloud wordData={wordData}></WordCloud>
            <div className="pl-[5%]">
                <motion.div animate={{
                    width: expand ? '30vw' : '40vw'
                }} transition={{ duration: 0.1 }} className="h-[20vh] bg-blue-200 hover:bg-blue-300 duration-200 mb-[5vh] rounded-3xl relative" onClick={() => setTimelineOpen(true)}>
                    <div className="text-2xl font-bold absolute top-[10%] left-[5%]">Timeline & Mindmap</div>
                    <div className="text-base text-gray-400 bottom-[10%] right-[5%] absolute">{">> Go to"}</div>
                </motion.div>
                <motion.div animate={{
                    width: expand ? '30vw' : '40vw'
                }} transition={{ duration: 0.1 }} className="h-[20vh] bg-blue-200 hover:bg-blue-300 duration-200 mb-[5vh] rounded-3xl relative" onClick={() => setContributionsOpen(true)}>
                    <div className="text-2xl font-bold absolute top-[10%] left-[5%]">Contributions</div>
                    <div className="text-base text-gray-400 bottom-[10%] right-[5%] absolute">{">> Go to"}</div>
                </motion.div>
                <motion.div animate={{
                    width: expand ? '30vw' : '40vw'
                }} transition={{ duration: 0.1 }} className="h-[20vh] bg-blue-200 hover:bg-blue-300 duration-200 rounded-3xl relative" onClick={() => setEntryOpen(true)}>
                    <div className="text-2xl font-bold absolute top-[10%] left-[5%]">Entry</div>
                    <div className="text-base text-gray-400 bottom-[10%] right-[5%] absolute">{">> Go to"}</div>
                </motion.div>
                <Drawer open={timelineOpen} onClose={() => setTimelineOpen(!timelineOpen)}>
                    <Drawer.Body className="pt-[10vh] relative">
                        <div className="font-bold text-3xl" ref={timelineRef}>Timeline</div>
                        {timelineData.map(item => (
                            <Accordion key={item.id}>
                                <TimelineMindmapAccordionPanel
                                    header={item.header}
                                    content={item.content}
                                    buttonOnClick={item.buttonOnClick}>
                                </TimelineMindmapAccordionPanel>
                            </Accordion>
                        ))}
                        <Divider></Divider>
                        <div className="font-bold text-3xl" ref={mindmapRef}>Mindmap</div>
                        {mindmapData.map(item => (
                            <Accordion key={item.id}>
                                <TimelineMindmapAccordionPanel
                                    header={item.header}
                                    content={item.content}
                                    buttonOnClick={item.buttonOnClick}>
                                </TimelineMindmapAccordionPanel>
                            </Accordion>
                        ))}
                        <Stack className="absolute top-3 right-3">
                            <Button onClick={() => {
                                timelineRef.current.scrollIntoView({ behavior: 'smooth' });
                            }}>Go to Timeline</Button>
                            <Button onClick={() => {
                                mindmapRef.current.scrollIntoView({ behavior: 'smooth' });
                            }}>Go to Mindmap</Button>
                        </Stack>
                    </Drawer.Body>
                </Drawer>
                <Drawer open={contributionsOpen} onClose={() => setContributionsOpen(!contributionsOpen)}>
                    <Drawer.Body><Placeholder.Paragraph></Placeholder.Paragraph></Drawer.Body>
                </Drawer>
                <Drawer open={entryOpen} onClose={() => setEntryOpen(!entryOpen)}>
                    <Drawer.Body><Placeholder.Paragraph></Placeholder.Paragraph></Drawer.Body>
                </Drawer>
            </div>
        </motion.div>
    )
}

function TimelineMindmapAccordionPanel({ header, content, buttonOnClick }) {
    return (
        <Accordion.Panel header={header}>
            <div className="flex flex-row h-[20vh]">
                <Divider vertical className="h-[95%]"></Divider>
                <div>
                    <div className="pb-2 overflow-scroll h-[80%]">{content}</div>
                    <Button onClick={buttonOnClick}>{">> Go to"}</Button>
                </div>
            </div>
        </Accordion.Panel>
    )
}

function VisualizationTitle() {
    return (
        <motion.div className="pl-32 pb-8 flow flow-row">
            <div className="inline-block pr-3 text-5xl font-bold">Visualization</div>
        </motion.div>
    )
}