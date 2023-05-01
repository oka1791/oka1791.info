import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = ({ location, title }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" className="mb-5">
        <Container>
          <Link to="/" className="navbar-brand">
            {title}
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about/" className="nav-link">
                About
              </Link>
              <Link to="/links/" className="nav-link">
                Links
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
