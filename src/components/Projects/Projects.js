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
              imgPath={chatify}
              isBlog={false}
              title="USER AUTHENTICATION"
              description="This project is a robust user authentication system developed using Python and Django. The system provides essential features such as user registration, login, logout, and password management, ensuring secure access and management of user accounts. The aim is to offer a secure and efficient authentication solution, demonstrating proficiency in Django's authentication framework and security practices."
              ghLink="https://github.com/SUHAIBCHEMBAN/Python-django-project  "
              demoLink="https://python-django-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT CALENDAR IN REACT"
              description="This project is an interactive event calendar application developed using React. The application allows users to add and remove events dynamically without needing to reload the page, offering a seamless user experience. The goal is to provide a functional and user-friendly tool for managing events, showcasing advanced React skills and state management."
              ghLink="https://github.com/SUHAIBCHEMBAN/MyCalendar-RJS"
              demoLink="https://my-calendar-rjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QR CODE GENERATOR IN REACT" 
              description="This project is an interactive QR code generator developed using React. The application allows users to create custom QR codes quickly and easily by entering text or URLs. The generated QR codes can be scanned with any standard QR code reader, making it a useful tool for sharing information in a convenient and modern way. The aim is to provide a user-friendly and efficient QR code generation solution, showcasing proficiency in React."
              ghLink="https://github.com/SUHAIBCHEMBAN/Qr-Code-In-React"
              demoLink="https://qr-code-in-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLUE STAR CLONE WEB"
              description="
                  Welcome to the Blue Start Clone, This project is a responsive front-end web clone of the Blue Star website, built using HTML, CSS, media queries, and Bootstrap. The clone replicates the design and functionality of the original Blue Star site, featuring core components such as the homepage, product sections, promotional banners, and an intuitive navigation system. The aim is to create a similar user experience to the original, demonstrating advanced web development and design skills."
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
                Welcome to the Maggi Clone, This project is a responsive front-end web clone of the Maggi website, developed using HTML, CSS, and media queries. The clone captures the design and functionality of the original Maggi site, including key elements such as the homepage, product sections, promotional banners, and a seamless navigation system. The goal is to provide a similar user experience to the original site while showcasing advanced web development skills."
              ghLink="https://github.com/SUHAIBCHEMBAN/Maggi"
              demoLink="https://suhaibchemban.github.io/Maggi/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CAMMERY CLONE WEB"
              description="Welcome to the Cammery Ice Cream Clone, This project is a front-end web clone of the Camery Ice Cream website, crafted using HTML and CSS. The clone replicates the look and feel of the original Camery Ice Cream site, featuring key components such as the homepage, product listings, promotional banners, and an intuitive navigation system. The objective is to emulate the visual design and user interface, demonstrating skills in web development and design."
              ghLink="https://github.com/SUHAIBCHEMBAN/Cammery"
              demoLink="https://suhaibchemban.github.io/Cammery/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="BURGER KING CLONE WEB"
              description="Welcome to the Burger King Clone,This project is a front-end web clone of the Burger King website, designed using HTML and CSS. The clone replicates the visual design and layout of the official Burger King site, featuring elements such as the homepage, menu sections, promotional banners, and navigation. The aim is to provide a similar user experience to the original, showcasing proficiency in web development and design principles."
              ghLink="https://github.com/SUHAIBCHEMBAN/Burgurking"
              demoLink="https://suhaibchemban.github.io/Burgurking/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="VIVO CLONE WEB"
              description="Welcome to the VIVO Clone,This project is a front-end web clone of the Vivo website, created using HTML and CSS. The clone captures the design and functionality of the original Vivo site, including essential elements such as the homepage, product sections, promotional banners, and a smooth navigation system. The goal is to provide a user experience similar to the original site, showcasing proficiency in web development and design."
              ghLink="https://github.com/SUHAIBCHEMBAN/vivo"
              demoLink="https://suhaibchemban.github.io/vivo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="HERBAL CLONE WEB"
              description="Welcome to the Herbal Clone,This project is a front-end web clone of the Herbal website, developed using HTML and CSS. The clone replicates the design and functionality of the original Herbal site, featuring key elements such as the homepage, product sections, promotional banners, and an intuitive navigation system. The objective is to provide a similar user experience to the original site, showcasing your skills in web development and design."
              ghLink="https://github.com/SUHAIBCHEMBAN/Herbal"
              demoLink="https://suhaibchemban.github.io/Herbal/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
