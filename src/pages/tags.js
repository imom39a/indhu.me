import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <div class="box">
        <Helmet title={title} />
        <div>
          <h1>Categories</h1>
          {group.map(tag => (
            <div class='categories-links-bar'>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <span class="tag is-black item">#{tag.fieldValue} ({tag.totalCount})</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`