import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/styles.scss"

export default function Blog({ data }) {
    return (
        <Layout>
            <div class="is-size-1 is-size-4-mobile">{data.allMarkdownRemark.totalCount} Posts</div>
            <div class="rows">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div class="column" key={node.id}>
                        <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image">
                                        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </figure>
                                </div>
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }    
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