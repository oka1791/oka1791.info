import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

// Step 2: Define your component
const LinksPage = ({location}) => {
  return (
    <Layout location={location}>
      <p>リンクを表示する</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Links"/>

// Step 3: Export your component
export default LinksPage