import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="HOSPITAL MANAGEMENT"
              description="This Hospital Management System is a comprehensive project developed using Python and Django. It streamlines and automates various hospital operations, ensuring efficient patient management, appointment scheduling, staff coordination, and record-keeping. The system features an intuitive interface, robust database management, and secure access controls, making it an ideal solution for enhancing hospital administration and patient care."
              ghLink="https://github.com/SUHAIBCHEMBAN/M-CARE"
              demoLink="https://www.mcareclinicservice.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLUE STAR CLONE WEB"
              description="
                  Welcome to the Blue Start Clone, a faithful recreation of the Blue Start official website. Our site replicates the design, functionality, and user experience of the original Blue Start platform, providing a seamless and immersive browsing experience. Explore all the features and content of the original site in this detailed and accurate clone, built for demonstration and educational purposes."
              ghLink="https://github.com/SUHAIBCHEMBAN/Blue-Star"
              demoLink="https://suhaibchemban.github.io/Blue-Star/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MAGGI CLONE WEBSITE"
              description="
                Welcome to the Maggi Clone, a faithful recreation of the Maggi official website. Our site replicates the design, functionality, and user experience of the original Maggi platform, providing a seamless and immersive browsing experience. Explore all the features and content of the original site in this detailed and accurate clone, built for demonstration and educational purposes."
              ghLink="https://github.com/SUHAIBCHEMBAN/Maggi"
              demoLink="https://suhaibchemban.github.io/Maggi/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CAMMERY CLONE WEB"
              description="Welcome to the Cammery Ice Cream Clone, a precise replica of the Cammery Ice Cream official website. This clone captures the design, functionality, and user experience of the original site, offering a delightful and interactive browsing experience. Explore the flavors, products, and features just as you would on the original platform, created for demonstration and educational purposes."
              ghLink="https://github.com/SUHAIBCHEMBAN/Cammery"
              demoLink="https://suhaibchemban.github.io/Cammery/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Burger King Clone Website"
              description="Welcome to the Burger King Clone, a meticulously crafted replication of the Burger King official website. Our clone faithfully mirrors the design, menu offerings, and user experience of the original Burger King platform, providing users with an authentic browsing and ordering experience. Explore our range of burgers, sides, beverages, and promotions, all presented in a familiar layout, perfect for demonstration and educational purposes."
              ghLink="https://github.com/SUHAIBCHEMBAN/Burgurking"
              demoLink="https://suhaibchemban.github.io/Burgurking/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
