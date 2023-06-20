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
                <h3>Experience</h3>
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
                <Row>
                    <Col>
                        SOW Contractor. Connect microservices and platforms with Kafka consumers and REST api calls. 
                        Focus on documentation, code reviews, and resolving software performance bottlenecks.
                        Shared organized information in the form of diagrams, meetings, and confluence pages. 
                        Provided feedback and input on design decisions. Along with helping teammates with writing SQL.
                    </Col>
                </Row>
                <ul>
                    <li>Team setting: Scrum/Agile setting. 1 product owner/business analyst,1 solution lead, 1 scrum master, and dev team of 5 people.</li>
                    <li>Tech Stack: Microservices architecture. AngularJS frontend hosted in Weblogic, interfaces with .Net services hosted in IIS written in C#. SQL Server Database. </li>
                    <li>CI/CD: Jenkins, applications deploy to a mix environment between private datacenters and Azure.</li>
                    <li>Repository: BitBucket (AngularJS) and Azure Development Portal (.Net).</li>
                    <li>Other tools: Jira tracks stories, confluence to document code.</li>
                </ul>
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
                <br/>
                <Row><Col className="text-decoration-underline">Software Engineer</Col></Row>
                <Row>
                    <Col>
                    Build systems software on metrology machines. Create a Pub/Sub implementation in Common Language Infrastructure. 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Work on both Windows Forms and embedded software that the systems software interfaced with.
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Metrology machines used vector math(3d point data), various cameras with various color modes (RGB,U8/grey scale,and yuv), and various servos.
                    </Col>
                </Row>
                <ul>
                    <li>
                        Team setting: Iterative waterfall. 
                        Collaborate with scientist, marketing, product managers, and other engineers. 
                        Teams consist of a hardware engineer, a phd scientist, a software engineer, and a marketing representative. 
                        Computer vision projects would consist of the marketing VP and a software engineer.
                    </li>
                    <li>Tech Stack: C++/C#/common language Infrastructure project several teams built up over the course of 30+ years. Windows form front end. C and python side projects and embedded devices.</li>
                    <li>CI/CD: Organize DLLs in folder structures that would be copied to machines</li>
                    <li>Repository: IBM ClearCase</li>
                    <li>Other Tools: In house software tracking tool made during internship.</li>
                </ul>
                <Row><Col className="text-decoration-underline">Software Engineer Intern</Col></Row>
                <Row><Col>Update their software project site for tracking Software Change requests.</Col></Row>
                <Row><Col>Create a .Net MVC5 site done in a MVVM pattern to replace the perfect tracker site.</Col></Row>
                <Row><Col>Work with people throughout the company and take input/feedback to update the existing software to better impact their workflow</Col></Row>
                <ul>
                    <li>Team setting: Single person dev team, with the QA VP as a supervisor.</li>
                    <li>Tech Stack: MVC5 .Net webapp. Along with PerfectTracker a Pascal like framework. With SQL Server as the database.</li>
                    <li>CI/CD: Deploy to a local server for testing and azure server for production.</li>
                    <li>Repository: TFT </li>
                </ul>
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
                <ul>
                    <li>Team setting: A designer, and the start up owner</li>
                    <li>Tech Stack: Ruby on Rails and Postgres database</li>
                    <li>CI/CD: Hosted locally on a server</li>
                    <li>Repository: Github</li>
                </ul>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h3>Alumni</h3>
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
                <h3>Projects</h3>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <lu>
                    <li> <a href="./#/Gaggiuino">Gaggiuino</a> </li>
                </lu>
                <lu>
                    <li> <a href="./#/Projects">Solo Projects</a> </li>
                </lu>
                <lu>
                    <li> <a href="./#/Collaborations">Collaborations</a> </li>
                </lu> 
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h3>Hobbies</h3>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <lu>
                    <li> <a href="./#/CoffeeMods">Coffee</a> </li>
                </lu> 
                <lu>
                    <li> <a href="./#/TeaProcess">Tea</a> </li>
                </lu>
                <lu>
                    <li> Reading List (TBD) </li>
                </lu> 
            </Col>
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