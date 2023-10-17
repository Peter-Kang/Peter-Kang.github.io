import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ()=>
{
    return (
        <Container>
            <Row><Col className="fw-bold"><h3><u>Live Sites</u></h3></Col></Row>
            <Row><Col> <h6> <b>Pkang.dev</b> </h6></Col></Row>
            <Row><Col>Personal site done in react. This a site where I share things I enjoy along with projects I have completed.</Col></Row>
            <Row><Col><b>Demo:</b><a href="https://pkang.dev/"> https://pkang.dev/</a></Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/Peter-Kang.github.io">https://github.com/Peter-Kang/Peter-Kang.github.io</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>CryptoCoinCollection</b> </h6></Col></Row>
            <Row><Col>Displays coin prices. Done with Tram-lite library. </Col></Row>
            <Row><Col><b>Demo:</b><a href="https://pkang.dev/CryptoCoinCollection/"> https://pkang.dev/CryptoCoinCollection/</a></Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/CryptoCoinCollection">https://github.com/Peter-Kang/CryptoCoinCollection</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>Wise Whispering Wontons</b> </h6></Col></Row>
            <Row><Col>Fortune cookie app. Done with Tram-lite library. </Col></Row>
            <Row><Col><b>Demo:</b><a href="https://pkang.dev/WiseWhisperingWontons/"> https://pkang.dev/WiseWhisperingWontons/</a></Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/WiseWhisperingWontons">https://github.com/Peter-Kang/WiseWhisperingWontons</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>Tip Split</b> </h6></Col></Row>
            <Row><Col>Tip splitting app For Happy Earth Tea. Done with Tram-lite library. </Col></Row>
            <Row><Col><b>Demo:</b><a href="https://pkang.dev/TipSplit/"> https://pkang.dev/TipSplit/</a></Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/TipSplit">https://github.com/Peter-Kang/TipSplit</a></Col></Row>
            <br/>
            <Row><Col className="fw-bold"><h3><u>Other</u></h3></Col></Row>
            <Row><Col> <h6> <b>Reminder App</b> </h6></Col></Row>
            <Row><Col>A Multi-Container Reminder app built with React, Deno, MongoDB, and Docker. Using Axios for the API calls from React to Deno. Then Oak middleware as a server in Deno</Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/RemindMeScheduler">https://github.com/Peter-Kang/RemindMeScheduler</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>DwarfPoolAPIClient</b>  </h6></Col></Row>
            <Row><Col>.Net Core 2.0 Project done to get API calls from DwarfPool, a popular ethereum mining pool at the time.</Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/DwarfPoolAPIClient">https://github.com/Peter-Kang/DwarfPoolAPIClient</a></Col></Row>
            <br/>
            <Row><Col> <h6> <b>Spelling Bee Solver</b>  </h6></Col></Row>
            <Row><Col>C++ program to solve the New York Times puzzle SpellingBee</Col></Row>
            <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/SpellingBeeSolver">https://github.com/Peter-Kang/SpellingBeeSolver</a></Col></Row>
            <br/>
            
        </Container>
    )
}

export default Projects;