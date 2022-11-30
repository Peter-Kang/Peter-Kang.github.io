import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const Work = ()=>
{
    return(
    <Container>
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto"><Image src='./profilePhoto.png' width="50" height="50"></Image></Col>
            <Col>
            <Row><Col className="fw-bold">Freelancing</Col></Row>
            <Row><Col>Evenline</Col></Row>
            <Row><Col>Convergence Art</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto"><Image src='./mindex.png' width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">Mindex</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row><Col>Connected Microservices and platforms with Kafka consumers and REST api calls. Focused on documentation and code reviews.</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto"><Image src='./QVI.png' width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">QVI</Col></Row>
                <Row><Col className="text-decoration-underline">Senior Software Engineer</Col></Row>
                <Row><Col>Lead software projects like temperature corrections and event driven actions. Mentored other software engineers.</Col></Row>
                <Row><Col className="text-decoration-underline">Softare Engineer</Col></Row>
                <Row><Col>Worked on Systems Software to control metrology machines. Added a Pub/Sub implementation in Common Language Infrastructure. Did work on both Windows Forms and embeded software that the systems software interfaced with.</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer Intern</Col></Row>
                <Row><Col>Updated their software project site for tracking Software Change reqests.</Col></Row>
                <Row><Col>Created a .Net MVC5 site done in a MVVM pattern to replace the perfect tracker site.</Col></Row>
            </Col>
        </Row>
        
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto"><Image src='./syncsum.png' width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">SyncSum</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row><Col>Summer Project for a Ruby on Rails Applicant tracking system</Col></Row>
            </Col>
        </Row>
        
    </Container>
    );
} 

export default Work;