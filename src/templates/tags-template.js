import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>
      <div class="box">
        <h1>{tagHeader}</h1>
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
                      <h6>{node.frontmatter.date} . {node.timeToRead} min read</h6>
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
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags">All Categories</Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
          timeToRead
        }
      }
    }
  }
`