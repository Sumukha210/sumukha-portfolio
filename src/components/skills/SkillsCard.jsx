import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

const SkillsCard = ({ title, skills }) => {
  return (
    <Col md={4} sm={6}>
      <Card className="mb-5 mt-2">
        <Card.Title className="text-center mt-3">{title}</Card.Title>
        <Card.Body className="m-0 p-0">
          {skills.length &&
            skills.map((item, i) => (
              <Card.Text className="text-center m-0 my-2" key={i}>
                {item}
              </Card.Text>
            ))}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SkillsCard
