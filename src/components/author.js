import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default function Author(props) {

    const data = useStaticQuery(
        graphql`
              query {
                site {
                  siteMetadata {
                    title,
                    author
                  }
                }
                fileName: file(relativePath: { eq: "images/indhu.jpg" }) {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
            `);

    return (
        <div>
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <Img fluid={data.fileName.childImageSharp.fluid} />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{data.site.siteMetadata.author}</p>
                            <p class="subtitle is-6">{props.postDate} . {props.timeToRead} min read</p>
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

