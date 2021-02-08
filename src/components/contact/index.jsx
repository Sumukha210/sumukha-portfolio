import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InfoGroup from "./InfoGroup"
import FormGroup from "./FormGroup.jsx"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="main-title text-center">Get in touch</h1>
      <Row className="contact__container justify-content-between mt-5">
        <Col sm={12} lg={4} xl={4}>
          <InfoGroup />
        </Col>

        <Col sm={12} lg={8} xl={8}>
          <FormGroup />
        </Col>
      </Row>
    </div>
  )
}

export default Contact
