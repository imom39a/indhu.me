import React from "react"
import Header from "./navigation/header"
import Footer from "./navigation/footer"

export default function Layout({ children }) {

  return (
    <div>
      <Header />
      <div class="container">
        {children}
      </div>
      <Footer />
    </div>
  )
}