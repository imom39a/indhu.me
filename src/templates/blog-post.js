import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Author from "../components/author"


import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa/index";
import { ShareButtonRoundSquare, ShareBlockStandard } from "react-custom-share";

import { css } from "emotion";



export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  const shareBlockProps = {
    url: "http://localhost:8000/",
    button: ShareButtonRoundSquare,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Linkedin", icon: FaLinkedin }
    ],
    text: post.frontmatter.title,
  };

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div class="box">
        <h1>{post.frontmatter.title}</h1>
        <Author />
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <ShareBlockStandard {...shareBlockProps} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`