import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/styles.scss"

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
            <div class="column is-6 has-vertically-aligned-content" data-aos="fade-right">
              <p>
                I’m Indhu Chinnathambi living in Atlanta.
              </p>
              <p>
                I was born and brought up in a metropolitan city named Chennai, Tamil Nadu – a state in India. With that said yes, I’m a Tamizhian, Indian who loves my place, culture, tradition and PEOPLE.
                </p>
              <h3>  ‘All the world is a laboratory to the inquiring mind.’ –Martin Fisher </h3>
              <p>
                Of course, PEOPLE. That was the key driving force for deciding my passionate career. Back in 2011, I decide to be a soft skill trainer and I made it. Today I am a learning & development specialist with 7 years of experience as a facilitator, E-Learning module developer, public speaker.
              </p>
              <p>
                Believing this quote, I continued learning. I hold a Bachelor’s in Commerce, Master’s in Business Administration and a Master’s in Commerce. I am certified NLP Practitioner, Certified Learning & Development Professional, Certified Human Resource Management Professional, I also hold a Diploma from Indian Society of Training and Development. I am a member of MacToast Toastmasters club, Atlanta and a member of JCI.
                </p>
              <p>
                Inside Out is a platform where I can share all my thoughts, beliefs, values and more. This platform is more of a personal dairy for me. You would wonder why a person share her personal dairy with the whole world. It’s because I love people and believe in them.
                </p>
              <p>
                So, you can read my blogs and share your thoughts with which we can together improvise more. Oh yeah! How can you share your thoughts with me? Simple, connect with my social media accounts.
                </p>
              <p>
                Over to my blogs……
              </p>
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