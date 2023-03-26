import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Sidebar = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          group(field: { frontmatter: { tags: SELECT } }) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  )
  const tags = data.allMarkdownRemark.group
  return (
    <div>
      <h3>Tags</h3>
      <ul>
        {tags.map(tag => {
          const tagPath = `/tags/${tag.tag}/`
          return (
            <li>
              <Link to={tagPath}>
                {tag.tag}({tag.totalCount})
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
