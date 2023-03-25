import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      <div>
        <h3>固定ページ</h3>
        <ul>
          <li>
            <Link to="/sample-page/">サンプルページ</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>最近の投稿</h3>
        <ul></ul>
      </div>

      <div>
        <h3>カテゴリー</h3>
        <ul></ul>
      </div>
    </>
  )
}