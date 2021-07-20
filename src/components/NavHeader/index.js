import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from "react-router-bootstrap";

export default function NavHeader() {
  return (

    <Navbar sticky="top" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>dev{' { } '}graphy</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/languages">
            <Nav.Link>Languages</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
