import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header location={location} />
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
