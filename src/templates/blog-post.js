import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Header from "../components/header"
import Badge from "react-bootstrap/Badge"
import Footer from "../components/footer"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const tags = post.frontmatter.tags
  const previousPostPath = `/posts${previous ? previous.fields.slug : ""}`
  const nextPostPath = `/posts${next ? next.fields.slug : ""}`
  return (
    <>
      <Header location={location} title={siteTitle} />
      <div className="blogpost-wrapper">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <div className="tags">
              {tags &&
                tags.length > 0 &&
                tags.map(tag => {
                  return (
                    <>
                      <Link to={`/tags/${tag}/`} itemProp="url">
                        <Badge bg="secondary">{tag}</Badge>
                      </Link>{" "}
                    </>
                  )
                })}
            </div>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {next && (
                <Link to={nextPostPath} rel="next">
                  ← {next.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link to={previousPostPath} rel="prev">
                  {previous.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Footer title={post.frontmatter.title} location={location} />
      </div>
    </>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
