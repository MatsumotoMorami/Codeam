import { Checkbox, CheckboxGroup, Col, Divider, Grid, List, Row } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";
import { motion, useAnimationControls } from "framer-motion"
import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import { HistoryTimeline } from "@/components/frame";

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
            <DashboardTitle></DashboardTitle>
            <DashboardGridLayout
                discussionData={discussionData}
                teamTodo={teamTodo}
                setTeamTodo={setTeamTodo}
                individualTodo={individualTodo}
                setIndividualTodo={setIndividualTodo}
                expand={expand}>
            </DashboardGridLayout>
        </motion.div>
    )
}

function NoticeBoard() {
    const content = "动态开点线段树有着一些优点，比如说当你让某个节点继承另一个节点的左儿子或者右儿子的时候，你可以不用新建一棵线段树，而是直接将该节点的左右儿子赋成那个节点的左右儿子就行了，总之就是空间上有一定的优越性。线段树合并如果要每次都完整建一棵线段树的话，怕不是建完树就好凉凉了，因此我们需要选择动态开点。权值线段树能代替平衡树做一些求k大、排名、找前驱后继的操作，了解一下就可以啦"
    return (
        <div className="relative rounded-full bg-[var(--green-200)] h-[5vh] mr-[3vw]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[2vh] w-[2vh] absolute left-[2vh] top-[1.5vh]"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
            <div className="pl-[6vh] h-[5vh] leading-[5vh] pr-[3vh]">
                <SmoothMarquee>{content}</SmoothMarquee>
            </div>
        </div>
    )
}

interface SmoothMarqueeProps {
    children: React.ReactNode;
    speed?: number;
    spacing?: number;
}

const SmoothMarquee: React.FC<SmoothMarqueeProps> = React.memo(({ children, speed = 20, spacing = 50 }) => {
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [repeatCount, setRepeatCount] = useState(2);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const controls = useAnimationControls();

    const measureContent = useCallback(() => {
        if (contentRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            setContainerWidth(containerWidth);
            const singleContentWidth = contentRef.current.offsetWidth;
            setContentWidth(singleContentWidth);
            if (singleContentWidth * 2 <= containerWidth) {
                setRepeatCount(1);
            } else {
                const needed = Math.ceil(containerWidth / singleContentWidth) + 1;
                setRepeatCount(needed);
            }
        }
    }, []);

    useLayoutEffect(() => {
        measureContent();
    }, [measureContent]);


    useLayoutEffect(() => {
        if (contentWidth > 0 && repeatCount > 1) {
            const duration = (contentWidth + spacing) / speed;
            controls.start({
                x: [0, -(contentWidth + spacing) * repeatCount],
                transition: {
                    x: {
                        type: 'tween',
                        duration: duration,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                },
            });
        }
    }, [contentWidth, speed, controls, repeatCount, spacing]);

    return (
        <div ref={containerRef} className="overflow-hidden relative">
            <motion.div
                className="inline-flex whitespace-nowrap"
                style={{ width: `${(contentWidth + spacing) * repeatCount}px` }}
                animate={controls}
            >
                {[...Array(repeatCount)].map((_, index) => (
                    <Fragment key={index}>
                        <div ref={index === 0 ? contentRef : null}>{children}</div>
                        {index < repeatCount - 1 && (
                            <span style={{ width: `${spacing}px` }}></span>
                        )}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
});

function DashboardTitle() {
    return (
        <motion.div className="pl-3 pb-8">
            <span className="inline-block text-5xl font-bold">
                <pre>{"Dashboard"}</pre>
                <div className="flex flex-row">
                    <div className="h-3 w-[27%] bg-[var(--primary-orange)]"></div>
                    <div className="h-3 w-[27%] bg-[var(--primary-yellow)]"></div>
                    <div className="h-3 w-[27%] bg-[var(--primary-green)]"></div>
                </div>
            </span>
            <pre className="inline-block pr-[10%] text-5xl font-bold align-top">{"|工作台"}</pre>
        </motion.div>
    )
}

function DashboardGridLayout({ discussionData, teamTodo, setTeamTodo, individualTodo, setIndividualTodo, expand }) {
    return (
        <Grid className="min-w-full max-w-full">
            <Row className="m-0">
                <LeftCol expand={expand}></LeftCol>
                <RightCol
                    discussionData={discussionData}
                    teamTodo={teamTodo}
                    setTeamTodo={setTeamTodo}
                    individualTodo={individualTodo}
                    setIndividualTodo={setIndividualTodo}>
                </RightCol>
            </Row>
        </Grid>
    )
}

function LeftCol({ expand }) {
    return (
        <Col xs={24} sm={24} md={12} className="m-0 p-0">
            <NoticeBoard></NoticeBoard>
            <Row className={"mt-[5vh] mr-[3vw] h-[60vh] bg-white hover:shadow-xl duration-300"}>
                <motion.div className="text-3xl mb-[8%] font-bold header-bg h-[15%] w-full grid items-center">
                    <div className="ml-[5%]">History</div>
                </motion.div>
                <HistoryTimeline expand={expand}></HistoryTimeline>
            </Row>
        </Col>
    )
}

function RightCol({ discussionData, teamTodo, setTeamTodo, individualTodo, setIndividualTodo }) {
    return (
        <Col xs={24} sm={24} md={12} className="m-0 p-0">
            <DiscussionRow discussionData={discussionData}></DiscussionRow>
            <TodoRow
                individualTodo={individualTodo}
                setIndividualTodo={setIndividualTodo}
                teamTodo={teamTodo}
                setTeamTodo={setTeamTodo}></TodoRow>
        </Col>
    )
}

function DiscussionRow({ discussionData }) {
    return (
        <Row className="overflow-auto">
            <a className="block h-[32.5vh] mb-[5vh] bg-white hover:shadow-xl duration-300" href="/dashboard/discussion">
                <motion.div className="text-2xl font-bold header-bg grid items-center h-[20%]">
                    <div className="ml-[5%]">Discussion</div>
                </motion.div>
                <List className="px-[5%] pt-5">
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
            </a>
        </Row>
    )
}

function TodoRow({ individualTodo, setIndividualTodo, teamTodo, setTeamTodo }) {
    return (
        <Row className="py-[3%] px-[4%] h-[32.5vh] rounded-3xl bg-[var(--primary-color)] overflow-auto">
            <motion.div className="text-2xl pb-[3%] font-bold">Todo</motion.div>
            <motion.div className="grid grid-cols-2">
                {/* TeamTodo */}
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

                {/* IndividualTodo */}
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
    )
}