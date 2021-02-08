import React from "react"
import About from "../components/About"
import Contact from "../components/contact"
import Hero from "../components/Hero"
import Project from "../components/projects"
import Skills from "../components/skills"
import Layout from "../Layout"

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </Layout>
    </>
  )
}

export default index
