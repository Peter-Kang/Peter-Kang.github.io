import React from "react";
import { Container } from "react-bootstrap";
import CoffeeIntro from "./CoffeeContents/Intro";
import CoffeeOverview from "./CoffeeContents/Overview";
import GaggiuinoComponents from "./CoffeeContents/Components"
import CoffeeAssembly from "./CoffeeContents/Assembly"

const Coffee = ()=>
{
    return (    
    <Container>
        <CoffeeIntro/>
        <br/>
        <CoffeeOverview/>
        <br/>
        <GaggiuinoComponents/>
        <br/>
        <CoffeeAssembly/>
        <br/><br/><br/>
    </Container>
    )
}

export default Coffee;