import React from 'react'
import './menuRadio.css'

function MenuRadio(props){


  /* Back-Next
  
  useEffect(() => {
    setNextRadioIndex(() => {
      if (currentRadioIndex + 1 > valueRadio.length - 1) {
        return 0;
      } else {
        return currentRadioIndex + 1;
      }
    });
  }, [currentRadioIndex]);*/

    return (props.trigger) ? (

         
  <div className="container-popUp"> 
      <div className="container-radios">
        <div className="btn-cl-pop">
            <button  onClick={()=> props.setBottomPopUp(false)}>X</button>
        </div>
           
      
      {
          
          props.countryRadio.filter((country) => country.codec === "MP3").sort((a,b) => b.votes - a.votes ).slice(0,10).map((countrys)=> 
           <div className="container-all-radios mov-radios"> 
          {<img className="img" src={countrys.favicon}/> }
          <a  className='a-radio' onClick={() => props.getRadio(countrys.url_resolved)}>
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
