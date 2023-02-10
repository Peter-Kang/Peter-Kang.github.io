import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CoffeeAssembly = ()=>
{
    return (
        <Container>
            <h2><a id="Finish"><u>Finish</u></a></h2>
            <body>
            The finished project creates a consistent cup of espresso. It allows for a pre-infusion step, and can adjust the pressure at different stages. 
            </body>
            <br/>
            <div className="d-flex align-items-center justify-content-center">
                <video width="400" controls>
                    <source src="./CoffeeMachineImages/IMG_2866.mov" type="video/mp4" allowFullScreen/>
                </video>
            </div>
            
        </Container>

    )
};

export default CoffeeAssembly;