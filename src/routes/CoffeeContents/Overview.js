import React from "react";
import { Container} from "react-bootstrap";
import Image from "react-bootstrap/Image"

const CoffeeOverview = ()=>
{
    return (
        <Container>
            <h2><a id="overview"><u>Overview</u></a></h2>
            <p>
The upgrade consists of several components such as power, micro controller, display, temperature sensors, boiler control, and pressure sensor, and pump control.
            </p> 
            <div className="text-center">
                <Image  src="https://user-images.githubusercontent.com/42692077/160548957-88c93198-6d81-4081-8db6-552b6f6c5281.png" width="35%" height="35%"></Image>
            </div>
        </Container>
    )
};

export default CoffeeOverview;