const path = require(`path`)
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-template.js")
  const tagTemplate = path.resolve("src/templates/tags-template.js")


  const result = await graphql(`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }  
      }
    `)
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

}