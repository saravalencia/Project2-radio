import React from 'react';
import './AboutUs.css';
import ContactList from './ContactList';

function AboutUs(){

    return(

<div className="cotainer-aboutUs">
        
        <div className="text">
        <h2 className="title">TITLE</h2>
        <h3 className="subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3> 
        <p className="paragraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div className="cards">
        <ContactList />    
    </div>

    </div>

    )
}
    



export default AboutUs;