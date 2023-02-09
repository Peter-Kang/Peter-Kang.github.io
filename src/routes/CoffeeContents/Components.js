import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';


const GaggiuinoComponents = ()=>
{
    return (
    <Container>
        <h2><a id="components"><u> Components</u></a></h2>
        <h4><a id="powersupply">Power Supply</a></h4>
        <body>
            For the power supply, a AC-DC 5V 2A switching power supply module instead of the recommened 12v/1A power supply and 12v to 5v stepdown. 
            This was mainly because at the time it is cheaper, and was lucky enough to get one that was reliable.
            <br/>
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2741.png" height="25%" width="25%" alt="On The Top left is the power supply that converts live and neutral to 5v and ground"/>
                <figcaption class="figure-caption">On The Top left is the power supply that converts live and neutral to 5v and ground</figcaption>
            </figure>
        </body>
        <br/>
        <h4><a id="microcontoller">Micro Controller</a></h4>
        <body>
            A Arduino Nano is used to connect the devices and machine. 
            At the time the parts where ordered the nano was not depercated. Upgrading the to STM32 Blackpill with added features would be the best path forward. It does add a significant amount of <a href="https://gaggiuino.github.io/#/?id=features">features</a>.
            <br/>
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2738.png" height="25%" width="25%" alt="On The Top left is the power supply that converts live and neutral to 5v and ground"/>
                <figcaption class="figure-caption">Arduino Nano Micro Controller</figcaption>
            </figure> 
        </body>
        <br/>
        <h4><a id="display">Display</a></h4>
        <body>
            For the display Nexton Discovery touch screen is used. 
            I used a 2.4 inch display but the project also supports 2.8 inch displays. 
            The 2.4 inch display was picked since it fits the machine better and cost lest.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2740.png" height="25%" width="25%" alt="Nexton 2.4 inch Discover display"/>
                <figcaption class="figure-caption">Nexton 2.4 inch Discover display</figcaption>
            </figure> 
        </body>
        <br/>
        <h4><a id="temperature">Temperature</a></h4>
        <body>Adding temperature sensors to the machine will allow the machine to carefully climb up to the right temperature to prevent over extraction (bitterness) and under extraction (sour notes). 
            A M4 screw and temperature sensor and thermal couple is needed for this to attach on the machine. 
            It will read the temperature and relay the information to the micro controller, then the micro controller will turn on and off the boiler. 
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2743.png" height="25%" width="25%" alt="Thermal Coupler"/>
                <figcaption class="figure-caption">Thermal coupler</figcaption>
            </figure>
            There is a relay switch attached to the steam boiler that picks up when we get a signal from the micro controller. Then connects the steam boiler and the brew switch.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2739.png" height="25%" width="25%" alt="Solid State Relay Switch"/>
                <figcaption class="figure-caption">Relay Switch</figcaption>
            </figure>
        </body>
        <br/>
        <h4><a id="pressure">Pressure</a></h4>
        <body>
            Giving the machine presure control will also help in better setting the extraction. Presure is measured in bars. 
            Typically in machines 9 bars is the norm, but my machine has a 6.5 bar spring, so the highest pressure I can apply is 6.5 bars. 
            Slowing down the bar pressures allows the machine to extract the contents from the beans better. 
            A 20g VST basket is also used, where as a traditional basket is 14g. 
            The larger basket allows for double shots of espresso to be pulled from the machine.
            Fitting the pump sensor into the exisiting pump set up requires a T fitting. 
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2867.png" height="25%" width="25%" alt="T Fitting"/>
                <figcaption class="figure-caption">T Fitting, joining 3 orange-red tubes</figcaption>
            </figure>
            Attaching the sensor to the existing pump line gives the micro controller a pressure reading. 
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2868.png" height="25%" width="25%" alt="Pressure Sensor"/>
                <figcaption class="figure-caption">Pressure Sensor, the hex shaped fitting attached to the orange-red tube</figcaption>
            </figure>
            After getting a reading from the pressure sensor, the micro controller then sends signals to a dimmer that adjsuts the pressure of the pump.
            This creates automated pressure control via the micro controller.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/dimmer.jpg" height="25%" width="25%" alt="dimmer"/>
                <figcaption class="figure-caption">Dimmer</figcaption>
            </figure>
        </body>
        <br/>
    </Container>
    )
};

export default GaggiuinoComponents;