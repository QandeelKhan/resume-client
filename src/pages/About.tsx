import React from "react";
import UserIcon from "../components/icons/UserIcon";

const About: React.FC = (props: any) => {
    return (
        <section id="about" className="about-container">
            <div className="main-about-area">
                <div className="about-head-logo-area">
                    <h1 className="aboutme-heading">About Me</h1>
                    <div className="aboutuser-icon">
                        <UserIcon />
                    </div>
                </div>
                <div className="all-information"></div>
            </div>
        </section>
    );
};

export default About;
