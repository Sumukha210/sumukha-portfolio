import React from "react"
import Navbar from "../components/common/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.scss"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
