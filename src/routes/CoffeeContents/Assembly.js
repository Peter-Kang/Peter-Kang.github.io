import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CoffeeAssembly = ()=>
{
    return (
        <Container>
            <h2><a id="Finish"><u>Finish</u></a></h2>
            <body>
            Overall, the Gaggiuino project helps create a consistent cup of espresso, and the upgrade allows for a pre-infusion step and adjustable pressure at different stages, enhancing the quality of the espresso.            </body>
            <br/>
            <div className="d-flex align-items-center justify-content-center">
                <figure class="figure" className="text-center">
                    <video width="400" controls>
                        <source src="./CoffeeMachineImages/IMG_2866.mov" type="video/mp4" allowFullScreen/>
                    </video>
                    <figcaption class="figure-caption">Bottomless Portafilter and Gaggiuino in full use</figcaption>
                </figure>
            </div>
            
        </Container>

    )
};

export default CoffeeAssembly;