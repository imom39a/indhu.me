import React from "react"
import styles from "./about.css"
import Layout from "../components/layout"

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Layout>
            <User
                username="Indhu Chinnathambi"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Indhu Chinnathambi. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Layout>
    )
}