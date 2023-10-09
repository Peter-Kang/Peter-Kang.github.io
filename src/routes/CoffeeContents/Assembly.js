import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CoffeeAssembly = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2><a id="Done"><u>Done</u></a></h2>
                    <p>
                        Overall, the Gaggiuino project helps create a consistent cup of espresso, and the upgrade allows for a pre-infusion step and adjustable pressure at different stages, enhancing the quality of the espresso.
                    </p>
                    <br />
                    <div className="d-flex align-items-center justify-content-center">
                        <figure className="figure text-center">
                            <video width="400" controls>
                                <source src="https://cdn.discordapp.com/attachments/1103103292030058526/1103105894612476014/IMG_2866.mov" type="video/mp4" allowFullScreen />
                            </video>
                            <figcaption className="figure-caption">Bottomless Portafilter and Gaggiuino in full use</figcaption>
                        </figure>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2><a id="PostMortem1"><u>Post Mortem Arduino Micro Controller</u></a></h2>
                    <p>
                        During the build it went more smoothly then I though, I tested what I could at each step.
                        It did take longer but I was sure of what components were being added and how they interacted with the existing system and if it made sense.
                        Later during use of the machine I ran into some issues that I realized came from the build.
                    </p>
                    <br />
                    <h4><a id="debugging"><u>Debugging</u></a></h4>
                    <i>(the good stuff)</i>
                    <br />
                    <p>
                        One example was when the pump was turned on sometimes the temperature would read 0C.
                        Another issue I ran into was that once the temperature would reach it would dip and vary too much.
                    </p>
                    <br />
                    <p>
                        Since alot of the issues were temperature related I revisited the wiring for the thermocouple and boiler.
                        I spent sometime looking at the connections and discovered that the dupont wires I was using had too small of a gauge and didn't contact the micro controller shield at certain points.
                        Where as the connections using a larger gauge wire (22 awg) for the pump were fine.
                        I like the dupont wires connecting the pins near the thermocouple, so I soldered wires on the other end where it attached to the micro controller.
                    </p>
                    <br />
                    <p>
                        After fixing the connection issues I was still having problems with the temperature dipping once it had reached the correct temperature.
                        I realized that the machine was hotter at the group head/ bottom of the boiler then the top, where convection heat would rise to.
                        So that indicated that the machine was losing heat to the mounting points at the bottom to conduction.
                        To address the conduction loss I found some insulated plastic spacer that fix the mounting holes.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="text-center">
                        <figure className="figure text-center">
                            <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2947.png?width=284&height=213" height="100%" width="100%" alt="Spacers" />
                            <figcaption className="figure-caption">Insulated Plastic Spacers</figcaption>
                        </figure>
                    </div>
                    <p>
                        Since I was going to take apart the machine might as well do the STM32 upgrade.
                    </p>
                </Col>
            </Row>
            
           
            
        </Container>
    )
};

export default CoffeeAssembly;