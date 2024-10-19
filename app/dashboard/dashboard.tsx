import { Container } from "rsuite";
import { Panel } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";
import { motion } from "framer-motion"

export default function DashboardComponentSet({ expand }) {
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
    return (
        <motion.div animate={{
            paddingLeft: expand ? '300px' : '100px',
            paddingTop: '10vh',
            paddingRight: '50px'
        }} transition={{ duration: 0.3 }}>
            <motion.div className="pl-3 pb-8 text-5xl">
                Dashboard
            </motion.div>
            <motion.div className="grid grid-cols-2">
                <motion.div className={"mr-[10%] p-[10%] h-[70vh] rounded-3xl bg-[var(--primary-color)]"}>
                    <motion.div className="text-3xl pb-[8%]">History</motion.div>
                    <Timeline>
                        {historyData.map(item => (
                            <TimelineItem key={item.id}>
                                <motion.div>{item.operator + ' ' + item.content}</motion.div>
                                <motion.div>{item.date}</motion.div>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </motion.div>
                <motion.div>
                    <motion.div className="h-[32.5vh] mb-[5vh] rounded-3xl bg-blue-300">

                    </motion.div>
                    <motion.div className="h-[32.5vh] rounded-3xl bg-blue-300">

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}