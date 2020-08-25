import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ClapSocialButton from "../components/social/clap"
import Author from "../components/author"
import { css } from "@emotion/core"
import { FacebookProvider, Comments } from 'react-facebook';
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"

import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa/index";
import { FcNext, FcPrevious } from "react-icons/fc/index";
import { ShareBlockStandard, ShareButtonRectangle } from "react-custom-share";


export default function BlogPost({ data, pageContext }) {
  console.log(pageContext);
  const { next, prev } = pageContext
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
        <Helmet>
          <meta property="fb:app_id" content="3431490390217878" />
          <meta property="fb:admins" content="100000562344757"/>
          <meta property="fb:admins" content="100002587266349"/>
        </Helmet>

      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div class="box">
        <h1>{post.frontmatter.title}</h1>
        <div >
          <Author postDate={post.frontmatter.date} timeToRead={post.timeToRead} url={shareBlockProps.url} />
        </div>
        <Img css={imagePadding} fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div class='categories-links-bar'>
          {post.frontmatter.tags && post.frontmatter.tags.map(t => (
            <Link to={`/tags/${kebabCase(t)}/`}><span class="tag is-black item">#{t}</span></Link>
          ))}
        </div>
        <hr />
        <div>
          <ClapSocialButton url={shareBlockProps.url} />
          <div class='next-prev-links-bar'>
            {prev && <Link to={prev.fields.slug}> <FcPrevious /> Previous post</Link>}
            {next && <Link to={next.fields.slug}> Next post<FcNext /></Link>}
          </div>
          <br />
          <ShareBlockStandard {...shareBlockProps} />
          <hr />
          <FacebookProvider appId='3431490390217878'>
            <Comments href={shareBlockProps.url} width='100%' />
          </FacebookProvider>
        </div>

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
    markdownRemark(fields: {slug: {eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
          title
          tags
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