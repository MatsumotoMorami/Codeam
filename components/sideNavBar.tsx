import { Sidenav, Nav, Container, Sidebar, DOMHelper } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import NavToggle from './NavToggle';
import { useEffect, useState } from 'react';
import { Icon } from './icon';
import { TextImage } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import MessageIcon from '@rsuite/icons/Message';

const { getHeight, on } = DOMHelper;

export default function SideNavBar({ expanded, setExpand, nbs }) {
    return (
        <Sidenav defaultOpenKeys={['2']} expanded={expanded}>
            <Sidenav.Body style={nbs}>
                <Nav activeKey="1">
                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Menu onClick={() => !expanded ? setExpand(!expanded) : {}} eventKey="2" title='Knowledge & WIKI' icon={<TextImage />}>
                        <Nav.Item eventKey="2-1">Visualization</Nav.Item>
                        <Nav.Item eventKey="2-2">Knowledge</Nav.Item>
                    </Nav.Menu>
                    <Nav.Item eventKey="3" icon={<PageIcon />}>Files</Nav.Item>
                    <Nav.Item eventKey="4" icon={<MessageIcon />}>Discussion</Nav.Item>
                </Nav>
            </Sidenav.Body>
            <NavToggle expand={expanded} onChange={() => setExpand(!expanded)} />
        </Sidenav>
    )
}
