import React from "react";
import "./cardHeader.css";

const cardHeader = () => {
    return (
        <>
             <header className="cardheader">
                <div className="logo"><img id="logo-img" src= "/logo.png"  alt="logo" /></div>
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
                    <li>
                        <a href="#hero">Home5</a>
                    </li>
                    <li>
                        <a href="#hero">Home6</a>
                    </li>
                    <li>
                        <a href="#hero">Home7</a>
                    </li>
                    <li>
                        <a href="#hero">Home8</a>
                    </li>
                    <li>
                        <a href="#hero">Home9</a>
                    </li>
                    </ul>
                </nav>
            </header>
        
        </>      
    );
};

export default cardHeader;