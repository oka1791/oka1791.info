import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <h1>About</h1>
      <p>
        okaといいます。私大数学科の4年で、卒業後はWebエンジニアをやります。趣味はアニメ、読書(ハードSF)、コーヒーです。
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

// Step 3: Export your component
export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
