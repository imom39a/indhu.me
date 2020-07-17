import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {

  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  );

  return (
    <div>
      <div>
        <nav class="navbar is-transparent">
          <div class="navbar-brand" role="navigation" aria-label="main navigation">
            <a href="/" style={{ textDecoration: 'none' }}>
              <h1>{data.site.siteMetadata.title}</h1>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div id="navbarBasicExample"  class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="/" style={{ textDecoration: 'none' }}>Home</a>
              <a class="navbar-item" href="/about/" style={{ textDecoration: 'none' }}>About</a>
              <a class="navbar-item" href="/contact/" style={{ textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </nav>
        {children}
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          Indhu Chinnathambi
    </div>
      </footer>
    </div >
  )
}