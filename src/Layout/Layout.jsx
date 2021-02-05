import React from "react"
import Navbar from "../components/common/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.scss"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
