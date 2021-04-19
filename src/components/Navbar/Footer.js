import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="social-media">
              <h4>Follow us on the social media</h4>
                <li></li>
                <li></li>
                <li></li>
            </div>
            {/* Column2 */}
            <div className="contact">
              <h4>Contact us</h4>
              <ul className="contact-form">
                <li>email</li>
                <li>Message</li>
              </ul>
            </div>
            
          </div>
          <hr />
         
        </div>
      </div>
    );



}

export default Footer;