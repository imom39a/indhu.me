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
        <div class="header-wrapper">
            <section class="hero is-large">
                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h2 class="title">{data.site.siteMetadata.title}</h2>
                    </div>
                </div>
                <div class="hero-foot">
                    <div class="hero-foot--wrapper">
                        <div class="columns">
                            <div class="column is-12 hero-menu-desktop has-text-centered">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}