import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ()=>
{
    return (
        <Container>
            <Row><Col className="fw-bold"><h3><u>Full Stack</u></h3></Col></Row>
            <Row><Col> <h6> <b>Reminder App</b> </h6></Col></Row>
            <Row><Col>A Reminder app built with React, Deno, MongoDB, and Docker. Using Axios for the API calls from React to Deno. Then Oak middleware as a server in Deno</Col></Row>
            <Row><Col><a href="https://github.com/Peter-Kang/RemindMeScheduler">https://github.com/Peter-Kang/RemindMeScheduler</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>Pkang.dev</b> </h6></Col></Row>
            <Row><Col>Personal site done in react. This a site where I share things I enjoy along with projects I have completed.</Col></Row>
            <Row><Col><a href="https://github.com/Peter-Kang/Peter-Kang.github.io">https://github.com/Peter-Kang/Peter-Kang.github.io</a></Col></Row>
            <br/>
            <Row><Col className="fw-bold"><h3><u>Back end</u></h3></Col></Row>
            <Row><Col> <h6> <b>DwarfPoolAPIClient</b>  </h6></Col></Row>
            <Row><Col>.Net Project done to get API calls from DwarfPool, a popular ethereum mining pool at the time.</Col></Row>
            <Row><Col><a href="https://github.com/Peter-Kang/DwarfPoolAPIClient">https://github.com/Peter-Kang/DwarfPoolAPIClient</a></Col></Row>
        </Container>
    )
}

export default Projects;