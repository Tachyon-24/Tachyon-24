import React from "react";
import Header from "./card-1components/cardHeader"
import CardAbout from "./card-1components/cardAbout";
import Footer from "../components/Footer";
import "./card-1.css"

const card1 = () => {
    return (
        <>
            <Header />
            <CardAbout />
            <Footer />
        </>
    );
};


export default card1;