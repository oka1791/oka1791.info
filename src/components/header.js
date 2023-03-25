import * as React from "react"
import {Link} from "gatsby"
import "./header.css"
import {StaticImage} from "gatsby-plugin-image"
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = ({location}) => {
  const basePaths = [`${__PATH_PREFIX__}/`, `${__PATH_PREFIX__}/about/`, `${__PATH_PREFIX__}/links/`]
  const isPostPath = !basePaths.includes(location.pathname)
  if (isPostPath) {
    return (
      <header>
        <Link className="header-link-home" to="/">
          Back to page
        </Link>
      </header>
    )
  } else {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="sm" className="mb-5">
          <Container>
            <Link to="/" className="navbar-brand">
              <StaticImage
                src="../images/profile-pic.png"
                width={32}
                height={32}
                formats={['AUTO', 'WEBP', 'AVIF']}
                className="d-inline-block align-top me-2"
                quality={95}
                alt=""
              />
              oka1791のブログ(仮)
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
