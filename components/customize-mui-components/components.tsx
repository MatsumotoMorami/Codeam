import React, { ReactNode } from "react"
import { styles } from "./styles";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

interface CustomizeProps {
    children?: ReactNode;
    style?: string;
}

export const CTimeline: React.FC<CustomizeProps> = ({ children, style = "default" }) => { return <Timeline sx={styles.CTimeline[style]}>{children}</Timeline>; }
export const CTimelineItem: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineItem sx={styles.CTimelineItem[style]}>{children}</TimelineItem>
export const CTimelineSeparator: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineSeparator sx={styles.CTimelineSeparator[style]}>{children}</TimelineSeparator>
export const CTimelineDot: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineDot sx={styles.CTimelineDot[style]}>{children}</TimelineDot>
export const CTimelineContent: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineContent sx={styles.CTimelineContent[style]}>{children}</TimelineContent>
export const CTimelineConnector: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineConnector sx={styles.CTimelineConnector[style]}>{children}</TimelineConnector>
export const CTimelineOppositeContent: React.FC<CustomizeProps> = ({ children, style = "default" }) => <TimelineOppositeContent sx={styles.CTimelineOppositeContent[style]}>{children}</TimelineOppositeContent>
