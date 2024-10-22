import React from "react";
import "./cardAbout.css"

const cardAbout = () => {
    return (
        <>
            <section>
                <div className="HeroInfo">
                    <div className="AboutHero">
                        <span className="HeroSkilltxt">Skilled Hand-To-Hand</span>
                        <span className="HeroName">Nezuko Kamado</span>
                        <span className="HeroAbout">Nezuko Kamado is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and turned into a demon by Muzan Kibutsuji.</span>
                        
                        <span className="Abilitiestxt">Abilities</span>
                        <div className="border"></div>
                        <ul className="ulAbilites">
                            <li>Ability1</li>
                            <li>Ability2</li>
                            <li>Ability3</li>
                            <li>Ability4</li>
                            <li><a href="https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado#Abilities">View More</a></li>
                        </ul>
                    </div>
                    <div className="animepic">
                        <img id="animepic" src="/hero-background.jpg" alt="heroimage"></img>
                    </div>
                </div>
            </section>
            <section className="Gallery">
                <span className="Gallerytxt">Best Moments</span>
                <div className="border-gallery"></div>
                <div className="ImageCard">
                    <img id="ImageCard" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621c0e59a39925ebb7904ff3_Nezuko%20vs%20Daki.jpeg" alt="EP1"/>
                    <img id="ImageCard" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621c0e3be9dd712a496b1d53_Nezuko%20vs%20Rui.jpeg" alt="EP1"/>
                </div>
            </section>
        </>
    );
};

export default cardAbout;