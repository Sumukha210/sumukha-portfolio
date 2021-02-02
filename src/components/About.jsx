import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(imageQuery)

  return (
    <div className="about mt-5">
      <Row className="about__container justify-content-between align-items-center">
        <Col lg={6} md={7} sm={12}>
          <div className="about__content">
            <h1 className="about__title main-title">About Me</h1>
            <p>Hello, i’m Sumukha kb and I'm a Front-End Developer.</p>
            <p>
              I have serious passion for creating Responsive, feature rich
              website’s with a great user experiance.
            </p>
            <p>
              I'm currently looking for an opportunity to show my potential.
            </p>

            <div className="btn__container">
              <Button as={Link} to="/ImageDisplay" className="customBtn mr-3">
                Resume
              </Button>
              <Button className="customBtn">Hire Me</Button>
            </div>
          </div>
        </Col>
        <Col lg={6} md={5} sm={7}>
          <GatsbyImage fluid={fluid} className="img-fluid" />
        </Col>
      </Row>
    </div>
  )
}

export default About

const imageQuery = graphql`
  {
    file(name: { eq: "about-me-img" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
