import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import Badge from "react-bootstrap/Badge"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import Bio from "../components/bio"

const TagsTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={`タグ: "${tag}" (0記事)`} />
        <p>該当するタグの投稿記事がありません。</p>
      </Layout>
    )
  }

  const tagHeader = `${tag}(${totalCount})`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={tagHeader} />
      <Row>
        <Col sm={3}>
          <Bio />
          <Sidebar />
        </Col>
        <Col sm={9}>
          <h1>{tagHeader}</h1>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const tags = post.frontmatter.tags

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>
                        {moment(post.frontmatter.date).format(
                          `YYYY年MM月DD日 HH:mm`
                        )}
                      </small>
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

export default TagsTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tags
        }
      }
    }
  }
`
