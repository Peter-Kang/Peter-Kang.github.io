import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Projects = ()=>
{
    return (
        <Container>
            <Row><Col className="fw-bold"><h3><u>Live Sites</u></h3></Col></Row>
            <Row>
                <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                    <a href="https://pkang.dev/"><Image src="./apple-touch-icon.png" width="50" height="50"></Image></a>
                </Col>
                <Col>
                    <Row><Col> <h6> <u><b>Pkang.dev</b></u> </h6></Col></Row>
                    <Row><Col>Personal site done in react. This a site where I share things I enjoy along with projects I have completed.</Col></Row>
                    <Row><Col><b>Demo:</b><a href="https://pkang.dev/"> https://pkang.dev/</a></Col></Row>
                    <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/Peter-Kang.github.io">https://github.com/Peter-Kang/Peter-Kang.github.io</a></Col></Row>
                </Col>
            </Row>
            <br/>
            <Row>
                <Row>
                    <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                        <a href="https://pkang.dev/HappyTeaPicker"><Image src="./Projects/happy.png" width="50" height="50"></Image></a>
                    </Col>
                    <Col>
                        <Row><Col> <h6> <b>Happy Tea Picker</b> </h6></Col></Row>
                        <Row><Col>Random Tea Picker for Happy Earth Tea. Done with Tram-lite library. </Col></Row>
                        <Row><Col><b>Demo:</b><a href="https://pkang.dev/HappyTeaPicker"> https://pkang.dev/HappyTeaPicker</a></Col></Row>
                        <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/HappyTeaPicker">https://github.com/Peter-Kang/HappyTeaPicker</a></Col></Row>
                    </Col>
                </Row>
            </Row>
            <br/>
            <Row>
                <Row>
                    <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                        <a href="https://pkang.dev/CryptoCoinCollection/"><Image src="./Projects/crypto.png" width="50" height="50"></Image></a>
                    </Col>
                    <Col>
                        <Row><Col> <h6> <b>CryptoCoinCollection</b> </h6></Col></Row>
                        <Row><Col>Displays coin prices. Done with Tram-lite library. </Col></Row>
                        <Row><Col><b>Demo:</b><a href="https://pkang.dev/CryptoCoinCollection/"> https://pkang.dev/CryptoCoinCollection/</a></Col></Row>
                        <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/CryptoCoinCollection">https://github.com/Peter-Kang/CryptoCoinCollection</a></Col></Row>
                    </Col>
                </Row>
            </Row>
            <br/>
            <Row>
                <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                    <a href="https://pkang.dev/WiseWhisperingWontons/"><Image src="./Projects/wonton.png" width="50" height="50"></Image></a>
                </Col>
                <Col>
                    <Row><Col> <h6> <b>Wise Whispering Wontons</b> </h6></Col></Row>
                    <Row><Col>Fortune cookie app. Done with Tram-lite library. </Col></Row>
                    <Row><Col><b>Demo:</b><a href="https://pkang.dev/WiseWhisperingWontons/"> https://pkang.dev/WiseWhisperingWontons/</a></Col></Row>
                    <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/WiseWhisperingWontons">https://github.com/Peter-Kang/WiseWhisperingWontons</a></Col></Row>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={1} sm={2} xs={2} className="m-auto" align="center">
                    <a href="https://pkang.dev/TeaTips/"><Image src="./Projects/teatips.png" width="50" height="50"></Image></a>
                </Col>
                <Col>
                    <Row><Col> <h6> <b>Tea Tips</b> </h6></Col></Row>
                    <Row><Col>Tip splitting app For Happy Earth Tea. Done with Tram-lite library. </Col></Row>
                    <Row><Col><b>Demo:</b><a href="https://pkang.dev/TeaTips/"> https://pkang.dev/TeaTips</a></Col></Row>
                    <Row><Col><b>Repository:</b><a href="https://github.com/Peter-Kang/TeaTips">https://github.com/Peter-Kang/TeaTips</a></Col></Row>
                </Col>
            </Row>
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