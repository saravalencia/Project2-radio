import  React from 'react'
import './menuRadio.css'


function MenuRadio(props){


  
 

    return (props.trigger) ? (

         
  <div className="container-popUp"> 
      <div className="container-radios">
        <div className="btn-cl-pop">
            <button  onClick={()=> props.setBottomPopUp(false)}>X</button>
        </div>
           
      
      {
          
         props.countryRadio.map((countrys, index)=> 
           <div className="container-all-radios mov-radios"> 
          {<img className="img" src={countrys.favicon}/> }
          <a  className='a-radio' onClick={() => props.getRadio(countrys.url_resolved, index)}>
          {countrys.name}
          </a>
          <button className="button-favorites">+</button>          
          </div>
          
         
          )}
    
    </div>
  </div> 
 
 
    ) : "";



}

export default MenuRadio;
