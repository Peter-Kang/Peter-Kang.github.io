import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <Container>
      <br />
      <Row className="justify-content-center">
        <Col md={2} sm={4} xs={4} className="text-center">
          <Image roundedCircle src="./profilePhoto.png" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          Hi, I'm Peter Kang. A software engineer that enjoys working with
          interesting people on interesting projects. I have fun exploring and
          sharing my experiences.
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          I enjoy listening to stories, exercising, reading, and learning about
          new things.
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          Contact Info:
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/peter-kang-software/">
            Peter-Kang-Software
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          Github: <a href="https://github.com/Peter-Kang">Peter-Kang</a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={8} xs={10} className="text-center">
          Leetcode: <a href="https://github.com/Peter-Kang">Peter-Kang</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
