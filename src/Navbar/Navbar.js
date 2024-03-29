import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function siteNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect={true}>
      <Container>
        <Navbar.Brand href="./" ><b><u>Peter Kang</u></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./#/Resume">Resume</Nav.Link>
            <NavDropdown title="Projects" menuVariant="dark">
              <NavDropdown.Item href="./#/Projects">Software</NavDropdown.Item>
              <NavDropdown.Item href="./#/Collaborations">Collaborations</NavDropdown.Item>
              <NavDropdown.Item href="./#/Gaggiuino">Gaggiuino</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hobbies" menuVariant="dark">
              <NavDropdown.Item href="./#/CoffeeMods">Espresso Mods</NavDropdown.Item>
              <NavDropdown.Item href="./#/TeaProcess">Tea Processing Notes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default siteNavBar;
