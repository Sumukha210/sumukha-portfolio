import React from "react"
import Navbar from "../components/common/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.scss"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
