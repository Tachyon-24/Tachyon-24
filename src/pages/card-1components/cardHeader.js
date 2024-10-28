import React from "react";
import "./cardHeader.css";
import HeaderLogo from "../../assests/header-logo.png"
const cardHeader = () => {
    return (
        <>
             <header className="cardheader">
                <div className="logo"><img id="logo-img" src= {HeaderLogo}  alt="logo" /></div>
                <nav>
                    <ul>
                    <li>
                        <a href="#hero">Home1</a>
                    </li>
                    
                    <li>
                        <a href="#hero">Home2</a>
                    </li>

                    
                    <li>
                        <a href="#hero">Home3</a>
                    </li>
                    <li>
                        <a href="#hero">Home4</a>
                    </li>
                    
                    </ul>
                </nav>
            </header>
        
        </>      
    );
};

export default cardHeader;