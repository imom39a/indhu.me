import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/styles.scss"


export default function Home({ data }) {

  return (
    <Layout>
      <div class="is-size-1 is-size-4-mobile">{data.allMarkdownRemark.totalCount} Posts</div>
      <div class="columns is-desktop">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class="column" key={node.id}>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <div class="card">
                <div class="card-content">
                  <div>
                    <h3><span>{node.frontmatter.title}</span></h3>
                    <h6>{node.frontmatter.date}</h6>
                  </div>
                  <div>
                    <div>
                      <p>{node.excerpt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </Layout >
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`