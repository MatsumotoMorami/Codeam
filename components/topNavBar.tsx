import { useRef } from 'react';
import { Avatar, Badge, IconButton, Navbar, Stack, useMediaQuery, Whisper, WhisperInstance } from 'rsuite';
import Nav from 'rsuite/Nav';
import NavItem from 'rsuite/NavItem';
import NoticeIcon from '@rsuite/icons/Notice';

export default function TopNavBar({ active, setActive, ...props }) {
    const [isMobile] = useMediaQuery('(max-width: 700px)');
    const trigger = useRef<WhisperInstance>(null);
    return (
        <Stack direction={isMobile ? 'column' : 'row'} className="Header" spacing={10}>
            <IconButton
                icon={
                    <Badge content={1}>
                        <NoticeIcon style={{ fontSize: 25 }} />
                    </Badge>
                }
                appearance="subtle"
            />
            <Avatar
                sizes="m"
                bordered
                circle
                style={{ marginLeft: 8 }}
            />
        </Stack>
    )
}