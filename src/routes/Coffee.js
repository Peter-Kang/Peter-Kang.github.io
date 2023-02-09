import React from "react";
import { Container } from "react-bootstrap";
import CoffeeIntro from "./CoffeeContents/Intro";
import CoffeeOverview from "./CoffeeContents/Overview";
import TableOfContentsSideBarContainer from "./CoffeeContents/ToC"
import GaggiuinoComponents from "./CoffeeContents/Components"
import CoffeeAssembly from "./CoffeeContents/Assembly"

const Coffee = ()=>
{
    return (    
    <Container>
        <TableOfContentsSideBarContainer/>
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