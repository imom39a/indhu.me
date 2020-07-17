import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
    return (    
        <Layout>
            <Header headerText="Connect" />
            <Link to="/">Home</Link>
            <p>Send us a message!</p>
        </Layout>    
    )
}