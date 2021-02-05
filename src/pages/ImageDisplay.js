import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { BiLinkExternal } from "react-icons/bi"

//BiLinkExternal
const ImageDisplay = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(ImageQuery)

  return (
    <div className="imageDisplay">
      <div className="d-flex align-items-center justify-content-between">
        <Button as={Link} className="customBtn mb-3" to="/">
          Back
        </Button>
        <Button
          as="a"
          href="https://www.docdroid.net/k4iBD2N/sumukha-resume-pdf"
          target="_blank"
          variant="info"
          className="customBtn PdfBtn"
        >
          <BiLinkExternal className="mr-2" /> PDF
        </Button>
      </div>
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
