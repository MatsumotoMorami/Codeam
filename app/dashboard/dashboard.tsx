import { Checkbox, CheckboxGroup, Col, Container, Divider, Grid, List, Row } from "rsuite";
import { Panel } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";
import { calcLength, motion } from "framer-motion"
import { useState } from "react";

export default function DashboardComponentSet({ expand }) {
    const [historyData, setHD] = useState([
        {
            date: "2024.10.10 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！",
            id: 1
        },
        {
            date: "2024.10.10 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！",
            id: 2
        },
        {
            date: "2024.10.10 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！",
            id: 3
        },
        {
            date: "2024.10.10 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！",
            id: 4
        },
        {
            date: "2024.10.10 12:34:56",
            operator: "Morami",
            title: "睡觉",
            content: "开睡！",
            id: 5
        }
    ])
    const [discussionData, setDD] = useState([
        {
            id: 1,
            title: "滨寿司好吃还是Kura寿司好吃?",
            recentComment: {
                date: "2024.10.10 12:34:56",
                user: "Morami",
                content: "我觉得MakiHouse更好吃。"
            }
        },
        {
            id: 2,
            title: "滨寿司好吃还是Kura寿司好吃?",
            recentComment: {
                date: "2024.10.10 12:34:56",
                user: "AsakuraSayori",
                content: "我觉得东盛更好吃。我觉得东盛更好吃。我觉得东盛更好吃。我觉得东盛更好吃。"
            }
        }
    ])
    let [teamTodo, setTeamTodo] = useState([
        {
            id: 1,
            title: "中午一起去吃Makihouse",
            team: "MoramiStudio",
            state: "finished"
        },
        {
            id: 2,
            title: "晚上一起去吃东盛",
            team: "Pujimimu",
            state: "unfinished",
        },
        {
            id: 3,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            team: "woxihuandamaimai",
            state: "unfinished"
        },
        {
            id: 4,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            team: "qwertyuiopqwertyuiop",
            state: "finished"
        }
    ])
    let [individualTodo, setIndividualTodo] = useState([
        {
            id: 1,
            title: "中午去吃Makihouse",
            state: "finished"
        },
        {
            id: 2,
            title: "晚上去吃东盛",
            state: "unfinished",
        },
        {
            id: 3,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            state: "finished"
        },
        {
            id: 4,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            state: "unfinished"
        }
    ])
    return (
        <motion.div animate={{
            paddingLeft: expand ? '300px' : '100px',
            paddingRight: '3vw',
            paddingTop: '10vh'
        }} transition={{ duration: 0.2 }}>
            <motion.div className="pl-3 pb-8 relative">
                <div className="inline-block pr-[10%] text-5xl font-bold">Dashboard</div>
            </motion.div>
            <Grid className="min-w-full max-w-full">
                <Row className="m-0">
                    <Col xs={24} sm={24} md={12} className="m-0 p-0">
                        <NoticeBoard></NoticeBoard>
                        <Row className={"px-[10%] py-[8%] mt-[5vh] mr-[3vw] h-[60vh] rounded-3xl bg-[var(--primary-color)]"}>
                            <motion.div className="text-3xl pb-[8%] font-bold">History</motion.div>
                            <Timeline>
                                {historyData.map(item => (
                                    <TimelineItem key={item.id}>
                                        <motion.div>{item.operator + ' ' + item.content}</motion.div>
                                        <motion.div>{item.date}</motion.div>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} className="m-0 p-0">
                        <Row className="overflow-auto">
                            <div className="py-[3%] px-[4%] h-[32.5vh] mb-[5vh] rounded-3xl bg-[var(--primary-color)]">
                                <motion.div className="text-2xl pb-[3%] font-bold">
                                    Discussion
                                </motion.div>
                                <List hover>
                                    <motion.div className="leading-relaxed">
                                        <motion.div className="font-bold">{discussionData[0].title}</motion.div>
                                        <motion.pre className="text-ellipsis whitespace-nowrap overflow-hidden w-[90%]">{discussionData[0].recentComment.user + ': ' + discussionData[0].recentComment.content}</motion.pre>
                                        <motion.pre className="text-xs">{discussionData[0].recentComment.date}</motion.pre>
                                    </motion.div>
                                    <Divider style={{ marginTop: '2%', marginBottom: '2%' }}></Divider>
                                    <motion.div className="leading-relaxed">
                                        <motion.div className="font-bold">{discussionData[1].title}</motion.div>
                                        <motion.pre className="text-ellipsis whitespace-nowrap overflow-hidden w-[90%]">{discussionData[1].recentComment.user + ': ' + discussionData[1].recentComment.content}</motion.pre>
                                        <motion.pre className="text-xs">{discussionData[1].recentComment.date}</motion.pre>
                                    </motion.div>
                                </List>
                            </div>
                        </Row>
                        <Row className="py-[3%] px-[4%] h-[32.5vh] rounded-3xl bg-[var(--primary-color)] overflow-auto">
                            <motion.div className="text-2xl pb-[3%] font-bold">Todo</motion.div>
                            <motion.div className="grid grid-cols-2">
                                <CheckboxGroup value={teamTodo.map(item => item.state == "finished" && item.id).filter(item => item)} onChange={value => {
                                    for (let i = 1; i <= 4; i++) {
                                        if (value.includes(i)) {
                                            setTeamTodo(prev => prev.map(item =>
                                                item.id === i ? { ...item, state: "finished" } : item
                                            ));
                                        }
                                        else {
                                            setTeamTodo(prev => prev.map(item =>
                                                item.id === i ? { ...item, state: "unfinished" } : item
                                            ));
                                        }
                                        console.log(value)
                                    }
                                }}>
                                    {teamTodo.map(item => (
                                        <Checkbox value={item.id} key={item.id} color="green" className="rounded-full">
                                            <motion.pre className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</motion.pre>
                                        </Checkbox>
                                    ))}
                                </CheckboxGroup>
                                <CheckboxGroup value={individualTodo.map(item => item.state == "finished" && item.id).filter(item => item)} onChange={value => {
                                    for (let i = 1; i <= 4; i++) {
                                        if (value.includes(i)) {
                                            setIndividualTodo(prev => prev.map(item =>
                                                item.id === i ? { ...item, state: "finished" } : item
                                            ));
                                        }
                                        else {
                                            setIndividualTodo(prev => prev.map(item =>
                                                item.id === i ? { ...item, state: "unfinished" } : item
                                            ));
                                        }
                                        console.log(value)
                                    }
                                }}>
                                    {individualTodo.map(item => (
                                        <Checkbox value={item.id} key={item.id} color="green" className="rounded-full">
                                            <motion.pre className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</motion.pre>
                                        </Checkbox>
                                    ))}
                                </CheckboxGroup>
                            </motion.div>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </motion.div>
    )
}

export function NoticeBoard() {
    return (
        <div className="relative rounded-full bg-[var(--green-200)] h-[5vh] mr-[3vw]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[2vh] w-[2vh] absolute left-[2vh] top-[1.5vh]"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
        </div>
    )
}