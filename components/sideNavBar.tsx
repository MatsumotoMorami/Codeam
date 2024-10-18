import { Sidenav, Nav, Container, Sidebar } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

export default function SideNavBar({ onExpand, expand }) {
    return (
        <Sidebar style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 56}
            collapsible>
            <Sidenav defaultOpenKeys={['3', '4']} expanded={expand}>
                <Sidenav.Body style={expand
                    ? { height: window.innerHeight * 0.90, overflow: 'auto' }
                    : {}}>
                    <Nav activeKey="1">
                        <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                            User Group
                        </Nav.Item>
                        <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                            <Nav.Item eventKey="3-1">Geo</Nav.Item>
                            <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Channels</Nav.Item>
                            <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            <Nav.Menu eventKey="4-5" title="Custom Action">
                                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle onToggle={onExpand} />
            </Sidenav>
        </Sidebar>
    )
}
