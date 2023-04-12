import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CoffeeIntro = ()=>
{
    return (
        <Container>
            <h2><a id="gaggiuino"><u>Gaggiuino</u></a></h2>
                <Row><Col>Gaggiuino is a community-driven project that aims to enhance the Gaggia Classic espresso machine by adding a micro controller to regulate temperature and pressure.</Col></Row>
                <Row><Col>The project is organized by Zer0-bit and has created a detailed documentation that covers installation and wiring, which can be accessed through their community website: <a href="https://gaggiuino.github.io/#/">https://gaggiuino.github.io</a></Col></Row>
                <Row><Col>The community documentation covers installation and wiring. This article will provide a walkthrough of our implementation and the components we used for the upgrade.</Col></Row>
        </Container>

    )
};

export default CoffeeIntro;