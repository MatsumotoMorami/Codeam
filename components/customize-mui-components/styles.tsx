import { blue } from "@mui/material/colors";

export const styles = {
    CTimeline: {
        default: {
            '& .MuiTimelineItem-root:before': {
                flex: 0,
                padding: 0,
            },
        },
        123: {
            '& .MuiTimelineItem-root:before': {
                flex: 0,
                padding: 0,
            },
        }
    },
    CTimelineDot: { default: { backgroundColor: blue } },
    CTimelineSeparator: { default: {} },
    CTimelineOppositeContent: { default: {} },
    CTimelineConnector: { default: {} },
    CTimelineContent: { default: {} },
    CTimelineItem: { default: {} },
}