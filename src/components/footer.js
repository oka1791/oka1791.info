import * as React from "react"
import "./footer.css"
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"
const Footer = ({ title, location }) => {
  const basePaths = [
    `${__PATH_PREFIX__}/`,
    `${__PATH_PREFIX__}/about/`,
    `${__PATH_PREFIX__}/links/`,
  ]
  const tagPath = new RegExp(__PATH_PREFIX__ + "/tags/(.)+")
  const isPostPath =
    !basePaths.includes(location.pathname) && !location.pathname.match(tagPath)
  const url = "https://oka1791-info.netlify.app" + location.pathname
  const shareIcons = (
    <div className="shareIcons">
      <FacebookShareButton title={title} url={url}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <LineShareButton title={title} url={url}>
        <LineIcon size={40} round />
      </LineShareButton>

      <LinkedinShareButton title={title} url={url}>
        <LinkedinIcon title={title} size={40} round />
      </LinkedinShareButton>

      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
    </div>
  )
  if (isPostPath) {
    return (
      <footer className="defaultFooter">
        {shareIcons}
        <div className="bottom">
          Copyright © {new Date().getFullYear()} oka1791, Built with&nbsp;
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </footer>
    )
  } else {
    return (
      <footer className="defaultFooter">
        <div className="bottom">
          Copyright © {new Date().getFullYear()} oka1791, Built with&nbsp;
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
