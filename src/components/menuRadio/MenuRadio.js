import React, {useState} from 'react'
import defaultImage from './defaultImage.jpg'
import './menuRadio.css'
import Favorites from './Radios'

function MenuRadio(props){
  //const [isFavorite, setIsFavorite] = useState(false)
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
          {<a onClick={() => props.getRadio(countrys)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={countrys.favicon} /></a> }
          <p className='a-radio' onClick={() => props.getRadio(countrys, index)}>
          {countrys.name}  
          </p>    
          <Favorites
          handleFavorites={props.handleFavorites}
          info={countrys}
          // name={countrys.name}
          // favicon={countrys.favicon} 
          // url_resolved={countrys.url_resolved}
          />            
          </div>
          
         
          )}  
      </div>       
        
    </div>


   </div>      
   
 
 
    ) : "";



}

export default MenuRadio;

