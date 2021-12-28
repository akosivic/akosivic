// import { useRef } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header(props: any) {
    let headerlist: string[] = ["About Me", "Skills", "Experience"];
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="#">Vic Salak</Navbar.Brand>
                <Navbar.Brand className="text-muted">Software Engineer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto p-2 bd-highlight">
                        {headerlist.map((header, idx) => (
                            <Nav.Link key={idx} href={`/#${header.replace(' ','')}`}> {header}</Nav.Link>
                        ))}
                    </Nav>
                    <Nav variant="pills" defaultActiveKey="#Contact">
                        <Nav.Link href='#Contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >);
};

export default Header;