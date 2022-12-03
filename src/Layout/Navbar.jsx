import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{maxHeight: "30vh"}} fixed='top'>
      <Container>
        <Navbar.Brand>MList</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: "center" }}>
            <Link to='/main' style={{ textDecoration: "none", color: "#fff" }}><Nav.Item style={{ marginRight: "10px" }}>Главная</Nav.Item></Link>
            <Link to="/list" style={{ textDecoration: "none", color: "#fff" }}><Nav.Item style={{ marginRight: "10px" }}>Каталог</Nav.Item></Link>
            <Link to="/favorites" style={{ textDecoration: "none", color: "#fff" }}><Nav.Item style={{ marginRight: "10px" }}>Избранное</Nav.Item></Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">О приложении</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;