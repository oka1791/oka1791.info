import * as React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="defaultFooter">
    Copyright © {new Date().getFullYear()} oka1791, Built with
      <a href="https://www.gatsbyjs.com"
        target="_blank" rel="noopener noreferrer">Gatsby</a>
    </footer>   
  )
}

export default Footer