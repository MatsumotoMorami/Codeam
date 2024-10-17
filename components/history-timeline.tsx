import * as React from 'react';
import { CTimeline, CTimelineConnector, CTimelineContent, CTimelineDot, CTimelineItem, CTimelineOppositeContent, CTimelineSeparator } from './customize-mui-components/components';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

export default function HistoryTimeline() {
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
    return (
        <Timeline
            sx={{
                '& .MuiTimelineItem-root:before': {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent>9:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            {/* 其他时间轴项目 */}
        </Timeline>
    );
}
