import React from 'react'
import defaultImage from './defaultImage.jpg'
import './menuRadio.css'

function MenuRadio(props){

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}

    return (props.trigger) ? (

   <div className="container-popUp">

<div className="modal-wrapper">       
      <div className="modal-header">
            <h1>TOP 10 RADIOS LIST</h1>
            <spam  className="close-modal-btn" onClick={()=> props.setBottomPopUp(false)}>X</spam>
      </div>
      <div className="modal-content">
      {
          
          props.countryRadio.map((countrys, index)=> 

          <div key={index} className="modal-body"> 
          {<a onClick={() => props.getRadio(countrys.url_resolved)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={countrys.favicon} /></a> }
          <p className='a-radio' onClick={() => props.getRadio(countrys.url_resolved, index)}>
          {countrys.name}  
          </p>                
          </div>
          
         
          )}  
      </div>       
        
    </div>


   </div>      
   
 
 
    ) : "";



}

export default MenuRadio;




