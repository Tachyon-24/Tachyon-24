import React from "react";
import CardHeader from "./card-1components/cardHeader"
import CardAbout from "./card-1components/cardAbout";
import CardFooter from "../components/Footer";
import "./card-1.css"

const card1 = () => {
    return (
        <>
            <CardHeader />
            <CardAbout />
            <CardFooter />
        </>
    );
};


export default card1;