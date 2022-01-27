import { Nav, Container, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import loname from '../../localstorage.json'

function TopNavbar(){
  const { t } = useTranslation()
  const reset_welcome_and_reload = () => {
    localStorage.removeItem(loname.not_first_time)
    window.location.reload()
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">{t("Brand.name")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{t("Nav.home")}</Nav.Link>
            <Nav.Link onClick={reset_welcome_and_reload}>{t("Welcome.welcome")}</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar