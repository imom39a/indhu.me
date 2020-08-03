import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Reactions from "../components/social/reactions"


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
                            <figure class="image is-96x96">
                                <Img fluid={data.fileName.childImageSharp.fluid} />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{data.site.siteMetadata.author}</p>
                            <p class="subtitle is-7">{props.postDate} <div>{props.timeToRead} min read </div> {<Reactions url={props.url} />}</p>
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

