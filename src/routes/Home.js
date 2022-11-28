import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const Home = ()=>
{
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={2} sm={4} xs={4} className="m-auto">
                    <Image class="center-block" src='./profilePhoto.png'/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} sm={8} xs={10}>
                    Hi, I'm Peter Kang. A software engineer that works with interesting people on interesting projects.
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col md={8} sm={8} xs={10}> 
                    I enjoy listening to podcasts, exercising, reading, and learning about new things.
                </Col>
            </Row>
        </Container>
    );
} 

export default Home;