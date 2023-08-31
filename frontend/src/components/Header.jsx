import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
            <NavbarBrand>
              <img src={logo} alt="solen" />
              SOLEN
            </NavbarBrand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={'/'}>
                <Nav.Link>
                  <FaUser style={{ marginRight: '5px' }} />
                  connexion
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
