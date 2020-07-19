import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/styles.scss"

import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa/index"

export default function Home({ data }) {

  return (
    <Layout>

      <div class="section-light about-me" id="about-me">
        <div class="box container">
          <div class="columns is-multiline">
            <div class="column is-6 right-image " data-aos="fade-left">
              <div class="is-rounded">
                <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
              </div>
            </div>
            <div
              class="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p class="is-larger">
                <strong>Welcome to Inside Out!!!! </strong>
              </p>
              <p class="is-larger">
                <strong>I'm Indhu Chinnathambi</strong>
              </p>
              <p>
                A Soft skill trainer from Chennai, India.
                I am handling online courses on Soft skills and language skills.
                <br />
                <br />
                Check my profile on
                <br />
                <br />
                <FaLinkedinIn /> <FaYoutube /> <FaFacebook />
                <br />
                <br />
                I do a lot of things.
              </p>
              <br />
              <div class="is-divider"></div>
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p class="subheading">
                    123-456-7890
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p class="subheading">
                    uhdni.vidyo@gmail.com
                  </p>
                </div>                
              </div>
            </div>

          </div>
        </div>
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