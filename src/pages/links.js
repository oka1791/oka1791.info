import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import "./links.css"
import { IconContext } from 'react-icons'
import {FaTwitter, FaGithub, FaDiscord} from "react-icons/fa"
const LinksPage = ({location}) => {
  return (
    <Layout location={location}>
      <div class="container">
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
        <IconContext.Provider value={{color: '#ccc', size: '50px' }}>
          <a href="#" target="_blanck">
            <FaDiscord />
          </a>
        </IconContext.Provider>       
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Links"/>

// Step 3: Export your component
export default LinksPage