import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/styles.scss"


export default function Home({ data }) {

  return (
    <Layout>

      <div class="columns">
        <div class="column">
          <div class="box">
            <h1>Indhu Chinnathambi</h1>
            <h3>Learning And Development Specialist, Freelancer, self-employed</h3>
          </div>
        </div>
        {/* <div class="column is-3 is-narrow">
          <div class="box">
            <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
          </div>
        </div> */}

      </div>
    </Layout >
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/indhu.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`