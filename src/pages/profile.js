import React from "react"
import Layout from "../components/layout"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsStar } from 'react-icons/bs/index'
import { graphql } from "gatsby"


export const query = graphql`
query {
    site {
      siteMetadata {
        siteUrl
        profile{
            item{
                logo
                title
                subtitle
                type                
                date
                contents
                images {
                    item {
                        data
                        text
                        link
                    }
                }
            }
        }
      }
    }
  }
`

export default function Profile({ data }) {


    return (
        <Layout>
            <div class='logo-me'></div>
            <div class='box text-center'>
                <h1>Indhu Chinnathambi</h1>
                <h3>Public speaker, Soft skill trainer, NLP practitioner</h3>
                <h5>MBA (HR), M.Com, Dip (ISTD), NLP, CLDP, CHRMP</h5>
            </div>
            <div class='box'>
                <h2>Area of expertise</h2>
                <ul>
                    <li>A competent professional with nearly 6 years of experience in various aspects of HR and Training & Development </li>
                    <li>Exposure in the implementation of HR plans & handling various HR processes</li>
                    <li>Proactive in assessing learning and development needs and effectively aligning programs / interventions with business objectives</li>
                    <li>Experience in developing training manuals and implementing innovative methods to bring about significant changes in the organization by organizing training & development activities at all levels</li>
                    <li>Skilled in managing recruitment functions involving Manpower Planning, Head Hunting, Screening, Pre-Placement Talks, Performance Management and Scheduling Interviews</li>
                    <li>Adept at people management, maintaining healthy employee relations and handling employee grievances thus creating an amicable & transparent environment</li>
                    <li>Excellent interpersonal, change management, multi-tasking, organizational and business communication skills at all levels</li>
                </ul>
            </div>
            <div class='profile-backgorund'>
                <VerticalTimeline
                >
                    {data.site.siteMetadata.profile.map(({ item }) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#2e3131' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date={item.date}
                            iconStyle={{ background: "url(" + item.logo + ")", backgroundSize: 'cover' }}
                        >
                            <h3 >{item.title}</h3>
                            <h4 >{item.subtitle}</h4>

                            <ul>
                                {item.contents ? item.contents.map(d => (
                                    <li>
                                        {d}
                                    </li>
                                )) : ""}
                            </ul>
                            <div class="columns is-multiline">
                                {item.images ? item.images.map(({ item }, i) => (
                                    <div class="column is-one-quarter">
                                        {i == 0 ? <span>Tools Used</span> : <span>&nbsp;</span>}
                                        <a href={item.link} target="_blank">
                                            <img src={item.data} title={item.text} />
                                        </a>
                                    </div>
                                )) : ""}
                            </div>
                        </VerticalTimelineElement>
                    ))}

                    <VerticalTimelineElement
                        iconStyle={{ background: '#0be881', color: '#2e3131' }}
                        icon={<BsStar />}
                    />
                </VerticalTimeline>
            </div>
        </Layout>
    )
}