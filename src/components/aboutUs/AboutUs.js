import React from 'react';
import './AboutUs.css';
import Cards from './Cards'
import ContactList from './ContactList';

function AboutUs(props){

    return(

<div className="cotainer-aboutUs">
        
        <div className="text">
        <h2 className="title">About us</h2>
        <h3 className="subtitle">We are a team of young programmers dedicated to developing Apps.</h3> 
        <p className="paragraf">We present our first Radio App, with which you can enjoy your favorite radios without advertising and anywhere in the world. With just a couple of clicks, you can enjoy any music and programs from other parts of the world.
It is the first Radio App that, regardless of the station, is responsible for broadcasting live.</p>
    </div>
    <div className="cards">
        <ContactList />    
    </div>

    </div>

    )
}
    



export default AboutUs;