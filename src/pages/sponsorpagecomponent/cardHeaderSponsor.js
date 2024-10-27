import React from "react";
import "./cardHeaderSponsor.css";

const cardHeader = () => {
    return (
        <>
             <header className="cardheadersponsor">
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
                    
                    </ul>
                </nav>
            </header>
        
        </>      
    );
};

export default cardHeader;