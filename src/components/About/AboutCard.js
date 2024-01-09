import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
     <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Shrinivas Bhusannavar</span> from <span className="purple">San Jose, California.</span>
      <br /><br />
      Currently, I'm enriching my knowledge with a <span className="purple">Masters in Data Analytics at San Jose State University </span> 
       My professional path includes <span className="purple">2.5 years</span> of Work Exp as a <span className="purple">Software Engineer 1</span> at Relevance Lab.
      <br /><br />
      My academic and professional journey has been a deep dive into areas like Applied Math for Analytics, Machine Learning, Python Programming, and Database Management. 
      I pride myself on my proficiency in languages like Python, C, and SQL, and my experience with databases such as MySQL, PostgreSQL, MongoDB, and Neo4j.
      <br />
      <br />

      I'm not just a software engineer; I am a certfied <span className="purple">Databricks Data Engineer Associate</span>, a testament to my commitment to mastering data analytics. 
      <br /><br />
      Beyond my professional endeavors, my world is filled with:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Traveling and exploring new places
      </li>
      <li className="about-activity">
        <ImPointRight /> Writing Tech Blogs and sharing knowledge
      </li>
      <li className="about-activity">
        <ImPointRight /> Delving into the latest in Technology, especially Large Language Models and General AI
      </li>
    </ul>
    <p style={{ color: "rgb(155 126 172)" }}>
      "Strive to build things that make a difference!"
    </p>
    <footer className="blockquote-footer">Shrinivas Bhusannavar</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
