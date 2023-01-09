import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ()=>
{
    return(
    <Container>
        <Row><Col className="fw-bold"> pkang.dev </Col></Row>
        <Row><Col>This site! Done in React and github pages</Col></Row>

        <Row><Col className="fw-bold"> MTG Draft App </Col></Row>
        <Row><Col>AngularJS Express web app for magic the gathering Drafting</Col></Row>
        <Row><Col>Worked with a friend on putting together an app to draft magic the gathering packs.</Col></Row>
        <Row><Col> <a>https://github.com/cman131/last-season-received-criticism-for-not-happening-in-a-prison-but-it-turns-out-society-is-the-prison</a> </Col></Row>

        <Row><Col className="fw-bold"> Hackaton: Hobby Expenditure Calculator </Col></Row>
        <Row><Col> .Net WebApp calculator to help budget how much could be spent a hobby</Col></Row>
        <Row><Col> <a>https://github.com/cman131/HobbyExpenditureCalculator</a> </Col></Row>

        <Row><Col className="fw-bold"> RIT iOS Hackathon: SwiftRekt </Col></Row>
        <Row><Col> Swift app color detection game. Worked with 3 other devs done entirely in swift. Primary spent time on the color detection part and helping the team with things that come up.</Col></Row>
        <Row><Col> <a>https://github.com/MorganCabral/swiftrekt-ios-app-dev-challenge-2015</a> </Col></Row>

    </Container>
    );
} 

export default Projects;