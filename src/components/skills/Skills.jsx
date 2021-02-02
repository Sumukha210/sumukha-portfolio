import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SkillsCard from "./SkillsCard"

const Skills = () => {
  return (
    <div className="skills mt-5">
      <Row className="skills__container align-items-center">
        <Col md={12} className="align-items-center">
          <h1 className="main-title">Skills</h1>
          <Row>
            <SkillsCard title="technical skills" skills={technicalSkills} />
            <SkillsCard title="other skills" skills={otherSkills} />
            <SkillsCard title="tools" skills={Tools} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Skills

const technicalSkills = [
  "html5",
  "css3",
  "javascript",
  "Node",
  "react",
  "gatsby",
]
const otherSkills = [
  "material Ui",
  "Bootstrap",
  "MongoDb",
  "Redux",
  "sass",
  "Express",
]

const Tools = ["Vs Code", "git", "git bash", "figma"]
