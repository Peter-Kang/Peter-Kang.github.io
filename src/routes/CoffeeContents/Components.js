import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const GaggiuinoComponents = ()=>
{
    return (
    <Container>
        <h2><a id="components"><u> Components</u></a></h2>
        <h4><a id="powersupply">Power Supply</a></h4>
        <body>
            For the power supply, a AC-DC 5V 2A switching power supply module instead of the recommended 12v/1A power supply and 12v to 5v stepdown. 
            This was mainly because at the time it is cheaper, and was lucky enough to get one that was reliable. This take live and neutral from the machine's front power switch and creates a 5v power and ground from it.
            <br/>
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2741.png" height="25%" width="25%" alt="On The Top left is the power supply that converts live and neutral to 5v and ground"/>
                <figcaption class="figure-caption">On The Top left is the power supply that converts live and neutral to 5v and ground</figcaption>
            </figure>
        </body>
        <br/>
        <h4><a id="microcontoller">Micro Controller</a></h4>
        <body>
            An Arduino Nano micro controller is used to connect the devices and machine. 
            Currently the standard is a STM32 Blackpill micro controller, and the Arduino is not longer supported going forward. Upgrading the to STM32 Blackpill with added features would be the best path forward. It does add a significant amount of <a href="https://gaggiuino.github.io/#/?id=features">features</a>.
            <br/>
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2738.png" height="25%" width="25%" alt="On The Top left is the power supply that converts live and neutral to 5v and ground"/>
                <figcaption class="figure-caption">Arduino Nano Micro Controller</figcaption>
            </figure> 
        </body>
        <br/>
        <h4><a id="display">Display</a></h4>
        <body>
        For the display the Nexton Discovery touch screen is used. 
        I used a 2.4 inch display but the project also supports 2.8 inch displays. 
        The 2.4 inch display was chosen since it fits the machine better and cost less.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2740.png" height="25%" width="25%" alt="Nexton 2.4 inch Discover display"/>
                <figcaption class="figure-caption">Nexton 2.4 inch Discover display</figcaption>
            </figure> 
        </body>
        <br/>
        <h4><a id="temperature">Temperature</a></h4>
        <body>Adding temperature sensors to the machine will allow the machine to carefully climb up to the right temperature to prevent over extraction (bitterness) and under extraction (sour notes). 
            An M4 screw end temperature sensor and a thermal couple is needed for the microcontroller to attach to the machine. 
            It will read the temperature and relay the information to the micro controller, then the micro controller will send a signal to the relay device.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2743.png" height="25%" width="25%" alt="Thermal Coupler"/>
                <figcaption class="figure-caption">Thermal coupler</figcaption>
            </figure>
            When the relay picks up from the micro controller, it turns on the steam boiler switch.
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2739.png" height="25%" width="25%" alt="Solid State Relay Switch"/>
                <figcaption class="figure-caption">Relay Switch</figcaption>
            </figure>
        </body>
        <br/>
        <h4><a id="pressure">Pressure</a></h4>
        <body>
            Giving the machine pressure control will help in regulating the extraction more efficiently. Presure is measured in bars. 
            Typically in these machines 9 bars is the norm, but my machine has a 6.5 bar spring, so the highest pressure I can apply is 6.5 bars. 
            Slowing down the bar pressure allows the machine to extract the contents from the beans better. 
            A 20g VST basket is also used, whereas a traditional basket is 14g. 
            The larger basket allows for double shots of espresso to be pulled from the machine.
            Fitting the pump sensor into the exisiting pump setup requires a T fitting. 

            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2867.png" height="25%" width="25%" alt="T Fitting"/>
                <figcaption class="figure-caption">T Fitting, joining 3 orange-red tubes</figcaption>
            </figure>
            Attaching the sensor to the existing pump line gives the micro controller a pressure reading. 
            <figure class="figure" className="text-center">
                <Image class ="alignmnet-center figure-img img-fluid" src="./CoffeeMachineImages/IMG_2868.png" height="25%" width="25%" alt="Pressure Sensor"/>
                <figcaption class="figure-caption">Pressure Sensor, the hex shaped fitting attached to the orange-red tube</figcaption>
            </figure>
            After getting a reading from the pressure sensor, the micro controller then sends signals to a dimmer that adjusts the pressure of the pump.
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