import React from "react";
import { Container } from "react-bootstrap";

const GaggiuinoComponents = ()=>
{
    return (
    <Container>
        <h2>Components</h2>
        <h4>Power Supply</h4>
        <body>
            For the power supply, a AC-DC 5V 2A switching power supply module instead of the recommened 12v/1A power supply and 12v to 5v stepdown. 
            This was mainly because at the time it is cheaper, and was lucky enough to get one that was reliable.
        </body>
        <h4>Micro Controller</h4>
        <body>
            A Arduino Nano is used to connect the devices and machine. 
            At the time the parts where ordered the nano was not depercated. Upgrading the to STM32 Blackpill with added features would be the best path forward. It does add a significant amount of <a href="https://gaggiuino.github.io/#/?id=features">features</a>. 
        </body>
        <h4>Display</h4>
        <body>
            For the display Nexton Discovery touch screen is used. 
            I used a 2.4 inch display but the project also supports 2.8 inch displays. 
            The 2.4 inch display was picked since it fits the machine better and is cheaper.
        </body>
        <h4>Temperature</h4>
        <body>Adding temperature sensors to the machine will allow the machine to carefully climb up to the right temperature to prevent over extraction(bitterness) and under extraction (sour notes). 
            A M4 screw and temperature sensor and thermal couple is needed for this to attach on the machine. 
            It will read the temperature and relay the information to the micro controller, then the micro controller will turn on and off the boiler.
        </body>
        <h4>Pressure</h4>
        <body>
            Giving the machine presure control will also help in better setting the extraction. Presure is measured in bars. 
            Typically in machines 9 bars is the norm, but my machine has a 6.5 bar spring, so the highest pressure I can apply is 6.5 bars. Slowing down the bar pressures allows the machine to extract the contents from the beans better. 
            A 20g VST basket is also used, where as a traditional basket is 14g. The larger basket allows for double shots of espresso to be pulled from the machine.
            Fitting the pump sensor into the exisiting pump set up requires a T fitting. Attaching the sensor to the existing pump line gives the micro controller a pressure reading and turns on the off the pump. 
            This creates automated pressure control via the micro controller.
        </body>
    </Container>
    )
};

export default GaggiuinoComponents;