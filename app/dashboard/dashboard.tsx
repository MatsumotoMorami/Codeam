import { Panel } from "rsuite";
import Timeline from "rsuite/Timeline";
import TimelineItem from "rsuite/TimelineItem";



export default function DashboardComponentSet() {
    return (
        <Panel header="atitle">
            <Timeline endless>
                <TimelineItem>16:27:41 Your order starts processing</TimelineItem>
                <TimelineItem>16:28:43 Your order to be ready for delivery</TimelineItem>
                <TimelineItem>16:28:45 Your parcel has been out of the library</TimelineItem>
                <TimelineItem>02:34:41 Send to Shanghai Hongkou Company</TimelineItem>
                <TimelineItem>15:05:29 Sending you a piece</TimelineItem>
            </Timeline>
        </Panel>

    )
}