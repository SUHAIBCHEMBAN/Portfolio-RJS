import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a Python Developer, I started My Coding Journy c and java then learned webdesign then i selected python learned python and learned django which is its frame work and added everything and made a mini project.
          After that I learned sql and ds and added all this and did a major project in a hospital management which was made very user friendly.After this I learned javascript currently i learn about React JS.
          </p>
          <br />
            Apart from coding, some other activities that I love to do!
          
          <ul><br />
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Suhaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
