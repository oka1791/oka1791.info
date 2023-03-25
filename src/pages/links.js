import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import "./links.css"
import Signal from "../assets/signal.svg"
import { IconContext } from 'react-icons'
import {FaTwitter, FaGithub} from "react-icons/fa"
const LinksPage = ({location}) => {
  return (
    <Layout location={location}>
      <h1>Links</h1>
      <div className="container">
        <IconContext.Provider value={{color: '#ccc', size: '50px' }}>
          <a href="https://github.com/oka0509" target="_blanck">
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{color: '#ccc', size: '50px' }}>
          <a href="https://twitter.com/oka1791" target="_blanck">
            <FaTwitter />
          </a>
        </IconContext.Provider>
        <a href="https://bookmeter.com/users/1370570" target="_blanck" id ="bookmeter">
          <Signal style={{ height: 53, width: 50 }} fill={"#ccc"}/>
        </a>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Links"/>

// Step 3: Export your component
export default LinksPage