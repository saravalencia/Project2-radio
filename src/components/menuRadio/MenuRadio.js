import React from 'react'
import '../map/map.css'

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

    return(

         
  <div className="RadioItemsContainer"> 
      
        <div >
          {
            
            props.countryRadio.filter((country) => country.codec === "MP3").sort((a,b) => b.votes - a.votes ).slice(0,10).map(countrys=> 
              
            <ul className='RadioList'>{<img className="img" src={countrys.favicon}/> }
            <li className='nav-radio' onClick={() => props.getRadio(countrys.url_resolved)}  >{countrys.name}</li>
            
            </ul>
           
            )}
        </div> 

      
  </div> 
 
 
    )



}

export default MenuRadio;