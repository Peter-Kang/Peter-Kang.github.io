import React from "react";
import { Container } from "react-bootstrap";
import CoffeeIntro from "./CoffeeContents/Intro";
import CoffeeOverview from "./CoffeeContents/Overview";
import GaggiuinoComponents from "./CoffeeContents/Components"
import CoffeeAssembly from "./CoffeeContents/Assembly"
import Stm32Upgrade from "./CoffeeContents/Stm32Upgrade"

const Gaggiuino = ()=>
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
        <br/>
        <Stm32Upgrade/>
        <br/><br/><br/>
    </Container>
    )
}

export default Gaggiuino;