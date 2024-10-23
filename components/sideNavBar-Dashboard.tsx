import { Sidenav, Nav, DOMHelper } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import NavToggle from './NavToggle';
import { TextImage } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import MessageIcon from '@rsuite/icons/Message';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';

const { getHeight, on } = DOMHelper;

export default function SideNavBar({ expanded, setExpand, nbs }) {
    function getActiveKey() {
        let nav = [
            ['visualization', '2-1'],
            ['wiki', '2-2'],
            ['files', '3'],
            ['discussion', '4'],
            ['dashboard', '1'],
        ]
        let path = usePathname();
        for (let item of nav) {
            if (path.includes(item[0])) return item[1];
        }
        return '0';
    }
    let activeKey = getActiveKey();
    const [logo, setLogo] = useState('/logo.png');
    const controls = useAnimation();
    const imgRef = useRef(null);
    return (
        <Sidenav defaultOpenKeys={['2']} expanded={expanded}>
            <Sidenav.Body style={nbs}>
                <Nav activeKey={activeKey}>
                    <motion.img src={logo} className='w-[50%] inset-0 mx-auto py-3 max-h-[56px] object-cover' animate={controls}></motion.img>
                    <Nav.Item eventKey="1" icon={<DashboardIcon />} href='/dashboard' as={Link}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Menu onClick={() => !expanded ? setExpand(!expanded) : {}} eventKey="2" title='Knowledge System' icon={<TextImage />}>
                        <Nav.Item eventKey="2-1" href='/dashboard/visualization' as={Link}>Visualization</Nav.Item>
                        <Nav.Item eventKey="2-2" href='/dashboard/wiki' as={Link}>Wiki</Nav.Item>
                    </Nav.Menu>
                    <Nav.Item eventKey="3" icon={<PageIcon />} href='/dashboard/files' as={Link}>Files</Nav.Item>
                    <Nav.Item eventKey="4" icon={<MessageIcon />} href='/dashboard/discussion' as={Link}>Discussion</Nav.Item>
                </Nav>
            </Sidenav.Body>
            <NavToggle expand={expanded} onChange={() => {

                controls.start({
                    scale: 0,
                    transition: { duration: 0.1 },
                }).then(() => {
                    setLogo(prevLogo => (prevLogo === '/logo.png' ? '/texture/frontpage/header.png' : '/logo.png'));
                    setExpand(!expanded);
                }).then(() => {
                    controls.start({
                        scale: 1,
                        transition: { duration: 0.3 },
                    })
                })
            }} />
        </Sidenav>
    )
}
