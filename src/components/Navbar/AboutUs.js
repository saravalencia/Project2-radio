import React from 'react';
import './AboutUs.css';

const AboutUs = props => (
    <div id="text">
        <h2 className="title">{props.title}</h2>
        <h3 className="subtitle">{props.subtitle}</h3>
        <p className="paragraf">{props.p}</p>
    </div>

)




export default AboutUs;