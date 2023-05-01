import * as React from "react"
import { Link, graphql } from "gatsby"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Badge from "react-bootstrap/Badge"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Row>
        <Col sm={3}>
          <Bio />
          <Sidebar />
        </Col>
        <Col sm={9}>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const tags = post.frontmatter.tags
              const postPath = `posts${post.fields.slug}`
              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={postPath} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <div className="tags-index">
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
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </Col>
      </Row>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
