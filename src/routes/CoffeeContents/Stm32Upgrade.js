import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image"

const Stm32Upgrade = () => {
    return (
        <Container>
            <h2 id="stm32upgrade"><a><u>STM32 Micro Controller Upgrade</u></a></h2>
            <p>
                The STM32 Upgrade adds an additional dimmer to the machine and an analog to digital converter.
                The dimmer is to control the pump better and the converter is for the pressure sensor.
            </p>
            <figure className="figure text-center">
                <Image src="./CoffeeMachineImages/IMG_2943.png" width="35%" height="35%"></Image>
                <figcaption className="figure-caption">
                    On the left red circle we have the new dimmer added and on the right red circle we have the analog to digital converter added.
                </figcaption>
            </figure>
            <h2><a id="PostMortem2"><u>Post Mortem STM32 Micro Controller</u></a></h2>
            <p>
                This upgrade was more difficult then expected because I also wanted to redo some of the wiring.
                Since It was previously all in the machine and having the parts outside lets me visually see what parts turn on at different points better.
            </p>
            <br />
            <h4><a id="debuggingStm32"><u>Debugging</u></a></h4>
            <i>(more good stuff)</i>
            <br />
            <p>
                During the assembly a few of the wires were connected to the wrong point and I didn't realize it until I tested each of those points.
                Once the wiring got sorted out I realized that it was constantly in steam mode.
                This got me to check the ports that the steam switch was connected to. The wiring was right but it was connecting the steam switch (C15 on the stm32) and ground.
                I checked with the community and saw that sometimes this happens if there was a bridge on the board for ground since on the arduino nano those pins are both ground.
                It turns out that they were connected but it was the entire plate.
            </p>
            <figure className="figure text-center">
                <Image src="./CoffeeMachineImages/IMG_2937.png" width="25%" height="25%"></Image>
                <figcaption className="figure-caption">
                    The circles show how the two ports connect to the plate.
                </figcaption>
            </figure>
            <p>
                To separate them I used a knife to chisel out and separate each side.
                I made sure to avoid going over the screw holes, since the screws could link the two sides again.
            </p>
            <figure className="figure text-center">
                <Image src="./CoffeeMachineImages/IMG_2944.png" width="25%" height="25%"></Image>
                <figcaption className="figure-caption">
                    Separated both sides
                </figcaption>
            </figure>
        </Container>
    )
};


export default Stm32Upgrade;