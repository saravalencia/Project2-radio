import React from 'react';
import { FaBeer } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return(
<footer className="footer">
  <div className="container">
    <div className="row">

      <div className="social-media"> 
        <center>Here is going the social media </center>
      </div>

      <div className="col-xs-12 col-sm-4" id="contact">
        
      <form action="contact.php" method="post">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <input className='inputsuscribe' id="email" type="email" name="email" placeholder="example@correo.com" required="" />
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</footer>
    );




  }

export default Footer;