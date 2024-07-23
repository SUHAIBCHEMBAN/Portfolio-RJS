import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
            I have fallen in love with programming and have learned quite a bit along the way, I think... 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python and Django</b>
              </i>
              <br />
              <br />
              My fields of interest include building new &nbsp;
              <i>
                <b className="purple"> web applications and products, </b> particularly those related to {" "}
                <b className="purple">
                  Python.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript 
                </b>
              </i>
              {/* &nbsp; 
              <i>
                <b className="purple"> React.js </b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                alt="avatar" 
                style={{ 
                    borderRadius: '50%', 
                    width: '350px', // Adjust size as needed
                    height: '350px', // Adjust size as needed
                    objectFit: 'cover' 
                }} 
            />
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
                  href="https://github.com/SUHAIBCHEMBAN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/shuhaiibc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suhaib-c-114b10292/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.shuhaiiib/"
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
