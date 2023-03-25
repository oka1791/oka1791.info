import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>About</h1>
      <p>
        okaといいます。私大数学科の3年で、卒業後はWebエンジニアをやります。趣味はアニメ、読書(ハードSF)、コーヒーです。
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

// Step 3: Export your component
export default AboutPage
