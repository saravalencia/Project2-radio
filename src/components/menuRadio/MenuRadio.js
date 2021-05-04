import React, {useContext} from 'react'
import defaultImage from './defaultImage.jpg'
import './menuRadio.css'
import {MyContext} from '../../context/MyProvider'
import Favorites from './Radios'



function MenuRadio(){

  const context = useContext(MyContext)


  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}

    return (context.bottomPopUp) ? (

   <div className="container-popUp">

<div className="modal-wrapper">       
      <div className="modal-header">
            <h1>TOP 10 RADIOS LIST</h1>
            <spam  className="close-modal-btn" onClick={()=> context.setBottomPopUp(false)}>X</spam>
      </div>
      <div className="modal-content">
      {
          
          context.countryRadio.map((countrys, index)=> 

          <div key={index} className="modal-body"> 
          {<a onClick={() => context.getRadio(countrys)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={countrys.favicon} /></a> }
          <p className='a-radio' onClick={() => context.getRadio(countrys, index)}>
          {countrys.name}  
          </p> 
          <Favorites
          handleFavorites={context.handleFavorites}
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




