import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const Home = ()=>
{
    return(
        <div className="justify-content-center">
            <Row className="justify-content-center">
                <Col md={2} sm={2} xs={2}>
                    <Image  src='./profilePhoto.png'/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6} sm={8} xs={10}>
                    Hi, I'm Peter Kang. A software engineer that works with interesting people on interesting projects.
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Col md={6} sm={8} xs={10}> 
                    I enjoy listening to podcasts, exercising, reading, and learning about new things.
                </Col>
            </Row>
        </div>
    );
} 

export default Home;