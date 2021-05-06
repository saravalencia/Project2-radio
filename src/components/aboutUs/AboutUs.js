import React from 'react';
import './AboutUs.css';
import Cards from './Cards'
import ContactList from './ContactList';

function AboutUs(props){

    return(

<div className="cotainer-aboutUs">
        
<div className="text">
        <h2 className="title">About us</h2>
        <br></br>
        <h3 className="subtitle">We are a team of young programmers dedicated to devolping Apps and websites.</h3> 
        <br></br>
        <p className="paragraf">We present our Radio App, in which you can choose radios from everywhere around the world. With just a couple of clicks, you can enjoy any music and programs from the country of your choice.
</p>
    </div>
    <div className="cards">
        <ContactList />    
    </div>

    </div>

    )
}
    



export default AboutUs;