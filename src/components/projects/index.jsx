import React from "react"
import Row from "react-bootstrap/Row"
import { graphql, useStaticQuery } from "gatsby"
import CustomCard from "./CustomCard"
import Col from "react-bootstrap/Col"

const Project = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(imageQuery)

  return (
    <div className="project">
      <Row
        className="project__container align-items-center justify-content-center"
        id="project"
      >
        <Col>
          <h1 className="main-title">Projects</h1>
          <Row className="align-items-center mt-5">
            <CustomCard
              img={nodes[2].childImageSharp.fluid}
              title={ekart.title}
              content={ekart.content}
              liveDemoUrl={ekart.liveDemoUrl}
              codeUrl={ekart.codeUrl}
            />
            <CustomCard
              img={nodes[0].childImageSharp.fluid}
              title={videoder.title}
              content={videoder.content}
              liveDemoUrl={videoder.liveDemoUrl}
              codeUrl={videoder.codeUrl}
            />
            <CustomCard
              img={nodes[1].childImageSharp.fluid}
              title={countries.title}
              content={countries.content}
              liveDemoUrl={countries.liveDemoUrl}
              codeUrl={countries.codeUrl}
            />
            <CustomCard
              img={nodes[3].childImageSharp.fluid}
              title={recipros.title}
              content={recipros.content}
              liveDemoUrl={recipros.liveDemoUrl}
              codeUrl={recipros.codeUrl}
            />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Project

const imageQuery = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "project" } }) {
      nodes {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ekart = {
  title: "E-kart",
  content: "A Fullstack e-commerce website",
  liveDemoUrl: "https://e-kart.netlify.app/",
  codeUrl: "https://github.com/Sumukha210/E-kart-website",
}

const recipros = {
  title: "Recipros",
  content: "A Recipe search website",
  liveDemoUrl: "https://recipros.netlify.app/",
  codeUrl: "https://github.com/Sumukha210/Recipros-website",
}

const videoder = {
  title: "videoder",
  content: "An online Video editor website",
  liveDemoUrl: "https://videoder-website.netlify.app/",
  codeUrl: "https://github.com/Sumukha210/videoder-website",
}

const countries = {
  title: "Countries",
  content: "A Countries related information search website",
  liveDemoUrl: "https://countries-website.netlify.app/",
  codeUrl: "https://github.com/Sumukha210/countries",
}
