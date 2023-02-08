import React from "react";
import { Container } from "react-bootstrap";
import CoffeeIntro from "./CoffeeContents/Intro";
import CoffeeOverview from "./CoffeeContents/Overview";
import TableOfContents from "./CoffeeContents/TableOfContents"
const Coffee = ()=>
{
    return (    
    <Container>
        <br/>
        <CoffeeIntro/>
        <br/>
        <CoffeeOverview/>
    </Container>
    )
}

export default Coffee;