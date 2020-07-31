import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Author from "../components/author"
import { css } from "@emotion/core"
import { FacebookProvider, Comments } from 'react-facebook';


import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa/index";
import { ShareBlockStandard, ShareButtonRectangle } from "react-custom-share";


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  const shareBlockProps = {
    url: data.site.siteMetadata.siteUrl + post.fields.slug,
    button: ShareButtonRectangle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Linkedin", icon: FaLinkedin }
    ],
    text: post.frontmatter.title,
  };

  const imagePadding = css`img{
    padding: 10px;
  }  
  `

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div class="box">
        <h1>{post.frontmatter.title}</h1>
        <div >
          <Author postDate={post.frontmatter.date} timeToRead={post.timeToRead} />
        </div>
        <Img css={imagePadding} fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ShareBlockStandard {...shareBlockProps} />
        <FacebookProvider appId={`${process.env.FB_APP_ID}`}>
          <Comments href={shareBlockProps.url} width='100%'/>
        </FacebookProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title,
        author,
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
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