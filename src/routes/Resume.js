import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const Resume = ()=>
{
    return(
    <Container>
        <br/>
        <Row>
            <Col>
                <h2><b>Experience</b></h2>
                <hr/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto" align="center"><Image src='./profilePhoto.png'  width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">Freelancing</Col></Row>
                <Row><Col>Evenline</Col></Row>
                <Row><Col>Convergence Art</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto" align="center"><Image src='./mindex.png'  width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">Mindex</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row><Col>Scrum/Agile setting. Connected Microservices and platforms with Kafka consumers and REST api calls. Focused on documentation, code reviews, and resolving software performance bottlenecks. Large .Net Codebase with several teams and departments.</Col></Row>
                <Row><Col>Microservices architecture. AngularJS frontend hosted in Weblogic. Interfaces with .Net services hosted in IIS. These applications were deployed in a mix environment between private datacenters and Azure.</Col></Row>
                <Row><Col>CI/CD was done via Jenkins. The code repository is stored in bitbucket (JS) and Azure Development Portal (.Net). Stories were tracked via Jira. </Col></Row>
                <Row><Col>Shared organized information in the form of diagrams, meetings, and confluence pages. Provided feedback and input on design decisions.</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto" align="center"><Image src='./QVI.png'  width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">QVI</Col></Row>
                <Row><Col className="text-decoration-underline">Senior Software Engineer</Col></Row>
                <Row><Col>Lead software projects like temperature corrections and event driven actions. Mentored other software engineers.</Col></Row>
                <Row><Col>Delegated work to other engineers and helped other engineers develop skills.</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row><Col>Worked on Systems Software on metrology machines. Added a Pub/Sub implementation in Common Language Infrastructure. The code base is a large C++/C#/common language Infrastructure project with several teams built up over the course of 30+ years. Did work on both Windows Forms and embedded software that the systems software interfaced with.</Col></Row>
                <Row><Col>Metrology machines used vector math(3d point data), various cameras with various color modes (RGB,U8/grey scale,and yuv), and various servos.</Col></Row>
                <Row><Col>Got the chance to collaborate with scientist, marketing, product managers, and other engineers. </Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer Intern</Col></Row>
                <Row><Col>Updated their software project site for tracking Software Change requests.</Col></Row>
                <Row><Col>Created a .Net MVC5 site done in a MVVM pattern to replace the perfect tracker site.</Col></Row>
                <Row><Col>Worked with people throughout the company and took input/feedback to update the existing software to better impact their workflow</Col></Row>
            </Col>
        </Row>
        
        <br/>
        <Row>
            <Col md={1} sm={2} xs={2} className="m-auto" align="center"><Image src='./syncsum.png' width="50" height="50"></Image></Col>
            <Col>
                <Row><Col className="fw-bold">SyncSum</Col></Row>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row><Col>A start up Ruby on Rails applicant tracking system</Col></Row>
                <Row><Col>Worked with 3 other people, primarily worked on backend Rails</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h2><b>Alumni</b></h2>
                <hr/>
            </Col>
        </Row>
        <Row >
            <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                <Image align="center" src='./rit.svg.png' width="50" height="50"></Image>
            </Col>
            <Col>
                <Row><Col><b>Rochester Institute of Technology</b>&nbsp; 2016</Col></Row>
                <Row><Col>B.S Computer Science</Col></Row>
                <Row><Col>B.S Economics</Col></Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h2><b>Projects</b></h2>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <lu>
                    <li> <a href="./#/Projects">Collaborations</a> </li>
                </lu> 
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h2><b>Hobbies</b></h2>
                <hr/>
            </Col>
        </Row>
        <Row>
           
        </Row>
        <br/>
        <Row className="justify-content-center">
            <Col md={8} sm={8} xs={10} className="fw-bold text-center">
                References Given Upon Request
            </Col>
        </Row>
        <br/>
    </Container>
    );
} 

export default Resume;