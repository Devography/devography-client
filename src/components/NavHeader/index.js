import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function NavHeader() {
  return (
    <Nav activeKey="/home" className="justify-content-end">
      <LinkContainer to="/languages">
        <Nav.Link>Languages</Nav.Link>
      </LinkContainer>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
