import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const ImageDisplay = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(ImageQuery)

  return (
    <div className="imageDisplay">
      <Button as={Link} className="customBtn mb-3" to="/">
        Back
      </Button>
      <Row className="justify-content-center flex-column mt-5">
        <h1 className="main-title ml-3">Resume</h1>
        <Col md={10}>
          <GatsbyImage fluid={fluid} />
        </Col>
      </Row>
    </div>
  )
}

export default ImageDisplay

const ImageQuery = graphql`
  {
    file(name: { eq: "resume" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
