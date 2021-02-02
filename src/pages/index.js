import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Project from "../components/projects/Project"
import Skills from "../components/skills/Skills"
import Layout from "../Layout/Layout"

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Project />
      </Layout>
    </>
  )
}

export default index
