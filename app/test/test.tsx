import { Checkbox, CheckboxGroup, Col, Container, Divider, Grid, List, Row } from "rsuite";
import { Panel } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";
import { motion } from "framer-motion"
import { useState } from "react";

function getLengthWithChineseDoubled(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[\u4e00-\u9fa5]/.test(str[i])) {
            length += 2;
        } else {
            length += 1;
        }
    }
    return length;
}

function sliceByLogicalWidth(str, width) {
    let currentWidth = 0;
    let slicedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charWidth = isChinese(char) ? 2 : 1;
        if (currentWidth + charWidth <= width) {
            slicedStr += char;
            currentWidth += charWidth;
        } else {
            break;
        }
    }

    return slicedStr;
}

function isChinese(char) {
    return /^[\u4e00-\u9fa5]$/.test(char);
}

export default function Test({ expand }) {
    const historyData = [
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
    ]
    const discussionData = [
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
    ]
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
        },
        {
            id: 5,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            team: "qwertyuiopqwertyuiop",
            state: "unfinished"
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
        },
        {
            id: 5,
            title: "这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题",
            state: "finished"
        }
    ])
    return (
        <motion.div animate={{
            paddingLeft: expand ? '300px' : '100px',
            paddingTop: '10vh',
            paddingRight: '50px'
        }} transition={{ duration: 0.3 }}>
            <Grid fluid>
                <Row>
                    <Col xs={24} md={12} lg={12}>
                        <div style={{ maxWidth: '100%', minWidth: '80%', maxHeight: '80vh', minHeight: '80vh', backgroundColor: 'lightblue', padding: '10px', margin: "20px", overflow: 'auto' }}>
                            区域一内容 (最大宽度 300px, 最大高度 200px)33333333333333333333333333333333333333333333333333
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Row>
                            <div style={{ maxWidth: '100%', minWidth: '80%', maxHeight: '40vh', minHeight: '40vh', backgroundColor: 'lightgreen', padding: '10px', margin: "20px", overflow: 'auto' }}>
                                区域二内容 (最大宽度 400px, 最大高度 250px)222222222222222222222222222222222222
                            </div>
                        </Row>
                        <Row>
                            <div style={{ maxWidth: '100%', minWidth: '80%', maxHeight: '40vh', minHeight: '40vh', backgroundColor: 'lightyellow', padding: '10px', margin: "20px", overflow: 'auto' }}>
                                区域三内容 (最大宽度 200px, 最大高度 150px)111111111111111111111111111111111111111
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </motion.div>
    )
}