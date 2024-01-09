import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiCss3,
  DiAngularSimple
} from "react-icons/di";
import {
  SiPostgresql,
  SiApachespark,
  SiAmazonaws,
  SiMicrosoftazure,
  SiApacheairflow,
  SiDatabricks,
  SiPandas,
  SiNumpy,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

<Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: '0.75rem' }}>Python</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: '0.75rem' }}>Postgresql</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p style={{ fontSize: '0.75rem' }}>Microsoft Azure</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark/>
        <p style={{ fontSize: '0.75rem' }}>Apache Spark</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
        <p style={{ fontSize: '0.75rem' }}>Databricks</p>

      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: '0.75rem' }}>AWS</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
        <p style={{ fontSize: '0.75rem' }}>Apache Airflow</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: '0.75rem' }}>Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p style={{ fontSize: '0.75rem' }}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p style={{ fontSize: '0.75rem' }}>Numpy</p>
      </Col>
      
      
      

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: '0.75rem' }}>HTML</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: '0.75rem' }}>CSS</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: '0.75rem' }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{ fontSize: '0.75rem' }}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: '0.75rem' }}>React</p>
      </Col>
      
    
    </Row>
  );
}

export default Techstack;
