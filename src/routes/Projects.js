import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ()=>
{
    return(
    <Container>
        <Row><Col className="fw-bold"><h3><u>Free Lancing</u></h3></Col></Row>
        <Row><Col> <h5> Convergence Art </h5></Col></Row>
        <Row><Col>Arduino Bluetooth Light controlling art project.</Col></Row>
        <Row><Col>This project was done to help a Glass grad student with switching light sources for an art project.</Col></Row>
        <Row><Col><a href="https://github.com/Peter-Kang/FadingLightArudinoProject">https://github.com/Peter-Kang/FadingLightArudinoProject</a></Col></Row>
        <br/>
        <Row><Col><h5> Evenline.co </h5></Col></Row>
        <Row><Col>3D Glass printing start up. Created a UI to control motors using windows forms. C# and C++ project.</Col></Row>
        <Row><Col><a href="https://www.evenline.co"> https://www.evenline.co </a></Col></Row>
        <br/>
        <Row><Col className="fw-bold"><h3><u>Other projects</u></h3></Col></Row>
        <Row><Col className="fw-bold"><h5> MTG Draft App </h5></Col></Row>
        <Row><Col>AngularJS Express web app for magic the gathering Drafting</Col></Row>
        <Row><Col>Worked with a friend on putting together an app to draft magic the gathering packs.</Col></Row>
        <Row><Col> <a href="https://github.com/cman131/last-season-received-criticism-for-not-happening-in-a-prison-but-it-turns-out-society-is-the-prison"> https://github.com/cman131/last-season-received-criticism-for-not-happening-in-a-prison-but-it-turns-out-society-is-the-prison</a> </Col></Row>
        <br/>
        <Row><Col className="fw-bold"><h5>Hackaton: Hobby Expenditure Calculator</h5></Col></Row>
        <Row><Col> .Net MVC5 WebApp calculator to help budget how much could be spent a hobby. For the Intuit hackathon. Done in a team of 4.</Col></Row>
        <Row><Col> <a href="https://github.com/cman131/HobbyExpenditureCalculator" >https://github.com/cman131/HobbyExpenditureCalculator</a> </Col></Row>
        <br/>
        <Row><Col className="fw-bold"><h5>RIT iOS Hackathon: SwiftRekt</h5></Col></Row>
        <Row><Col> Swift app color detection game. Worked with 3 other devs done entirely in swift. Primary spent time on the color detection part and helping the team with things that come up.</Col></Row>
        <Row><Col> <a href="https://github.com/MorganCabral/swiftrekt-ios-app-dev-challenge-2015">https://github.com/MorganCabral/swiftrekt-ios-app-dev-challenge-2015</a> </Col></Row>
        <br/>
       
    </Container>
    );
} 

export default Projects;