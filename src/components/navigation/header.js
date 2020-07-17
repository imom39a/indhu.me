import React from "react";
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {

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
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div class="navbar-brand" role="navigation" aria-label="main navigation">
                <a class="navbar-item" href="/">
                    <h1>{data.site.siteMetadata.title}</h1>
                </a>
            </div>
            <div id="nav-menu" class="navbar-menu is-active">
                <div class="navbar-end">
                    <a class="navbar-item" href="/blog" >Blog</a>
                    <a class="navbar-item" href="/contact/" >Connect</a>
                </div>
            </div>
        </nav>
    )
}