import { useEffect, useMemo, useRef } from 'react';
import { Avatar, Badge, Dropdown, IconButton, Navbar, Popover, Stack, useMediaQuery, Whisper, WhisperInstance } from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';

const avatarSpeaker = (
    <Popover title={
        <div>
            {"Hi, "}
            <strong>Morami</strong>
        </div>
    }>
        <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Group</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item divider></Dropdown.Item>
            <Dropdown.Item>Sign Out</Dropdown.Item>
            <Dropdown.Item className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-3 h-3 absolute right-1 top-[calc(50%-0.375rem)]'><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                Help
            </Dropdown.Item>
        </Dropdown.Menu>
    </Popover>
)

const noticeSpeaker = (
    <Popover>

    </Popover>
)


export default function TopNavBar({ active, setActive, ...props }) {
    const [isMobile] = useMediaQuery('(max-width: 700px)');
    const trigger = useRef<WhisperInstance>(null);
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={20} className='header pt-[1vh] pr-[2vw]'>
            <Whisper speaker={noticeSpeaker}>
                <IconButton
                    icon={
                        <Badge content={1}>
                            <NoticeIcon style={{ fontSize: 15 }} />
                        </Badge>
                    }
                    appearance="subtle"
                />
            </Whisper>
            <Whisper speaker={avatarSpeaker} placement='bottomEnd' trigger="click">
                <Avatar
                    size="sm"
                    bordered
                    circle
                    style={{ marginLeft: 8 }}>
                </Avatar>
            </Whisper>
        </Stack>
    )
}