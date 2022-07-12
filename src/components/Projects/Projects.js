import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SPOMS"
              description="Warehouse/Sales Management system built with Java, C, and Oracle DB. Have features which allows client to view/add to cart/buy products, definition of products, creation of an warehouse model using JSON parsing, AGV digital twin managing orders."
              ghLink="https://github.com/RuiRioPina/SPOMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cargo Master"
              description="Logistics management software, focused on route planning for ships and trucks around the world using Data Structures on JAVA. It also optimizes containers placement on ships, taking into account each ship's characteristics and centre of mass."
              ghLink="https://github.com/RuiRioPina/CargoMaster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Many Labs"
              description="Management Software for Clinical Analysis laboratories built using Java. A simple UI and intuitive UI made using JavaFX. Its functionalities includes storage of clients informations, tests details, creation of tests, analytical data on the tests parameters (using Hypothesis tests and Simple and Multiple Linear Regression models)"
              ghLink="https://github.com/RuiRioPina/ManyLabs"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
