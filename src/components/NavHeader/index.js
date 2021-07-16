import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function NavHeader() {
  return (
    <Nav activeKey="/home" className="justify-content-end">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/languages">
        <Nav.Link>Languages</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}
