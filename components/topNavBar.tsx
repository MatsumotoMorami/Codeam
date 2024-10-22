import { Avatar, Badge, Dropdown, IconButton, Popover, SelectPicker, Stack, useMediaQuery, Whisper } from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import Link from 'next/link';
import DropdownItem from 'rsuite/esm/Dropdown/DropdownItem';
import DarkModeToggle from './DarkModeToggle';
import { Children, useState } from 'react';
import { div, label } from 'framer-motion/client';
import MessageIcon from '@rsuite/icons/Message';
import { setgroups } from 'process';

const avatarSpeaker = (
    <Popover title={
        <div>
            {"Hi, "}
            <strong>Morami</strong>
        </div>
    }>
        <Dropdown.Menu>
            <Dropdown.Item as={Link} href="" key="profile">Profile</Dropdown.Item>
            <Dropdown.Item as={Link} href="" key="group" >Group</Dropdown.Item>
            <Dropdown.Item as={Link} href="" key="settings">Settings</Dropdown.Item>
            <Dropdown.Item as={Link} href="" className='relative' key="help">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-3 h-3 absolute right-1 top-[calc(50%-0.375rem)]'><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                Help
            </Dropdown.Item>
            <Dropdown.Item as={div} key="dmtoggle" className='text-center hover:bg-white'><DarkModeToggle /></Dropdown.Item>
        </Dropdown.Menu>
    </Popover>
)

interface notice {
    id: number,
    time: {
        num: number;
        unit: string;
    },
    from: string,
    content: string,
    href: string
}

const noticeList: notice[] = [
    {
        id: 1,
        time: {
            num: 1,
            unit: "day"
        },
        from: "MoramiStudio",
        content: "该吃饭了该吃饭了该吃饭了该吃饭了该吃饭了该吃饭了该吃饭了该吃饭了",
        href: ""
    },
    {
        id: 2,
        time: {
            num: 3,
            unit: "day"
        },
        from: "MoramiStudio",
        content: "该打乌蒙了该打乌蒙了",
        href: ""
    },
    {
        id: 3,
        time: {
            num: 3,
            unit: "day"
        },
        from: "MoramiStudio",
        content: "睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!睡觉!",
        href: ""
    },
    {
        id: 4,
        time: {
            num: 3,
            unit: "day"
        },
        from: "MoramiStudio",
        content: "该吃饭了该吃饭了该吃饭了",
        href: ""
    },
]

const noticeSpeaker = (
    <Popover id="notificationPopover" title={
        <div>
            Notification
        </div>
    }>
        <Dropdown.Menu className='w-full'>
            {noticeList.map(item => (
                <div className='w-full' key={item.id}>
                    <Dropdown.Item as={Link} href={item.href}>
                        <div className='text-gray-400 text-xs leading-relaxed'>{item.time.num + ' '
                            + (item.time.num > 1 ? item.time.unit + 's' : item.time.unit)
                            + " ago"}</div>
                        <div className='text-xs leading-relaxed'>From <strong>{item.from}</strong></div>
                        <div className='text-ellipsis whitespace-nowrap overflow-hidden w-[16vw] leading-relaxed'>{item.content}</div>
                    </Dropdown.Item>
                    <Dropdown.Item divider key={"divider" + item.id}></Dropdown.Item>
                </div>
            ))}
            <DropdownItem key="morenitifications">
                <div className='text-gray-400'>More Notifications...</div>
            </DropdownItem>
        </Dropdown.Menu>
    </Popover>
)

const messageSpeaker = (
    <Popover id="notificationPopover" title={
        <div>
            Notification
        </div>
    }>
        <Dropdown.Menu className='w-full'>
            {noticeList.map(item => (
                <div className='w-full' key={item.id}>
                    <Dropdown.Item as={Link} href={item.href}>
                        <div className='text-gray-400 text-xs leading-relaxed'>{item.time.num + ' '
                            + (item.time.num > 1 ? item.time.unit + 's' : item.time.unit)
                            + " ago"}</div>
                        <div className='text-xs leading-relaxed'>From <strong>{item.from}</strong></div>
                        <div className='text-ellipsis whitespace-nowrap overflow-hidden w-[16vw] leading-relaxed'>{item.content}</div>
                    </Dropdown.Item>
                    <Dropdown.Item divider key={"divider" + item.id}></Dropdown.Item>
                </div>
            ))}
            <DropdownItem key="morenitifications">
                <div className='text-gray-400'>More Notifications...</div>
            </DropdownItem>
        </Dropdown.Menu>
    </Popover>
)

export default function TopNavBar({ active, setActive }) {
    const [group, setGroup] = useState("");
    const [isMobile] = useMediaQuery('(max-width: 700px)');
    const groupData = [
        "MoramiStudio",
        "Pujimimu",
        "MeowMeowCat",
        "SEGA Corperation",
    ]
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={20} className='header pt-[1vh] pr-[2vw]'>
            <SelectPicker
                defaultValue={groupData[0]}
                onChange={(value) => {
                    setGroup(value);
                }}
                data={groupData.map(item => ({ label: item, value: item }))} label="Group"
                className='w-[15vw]'
            ></SelectPicker>
            <Whisper speaker={messageSpeaker} placement='bottomEnd' trigger="click">
                <IconButton
                    icon={
                        <Badge content={10}>
                            <MessageIcon style={{ fontSize: 15 }}></MessageIcon>
                        </Badge>
                    }
                />
            </Whisper>
            <Whisper speaker={noticeSpeaker} placement='bottomEnd' trigger="click">
                <IconButton
                    icon={
                        <Badge content={20}>
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