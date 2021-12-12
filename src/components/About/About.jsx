import React from 'react';
import './about.css';
import Award from '../../images/award.png';
import Minhaz from "../../images/minhaz.jpg"

const About = () => {
return (
<>
    <div className="about">
        <div className="aboutLeft">
            <div className="aboutCard aboutImgOverlay"></div>
            <div className="aboutCard">
                <img src={Minhaz}
                    alt="" className="aboutImg" />
            </div>
        </div>
        <div className="aboutRight">
            <h1 className="aboutTitle">About Me</h1>
            <p className="aboutSub">
                It is a long established fact that a reader will be distracted by the
                readable content.
            </p>
            <p className="aboutDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
            <div className="aboutAward">
                <img src={Award} alt="" className="aboutAwardImg" />
                <div className="aboutAwardTexts">
                    <h4 className="aboutAwardTitle">International Design Awards 2021</h4>
                    <p className="aboutAwardDesc">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                        and fugit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default About