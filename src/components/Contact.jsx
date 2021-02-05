import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="main-title text-center">Get in touch</h1>
      <Row className="contact__container justify-content-between mt-5">
        <Col sm={12} lg={4} xl={4}>
          <div className="info__group my-2">
            <h6 className="heading text-uppercase">Phone</h6>
            <p className="info m-0">9449022673</p>
            <p className="info m-0">8618174796 </p>
          </div>
          <div className="info__group my-4">
            <h6 className="heading text-uppercase">address</h6>
            <p className="info">Thandige,Sorab.karnataka</p>
          </div>
          <div className="info__group">
            <h6 className="heading text-uppercase">Email</h6>
            <p className="info p-0 m-0">sumukhakb210@gmail.com</p>
            <p className="info p-0 m-0">kbshegde210@gmail.com</p>
          </div>
        </Col>
        <Col sm={12} lg={8} xl={8}>
          <Form className="contact-form">
            <div className="d-md-flex justify-content-center">
              <Form.Group className="mr-2 w-100">
                <Form.Control placeholder="Ename" className="w-100" />
              </Form.Group>

              <Form.Group className="w-100">
                <Form.Control placeholder="email" className="w-100" />
              </Form.Group>
            </div>

            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="message"
                className="w-100 h-100"
              />
            </Form.Group>

            <div className="btn__container">
              <Button className="customBtn  mr-2" type="submit">
                Submit
              </Button>
              <Button className="customBtn">clear</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
