import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const CoffeeIntro = ()=>
{
    return (
        <Container>
            <h2>Introduction</h2>
            <body>
                <Row><Col>Gagguino is a project created by the gaggia classic community organized by Zer0-bit. The project adds more temperature and pressure control to the gaggia classic espresso machine.</Col></Row>
                <Row><Col>A link to their community documentation: <a href="https://gaggiuino.github.io/#/">https://gaggiuino.github.io</a></Col></Row>
                <Row><Col> The community documentation covers installation and wiring. This page will serve as a walk through of my impmentation and a walk through of the componets used.</Col></Row>
            </body>
        </Container>

    )
};

export default CoffeeIntro;