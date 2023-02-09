import React from "react";
import { Container} from "react-bootstrap";
import Image from "react-bootstrap/Image"

const CoffeeOverview = ()=>
{
    return (
        <Container>
            <h2><a id="overview">Overview of the wiring</a></h2>
            <body>
The components of the upgrade will have: power, microcontoller, display, temperature/boiler, and pressure/pump.
            </body>
            <div className="text-center">
            <Image  src="https://user-images.githubusercontent.com/42692077/160548957-88c93198-6d81-4081-8db6-552b6f6c5281.png" width="35%" height="35%"></Image></div>
        </Container>
    )
};

export default CoffeeOverview;