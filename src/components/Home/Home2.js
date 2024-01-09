import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Hello there! I'm captivated by the world of data,
    <b className="purple"> I'm not just a coder; I'm a data storyteller.</b>
    <br />
    <br />I am fluent in classics like
    <i>
      <b className="purple"> Python, SQL, C, JavaScript</b>
    </i>
    <br />
    <br />
    My field of interests lie in delving into data to extract meaningful insights, visualizing data in compelling ways, and mastering the art of
    <i>
      <b className="purple"> Data engineering. </b>
    </i>
    <br />
    <br />
    In addition to my technical skills, I'm deeply interested in the latest advancements in 
    <i>
      <b className="purple"> Large Language Models (LLMs) and General AI, </b>
    </i>
    constantly exploring how these cutting-edge technologies can be integrated into my work.
    <br />
    <br />
    But wait, there's more! when I'm not data wrangling, you'll find me crafting web applications, mobile app ,with a sprinkle of magic using
    <i>
      <b className="purple"> Node.js , React, Angular, and Ionic. </b>
    </i>
    <br />
    <br />
    So, welcome to my digital abode, where data meets creativity and every project tells a story!  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shrini9797"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shrinivas97/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shri__97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
