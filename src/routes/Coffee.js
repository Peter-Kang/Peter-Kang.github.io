import React from "react";
import { Container } from "react-bootstrap";
import CoffeeIntro from "./CoffeeContents/Intro";
import CoffeeOverview from "./CoffeeContents/Overview";
import TableOfContentsSideBarContainer from "./CoffeeContents/ToC"
import GaggiuinoComponents from "./CoffeeContents/Components"

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
    </Container>
    )
}

export default Coffee;