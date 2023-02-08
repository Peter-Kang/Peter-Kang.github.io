import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function siteNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect={true}>
      <Container>
        <Navbar.Brand href="./" >Peter Kang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./#/Projects">Projects</Nav.Link>
            <Nav.Link href="./#/Resume">Resume</Nav.Link>
            <Nav.Link href="./#/Coffee">Coffee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default siteNavBar;
