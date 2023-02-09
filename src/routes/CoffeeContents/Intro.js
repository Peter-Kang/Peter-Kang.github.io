import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const CoffeeIntro = ()=>
{
    return (
        <Container>
            <h2><a id="gaggiuino"><u>Gaggiuino</u></a></h2>
            <body>
                <Row><Col>Gaggiuino is a project created by the Gaggia Classic community to modify the Gaggia classic and is organized by Zer0-bit. The project adds a micro controller to give temperature and pressure control to the Gaggia Classic espresso machine.</Col></Row>
                <Row><Col>A link to their community documentation: <a href="https://gaggiuino.github.io/#/">https://gaggiuino.github.io</a></Col></Row>
                <Row><Col>The community documentation covers installation and wiring. This page will serve as a walk through of my implementation and components.</Col></Row>
            </body>
        </Container>

    )
};

export default CoffeeIntro;