import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import GatsbyImage from "gatsby-image"
import { HiEye } from "react-icons/hi"
import { IoCodeSlash } from "react-icons/io5"
//IoCodeSlash

const CustomCard = ({ title, content, img, liveDemoUrl, codeUrl }) => {
  return (
    <Col md={6}>
      <Card className="mb-5">
        <GatsbyImage fluid={img} className="card-img-top" />
        <Card.Body>
          <Card.Title className="text-center">{title && title}</Card.Title>
          <Card.Text className="text-center">{content && content}</Card.Text>

          <div className="btn__container text-center">
            <Button
              className="mr-3 customBtn"
              as="a"
              target="_blank"
              href={liveDemoUrl}
            >
              <HiEye />
              <span className="ml-2 btnText">Live Demo</span>
            </Button>

            <Button className="customBtn" as="a" target="_blank" href={codeUrl}>
              <IoCodeSlash />
              <span className="ml-2 btnText">Code</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CustomCard
