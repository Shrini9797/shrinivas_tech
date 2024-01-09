import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiMacos,
  SiJupyter,
  SiFirebase
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p style={{ fontSize: '0.75rem' }}>Maco</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: '0.75rem' }}>VisualStudio Code</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: '0.75rem' }}>Github</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p style={{ fontSize: '0.75rem' }}>Jupyter</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: '0.75rem' }}>Firebase</p>

      </Col>
      
    </Row>
  );
}

export default Toolstack;
