import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ maxHeight: "50vh" }}>
      <Container>
        <Navbar.Brand href="#home">Movie List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{alignItems: "center"}}>
            <Link to='/main' style={{ textDecoration: "none", color: "grey" }}><Nav.Item style={{marginRight: "10px"}}>Главная</Nav.Item></Link>
            <Link to="/list" style={{ textDecoration: "none", color: "grey" }}><Nav.Item style={{marginRight: "10px"}}>Каталог</Nav.Item></Link>
            <Link to="/favorites" style={{ textDecoration: "none", color: "grey" }}><Nav.Item style={{marginRight: "10px"}}>Избранное</Nav.Item></Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
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