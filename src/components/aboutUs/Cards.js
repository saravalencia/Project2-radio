import React from "react";
import './Cards.css'

function Cards(props) {
  return (
    <div className="card-container">
        <div className="image-container">
          <img src={props.img} alt="avatar" className="Photos" />  
        </div>      
        <div className="card-content">
            <div className="card-title">
                <h3 className="name">{props.name}</h3>
            </div>
            <div className="card-text">
                <p>{props.text}</p>  
            </div>
        </div>
    </div>

  );
}

export default Cards;