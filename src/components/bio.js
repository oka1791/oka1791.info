import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaCoffee } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <FaCoffee />
      {author?.name && (
        <p>
          Written by
          {` `}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author.name}
          </a>
          {` `}
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
