import Nav from 'rsuite/Nav';
import NavItem from 'rsuite/NavItem';

export default function TopNavBar({ active, setActive, ...props }) {
    return (
        <Nav {...props} activeKey={active} onSelect={setActive}>
            <NavItem eventKey="home">Home</NavItem>
            <NavItem eventKey="news">News</NavItem>
            <NavItem eventKey="solutions">Solutions</NavItem>
            <NavItem eventKey="products">Products</NavItem>
            <NavItem eventKey="about">About</NavItem>
        </Nav>
    )
}