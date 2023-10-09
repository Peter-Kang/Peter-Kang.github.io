import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const GaggiuinoComponents = () => {
    return (
        <Container>
            <h2><a id="components"><u> Components</u></a></h2>
            <Row>
                <Col className="col-md-8 col-12">
                    <h4><a id="powersupply">Power Supply</a></h4>
                    <p>
                        For the power supply, a AC-DC 5V 2A switching power supply module instead of the recommended 12v/1A power supply and 12v to 5v stepdown.
                        This was mainly because there are fewer parts to wait for and the one I had was fairly reliable. This take live and neutral from the machine's front power switch and creates a 5v power and ground from it.
                    </p>
                    <br />
                </Col>
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2741.png?width=246&height=328" height="50%" width="50%" alt="On The Top left is the power supply that converts live and neutral to 5v and ground" />
                        <figcaption className="figure-caption">Top left of the image is the power supply</figcaption>
                    </figure>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="col-md-8 col-12">
                    <h4><a id="microcontoller">Micro Controller</a></h4>
                    <p>
                        An Arduino Nano micro controller is used to connect the devices and machine, but the standard is a STM32 Blackpill micro controller, and the Arduino is not longer supported going forward. Upgrading the to STM32 Blackpill with added features would be the best path forward. It does add a significant amount of <a href="https://gaggiuino.github.io/#/?id=features">features</a>.
                    </p>
                    <br/>
                </Col>
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2738.png?width=246&height=328" height="50%" width="50%" alt="Arduino Nano Micro Controller" />
                        <figcaption className="figure-caption">Arduino Nano Micro Controller</figcaption>
                    </figure>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="col-md-8 col-12">
                    <h4><a id="display">Display</a></h4>
                    <p>
                        For the display the Nexton Discovery touch screen is used.
                        I used a 2.4 inch display but the project also supports 2.8 inch displays.
                        The 2.4 inch display was chosen since it fits the machine better and cost less.
                        The display allows us to monitor the temperature and pressure of the machine.
                    </p>
                    <br/>
                </Col>
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2740.png?width=246&height=328" height="50%" width="50%" alt="Nexton 2.4 inch Discover display" />
                        <figcaption className="figure-caption">Nexton 2.4 inch Discover display</figcaption>
                    </figure>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="col-12">
                    <h4><a id="temperature">Temperature</a></h4>
                    <p>
                        To regulate temperature and prevent over-extraction or under-extraction of the coffee, we added temperature sensors to the machine.
                        We used an M4 screw end temperature sensor and a thermal couple to attach to the machine and read the temperature.
                        It will read the temperature and relay the information to the micro controller, then the micro controller will send a signal to the relay device.
                        When the relay picks up from the micro controller, it turns on the steam boiler switch.
                    </p>
                </Col>
                <Col className="col-6 text-center">
                    <figure className="figure text-center ">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2743.png?width=234&height=312" height="100%" width="100%" alt="Thermal Coupler" />
                        <figcaption className="figure-caption">Thermal coupler</figcaption>
                    </figure>
                </Col>
                <Col className="col-6 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2739.png?width=234&height=312" height="100%" width="100%" alt="Solid State Relay Switch" />
                        <figcaption className="figure-caption">Relay Switch</figcaption>
                    </figure>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="col-12">
                    <h4><a id="pressure">Pressure</a></h4>
                    <p>
                        The pressure sensor is attached to the existing pump line to measure the pressure, which is important in regulating the extraction more efficiently.
                        Typically in these machines 9 bars is the norm, but my machine has a 6.5 bar spring, so the highest pressure I can apply is 6.5 bars.
                        Slowing down the bar pressure allows the machine to extract the contents from the beans better.
                        A 20g VST basket is also used, whereas a traditional basket is 14g.
                        The larger basket allows for double shots of espresso to be pulled from the machine.
                        Fitting the pump sensor into the exisiting pump setup requires a T fitting.
                        Attaching the sensor to the existing pump line gives the micro controller a pressure reading.
                        After getting a reading from the pressure sensor, the micro controller then sends signals to a dimmer that adjusts the pressure of the pump.
                        This creates automated pressure control via the micro controller.
                    </p>
                </Col>
                <Col className="col-sm-4 col-12 text-center">
                    <figure className="figure text-center" width="312" height="416">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2867.png?width=312&height=416" height="75%" width="75%" alt="T Fitting" />
                        <figcaption className="figure-caption">T Fitting, joining 3 orange-red tubes</figcaption>
                    </figure>
                </Col>
                <Col className="col-sm-4 col-12 text-center">
                    <figure className="figure text-center" width="312" height="416">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/IMG_2868.png?width=312&height=416" height="75%" width="75%" alt="Pressure Sensor" />
                        <figcaption className="figure-caption">Pressure Sensor, <br/>the hex shaped fitting attached to the orange-red tube</figcaption>
                    </figure>
                </Col>
                <Col className="col-sm-4 col-12 text-center">
                    <figure className="figure  text-center" width="312" height="416">
                        <Image className="figure-img img-fluid" src="https://cdn.jsdelivr.net/gh/peter-kang/CDN/PersonalSite/Gagguino/dimmer.jpg?width=312&height=416" height="75%" width="75%" alt="dimmer" />
                        <figcaption className="figure-caption">Dimmer</figcaption>
                    </figure>
                </Col>
            </Row>
            <br />
        </Container>
    )
};

export default GaggiuinoComponents;