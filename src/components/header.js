import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { IconContext } from "react-icons"
import { IoReturnUpBack } from "react-icons/io5"

const Header = ({ location, title }) => {
  const basePaths = [
    `${__PATH_PREFIX__}/`,
    `${__PATH_PREFIX__}/about/`,
    `${__PATH_PREFIX__}/links/`,
  ]
  const tagPath = new RegExp(__PATH_PREFIX__ + "/tags/(.)+")
  const isPostPath =
    !basePaths.includes(location.pathname) && !location.pathname.match(tagPath)
  if (isPostPath) {
    return (
      <header className="header">
        <Link className="header-link-home" to="/">
          <IconContext.Provider value={{ size: "30px" }}>
            <IoReturnUpBack />
          </IconContext.Provider>
          Back to home
        </Link>
      </header>
    )
  } else {
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
}

export default Header
